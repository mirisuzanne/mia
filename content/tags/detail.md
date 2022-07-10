---
sub: '[see all tags](/tags/)'
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag | slug }}/
eleventyComputed:
  title: 'All {{ tag }}'
  index: '{{ tag }}'
eleventyExcludeFromCollections: true
---

<!-- This is required, and I don't know why -->
