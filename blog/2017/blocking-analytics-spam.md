---
author: jonny
tags: [
  _post,
  Spam,
  DevOps,
  'Build Tools',
  'Front-end',
  JavaScript,
  Analytics,
  Code
  ]
image:
  src: 'blog/2017/ga-spam/spam-traffic.jpg'
summary: |
  Google Analytics is great for gathering data on who uses your web
  application, but becomes worthless if spam sessions start infesting your
  data. Here's how we've tried to combat the problem for oddbird.net.
---

# Blocking Analytics Spam

Like many websites, we use `Google Analytics` to gather data about our users –
what OS and browser they used, how they came to our site, etc. But a number of
months ago we started seeing lots of this:

It's not a new problem, but it's particularly problematic for smaller sites
that don't receive lots of traffic. On a given day, spam hits were accounting
for anywhere from ten to ninety (!) percent of our sessions.
