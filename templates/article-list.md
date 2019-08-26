project_path: /blog/_project.yaml
book_path: /{{section}}/_book.yaml

{# auto_generated #}
{# updated_on: 1900-01-01 #}
{# published_on: 1900-01-01 #}

# {{{ title }}}

{{#each articles}}

## {{ title }}
<div class="attempt-right">
  {{#if image}}
    <img src="{{image}}">
  {{else}}
    <img src="/updates/images/generic/star.png">
  {{/if}}
</div>
{{{description}}}

[Read more]({{url}})

{{#if author}}
[{{author}}](/resources/contributors#{{author}})
{{/if}}
{{published}}

{{#if tags}}
Tags: {{#each tags}}[{{this}}](/{{../../section}}/tags/{{this}}) {{/each}}
{{/if}}

<div style="clear:both"></div>

{{/each}}

<a href="https://adamyi.com/{{section}}/rss.xml">
  <img src="/images/md-icons/ic_rss_feed_black_48dp.svg" style="height:36px;">
  <span style="position:relative;top:-6px;">Subscribe</span>
  <link rel="alternate" type="application/rss+xml" title="RSS" href="https://adamyi.com/{{section}}/rss.xml">
  <link rel="alternate" type="application/atom+xml" title="ATOM" href="https://adamyi.com/{{section}}/atom.xml">
</a>
