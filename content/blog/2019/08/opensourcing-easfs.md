project_path: /blog/_project.yaml
book_path: /blog/_book.yaml
description:Backend for adamyi.com, a general-purpose front-end server, enabling fast development for static sites through YAML and Markdown

{# updated_on: 2019-08-26 #}
{# published_on: 2019-08-26 #}
{# tags: news,myself,infra #}
{# featured_image: /blog/images/2019/08/website-builder.jpg #}
{# featured_snippet: Backend for adamyi.com, a general-purpose front-end server, enabling fast development for static sites through YAML and Markdown #}

# Opensourcing EASFS

EASFS (EAsy Static Front-end Server) is now open-sourced! Source code available at [https://github.com/adamyi/easfs](https://github.com/adamyi/easfs).

## What is EASFS
It's a general-purpose front-end server that allows fast development and iterations of static websites through YAML and Markdown. It's similar to Jekyll but supports more robust features, and also renders pages at request time.

It originated as a fork to Google's [WebFundamentals](https://github.com/google/WebFundamentals), but is now completely rewritten in Golang.

While I did write all the back-end code, it currently uses the same front-end as Google DevSite, because I'm lazy to write CSS. But it's a TODO to move this away from Google DevSite CSS & JS.

## Example
This website is powered by EASFS. Its content source code is available at [https://github.com/adamyi/adamyi.com](https://github.com/adamyi/adamyi.com).

## OSS License
Copyright 2018-2019 Adam Yi.

Copyright 2014-2018 Google LLC.

Under Apache 2.0 LICENSE.
