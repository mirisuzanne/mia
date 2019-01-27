---
permalink: 'blog/{{ [pagination.pageNumber + 1, "/"]|join if (pagination.pageNumber > 0) else "" }}index.html'
pagination:
  data: collections._post
  size: 3
templateEngineOverride: njk
---

<h1>blog page {{ pagination.pageNumber }}</h1>

<ol>
{%- for item in pagination.items %}
<li>
{{ item.date | formatDate }}
<a href="{{ item.url | url }}">{{ item.fileSlug }}</a>
</li>
{% endfor -%}
</ol>

{% if (pagination.firstPageHref != pagination.lastPageHref) %}
{% if (pagination.firstPageHref != page.url) and (pagination.firstPageHref != pagination.previousPageHref) %}
<a href="{{ pagination.firstPageHref }}">first</a>
{% endif %}
{% if pagination.previousPageHref %}
<a href="{{ pagination.previousPageHref }}">previous</a>
{% endif %}
{% if pagination.nextPageHref %}
<a href="{{ pagination.nextPageHref }}">next</a>
{% endif %}
{% if (pagination.lastPageHref != page.url) and (pagination.lastPageHref != pagination.nextPageHref) %}
<a href="{{ pagination.lastPageHref }}">last</a>
{% endif %}
{% endif %}
