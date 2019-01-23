---
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag }}/
---

<h1>Tagged “{{ tag }}”</h1>

<ol reversed>
{% set taglist = collections[ tag ] %}
{% for post in taglist | reverse %}
<li><a href="{{ post.url | url }}">{{ post.data.title or post.fileSlug }}</li>
{% endfor %}
</ol>
