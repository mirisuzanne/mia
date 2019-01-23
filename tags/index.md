# Tags

<ol>
  {% for tag, data in collections %}
  {% if tag | isPublic %}
  {% set tag_url %}/tags/{{ tag }}/{% endset %}
  <li><a href="{{ tag_url | url }}">{{ tag }}</li>
  {% endif %}
  {% endfor %}
</ol>
