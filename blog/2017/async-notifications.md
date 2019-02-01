---
title: Django, Background Processes, and Keeping Users in the Loop
tags: [_post, _blog, celery, django, django-channels, ux, code]
image:
  src: 'blog/2017/04/17/async-notifications.jpg'
summary: |
  When you have out-of-band processing in a web app, how do you let users know
  that the status of a task has changed? Depending on your front-end client,
  there are a few different approaches you might take.
---

In my last post, I talked about how a modern web app needs background worker
processes. One way or another, you'll have some things you need to do that are
slower than you can do in a request/response cycle, and so you'll want to
handle them out of band. Have the API return a simple ``202 ACCEPTED`` and move
on with your life, right?
