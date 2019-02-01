---
layout: base
title: All Yer Tags
templateEngineOverride: njk
---

{% import "utility.macros.njk" as utility %}

<ol>
{% for tag, data in collections | sortTags %}
<li>
{{ utility.tag_link(tag) }}
[{{ data | length }}]
</li>
{% endfor %}
</ol>
