---
sub: '[see all tags](/tags/)'
pagination:
  data: extraTags
  size: 1
  alias: tag
permalink: /tags/{{ tag | slug }}/
eleventyComputed:
  title: 'Just {{ tag }}'
  banner: 'Just {{ tag }} and Nothing Else'
  calendar: '{{ tag }}'
extraTags:
  - nothing
---
