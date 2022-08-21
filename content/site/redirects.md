---
eleventyExcludeFromCollections: true
title: Redirecting
sub: This page has moved
pagination:
  data: redirects
  size: 1
  alias: redirect
permalink: '{{ redirect.from }}'
---

{% set to = collections.all | getPage(redirect.to) %}

Redirecting you to [{{ to.banner or to.title }}]({{ to.url }}).
If you are not redirected shortly, please click the link.
