project_path: /blog/_project.yaml
book_path: /{{section}}/_book.yaml

{# auto_generated #}
{# updated_on: 1900-01-01 #}
{# published_on: 1900-01-01 #}

# {{ title }}

{{#each tags}}
* [{{this}}](/{{../section}}/tags/{{this}})
{{/each}}
