'use strict';

const fs = require('fs');
const gulp = require('gulp');
const path = require('path');
const glob = require('globule');
const jsYaml = require('js-yaml');
const wfHelper = require('./wfHelper');
const runSequence = require('run-sequence');
const wfTemplateHelper = require('./wfTemplateHelper');

/**
 * Reads data/announcement.yaml and adds/removes the announcement
 * to all _project.yaml files.
 */
gulp.task('build:announcement', function(cb) {
  const globOpts = {
    srcBase: 'content/',
    prefixBase: true,
  };
  const dumpYamlOpts = {lineWidth: 1000};
  const projectYamlFiles = glob.find('**/_project.yaml', globOpts);
  const file = 'data/announcement.yaml';
  const announcementYaml = jsYaml.safeLoad(fs.readFileSync(file, 'utf8'));
  const showAnnouncement = announcementYaml['enabled'];
  projectYamlFiles.forEach((file) => {
    let projYaml = jsYaml.safeLoad(fs.readFileSync(file, 'utf8'));
    if (showAnnouncement) {
      projYaml.announcement = {};
      projYaml.announcement.description = announcementYaml.description;
      if (announcementYaml.background) {
        projYaml.announcement.background = announcementYaml.background;
      }
    } else {
      delete projYaml['announcement'];
    }
    fs.writeFileSync(file, jsYaml.safeDump(projYaml, dumpYamlOpts));
  });
  cb();
});

/**
 * Builds RSS & ATOM feeds /projects/
 */
gulp.task('build:projects', function(cb) {
  const section = 'projects';
  const baseOutputPath = path.join(global.WF.src.content, section);
  const options = {
    title: 'Projects',
    description: 'Some of the cool stuff that I\'ve been working on',
    section: section,
    outputPath: baseOutputPath,
  };
  const startPath = path.join(global.WF.src.content, section);
  let files = wfHelper.getFileList(startPath, ['**/*.md']);
  if (files.length > 0) {
    files.sort(wfHelper.updatedComparator);
    wfTemplateHelper.generateFeeds(files, options);
  }
  cb();
});


/**
 * Builds all of the listing pages, including RSS & ATOM feeds
 * for /blog/
 */
gulp.task('build:blog', function(cb) {
  const section = 'blog';
  const baseOutputPath = path.join(global.WF.src.content, section);
  const description = 'Thoughts, life, and technology';
  let options = {
    title: 'Blog',
    description: description,
    section: section,
    outputPath: baseOutputPath,
  };
  const startPath = path.join(global.WF.src.content, section);
  const patterns = ['**/*.md', '!tags/*', '!**/index.md'];
  let files = wfHelper.getFileList(startPath, patterns);
  files.sort(wfHelper.publishedComparator);
  wfTemplateHelper.generateIndex(files, options);
  wfTemplateHelper.generateFeeds(files, options);
  options.outputPath = path.join(baseOutputPath, 'tags');
  wfTemplateHelper.generateTagPages(files, options);
  let filesByYear = wfHelper.splitByYear(files);
  Object.keys(filesByYear).forEach(function(year) {
    options.outputPath = path.join(baseOutputPath, year);
    options.year = year;
    options.title = `Posts (${year})`;
    wfTemplateHelper.generateListPage(filesByYear[year], options);
    wfTemplateHelper.generateFeeds(
        filesByYear[year], Object.assign({maxItems: 100}, options));
    options.title = year;
    wfTemplateHelper.generateTOCbyMonth(filesByYear[year], options);
  });
  options = {
    outputPath: global.WF.src.content,
    articlesToShow: 3,
  },
  wfTemplateHelper.generateLatestWidget(files, options);
  cb();
});

/**
 * Builds all the things!
 */
gulp.task('post-install', function(cb) {
  runSequence('puppeteer:build', 'build', cb);
});

/**
 * Builds search suggestion index
 */
gulp.task('build:suggestion', function(cb) {
  const globOpts = {
    srcBase: 'content/',
    prefixBase: true,
  };
  const projectYamlFiles = glob.find('**/_project.yaml', globOpts);
  projectYamlFiles.forEach((file) => {
    let projYaml = jsYaml.safeLoad(fs.readFileSync(file, 'utf8'));
    let projPath = projYaml["home_url"];
    let startPath = path.dirname(file);
    //let files = wfHelper.getFileList(startPath, ['**/*.md', '**/_index.yaml', '**/*.html', '!**/_*.html', '!**/_*/**']);
    let files = wfHelper.getFileList(startPath, ['**/*.md']);
    let result = [];
    files.forEach((file) => {
        let suggestion = {};
        suggestion['p'] = file['url'];
        suggestion['k'] = [];
        suggestion['r'] = null;
        suggestion['t'] = file['title'];
        result.push(suggestion);
    });
    let finalresult = {};
    finalresult[projPath] = result;
    fs.writeFileSync(path.join(startPath, '_suggestions.json'), JSON.stringify(finalresult));
  });
  cb();
});

gulp.task('build', gulp.series(
  'build:announcement',
  'build:projects',
  'build:blog',
  'build:suggestion',
  function (cb) { cb(); })
);
