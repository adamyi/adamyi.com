/**
 * @fileoverview Primary gulp file.
 */

'use strict';

const del = require('del');
const gulp = require('gulp');
const chalk = require('chalk');
const gutil = require('gulp-util');
const minimist = require('minimist');
const requireDir = require('require-dir');

requireDir('./gulp-tasks');

gutil.log('---------------------------------');
gutil.log(`${chalk.bold('adamyi.com')} Gulp`);
gutil.log('---------------------------------');

/** ***************************************************************************
 * Global config
 *****************************************************************************/
global.WF = {
  gae: 'appengine-config',
  src: {
    content: 'content/',
    data: 'data/',
    templates: 'templates/',
  },
  maxArticlesInFeed: 10,
};

/** ***************************************************************************
 * Default options
 *****************************************************************************/
const defaultOptions = {
  string: ['lang', 'verbose', 'testAll', 'testTests', 'testWarnOnly'],
  default: {
    lang: null,
    verbose: false,
    buildType: 'dev',
    testAll: false,
    testTests: false,
    testWarnOnly: false,
  },
};

/** ***************************************************************************
 * Argument Parser
 *****************************************************************************/
// Parse arguments using minimist
global.WF.options = minimist(process.argv.slice(2), defaultOptions);

// What languages should it handle
if (global.WF.options.lang) {
  const langs = global.WF.options.lang.split(',');
  langs.forEach(function(lang) {
    if (global.WF.langs.indexOf(lang) === -1) {
      const msg = `Language ${chalk.red(lang)} not supported.`;
      gutil.log(' ', chalk.red('ERROR:'), msg);
      process.exit(1);
    }
  });
  global.WF.options.lang = langs;
  gutil.log('Language: ', gutil.colors.cyan(global.WF.options.lang));
} else {
  global.WF.options.lang = global.WF.langs;
}

// Show verbose output
if (global.WF.options.verbose !== false) {
  global.WF.options.verbose = true;
  gutil.log('Verbose: ', gutil.colors.cyan(global.WF.options.verbose));
}

// Test all files
if (global.WF.options.testAll !== false) {
  gutil.log('testAll:', chalk.cyan('true'));
  global.WF.options.testAll = true;
}

// Test test files
if (global.WF.options.testTests !== false) {
  gutil.log('testTests:', chalk.cyan('true'));
  global.WF.options.testTests = true;
}

// Warn only, no errors
if (global.WF.options.testWarnOnly !== false) {
  gutil.log('testWarnOnly: ', gutil.colors.cyan('true'));
  global.WF.options.testWarnOnly = true;
}

gutil.log('');

/** ***************************************************************************
 * Gulp Tasks
 *****************************************************************************/

/**
 * Cleans any generated files.
 */
gulp.task('clean', function() {
  const filesToDelete = [
    'test-results.json',
    'src/content/_shared/latest_*.html',
    'src/content/**/rss.xml',
    'src/content/**/atom.xml',
    'src/content/**/_files.json',
    'src/content/**/_suggestions.json',
    'src/content/sitemap.xml',
    'src/content/blog/_index.yaml',
    'src/content/blog/*/index.md',
    'src/content/blog/tags/*',
    '!src/content/**/_generated.md',
  ];
  const opts = {dryRun: false, dot: true};
  const deletedFiles = del.sync(filesToDelete, opts);
  gutil.log(' ', 'Deleted', chalk.magenta(deletedFiles.length + ' files'));
});

/**
 * Shows help.
 */
gulp.task('default', function(cb) {
  gutil.log(chalk.red('ERROR:'), 'no command specified.');
  gutil.log('Usage: gulp <command> [arguments]');
  gutil.log(' ', 'Commands:');
  gutil.log('  ', chalk.cyan('build'), 'Builds all auto-generated files');
  gutil.log('  ', chalk.cyan('clean'), 'Removes all auto-generated files');
  gutil.log('  ', chalk.cyan('test'), 'Checks the files for any issues');
  gutil.log(' ', 'Optional Arguments:');
  const langDesc = 'Comma separated list of languages to use';
  const langExamp = chalk.gray('eg: --lang=en,fr');
  gutil.log('  ', chalk.cyan('--lang'), langDesc, langExamp);
  gutil.log('  ', chalk.cyan('--verbose'), 'Log with verbose output');
  gutil.log('  ', chalk.cyan('--testAll'), 'Test all files, not just open');
  gutil.log('  ', chalk.cyan('--testTests'), 'Test the test files');
  gutil.log('  ', chalk.cyan('--testWarnOnly'), 'Only throw warnings');
});
