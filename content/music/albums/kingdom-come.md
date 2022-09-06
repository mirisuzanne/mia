---
feature: home
title: Kingdom Come
date: 2009-05-19
venue: Dirt Circle Dogs
url: https://soundcloud.com/dirt-circle-dogs/sets/kingdom-come
hero:
  img: art/music/kingdom-come.png
tags:
  - dirt circle dogs
press:
  - text: |
      Eisenstat sings that there is “No voice on the radio,”
      and perhaps, for now, that’s true.
      Kingdom, though, is certainly worth a private listen at home.
    credit: Cat Carroll
    venue: Onion AV Club
    date: 2009-08-14
    url: https://web.archive.org/web/20090817020255/https://denver.decider.com/articles/dirt-circle-dogs%2c31559/
album:
  - iframe: https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/728697027&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true
    title: Soundcloud embed
    width: 100%
    height: 620
---

{% import "content.macros.njk" as content %}
{{ content.figure(album) }}

------

{% import "macros/quote.njk" as quote %}
{{ quote.list(press) }}
