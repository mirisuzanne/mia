---
permalink: 'blog/{{ [pagination.pageNumber + 1, "/"]|join if (pagination.pageNumber > 0) else "" }}index.html'
nav:
  title: blog
  order: 2
pagination:
  data: collections._blog
  size: 3
templateEngineOverride: njk
renderData:
  title: Articles {% if pagination.pageNumber %}[page {{ pagination.pageNumber }}]{% endif %}
---

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
