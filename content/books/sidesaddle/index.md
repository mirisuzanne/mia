---
feature: true
title: Riding SideSaddle*
sub: A queer novel, in fragments of memory…
date: 2015-04-02
venue: SpringGun Press
url: http://springgunpress.com
hero:
  img: writing/sidesaddle/box.jpg
  caption: A novel on 250 note-cards
index: riding sidesaddle
tags:
  - _calendar
  - riding sidesaddle
  - art
  - writing
  - book
events:
  - title: Queer Art & Reading
    venue: Charis Books
    url: https://www.facebook.com/events/737586806673620/
    adr: Atlanta, GA
    start: 2019-09-16
  - title: SideSaddle Reading
    venue: A Leon Affair
    date: 2017-03-18
  - title: SideSaddle Reading
    venue: The Card Table
    url: http://tracyshaffer.com/the-card-table/
    date: 2016-03-19
  - title: Fucking Fabulous Fiction Festival
    venue: Oriental Theater
    url: http://www.theorientaltheater.com/event/214770/fiction-fest
    date: 2015-07-31
    with:
      - name: BookBar
        url: http://bookbardenver.com/
      - name: High Fiction
        url: http://highfiction.com/
  - title: SideSaddle Book Release
    venue: Syntax Physic Opera
    url: http://physicopera.com/
    date: 2015-04-02
    venue_title: true
    with:
      - Buntport Theater
      - Jen Korte
      - Aaron & Jacob Liechty
    tags:
      - music
      - teacup gorilla
press:
  - text: |
      This feels more realistic than any other novel could hope to be:
      every moment is just one in a sea of other moments,
      no more or less important, although no less interesting for that.
      The result is an impressionist array
      of feelings and emotions and understandings of oneself and others.
    credit: Natalie Weizenbaum
  - text: |
      It’s a new and wonderful adventure each time,
      a story of outcasts, their caretaker,
      and the friendship and love they find with each other.
    credit: Ryo Yamaguchi
    venue: Michigan Quarterly Review
    url: http://www.michiganquarterlyreview.com/2015/06/on-riding-sidesaddle-an-interview-with-eric-suzanne/
    date: 2015-06-01
  - text: |
      The characters, ideas, story are exposed, raw, alive --
      merging masculine and feminine into some kind of mystical marriage.
    credit: Erin Rollman & Brian Colonna
    venue: Buntport Theater
  - text: |
      Rarely do you get to experience such intimate thoughts.
      It's like being dropped into someone's head,
      Quantum Leap style,
      for a transformative time in their life.
    credit: Chris Eppstein
  - text: |
      I was just digging everything,
      and didnt want the night to be over.
    credit: Sam O’Daniel
    venue: Your Older Brother
    url: http://www.yourolderbrother.com/2015/07/riding-sidesaddle-with-teacup-gorilla.html
    date: 2015-07-21
  - venue: Denver Westword
    url: http://www.westword.com/arts/music-art-and-words-are-in-the-cards-at-the-riding-sidesaddle-book-launch-6626798
    credit: Luke Leavitt
    date: 2015-04-02
  - venue: Colorado Music Buzz
    url: http://www.colomusicbuzz.com/eric-suzanne-drops-non-linear-novel-in-conjunction-with-teacup-gorilla/
    credit: Tim Wenger
    date: 2015-04-01
actions:
  - text: buy the novel
    url: http://www.springgunpress.com/riding-sidesaddle-eric-suzanne/
  - text: art from the novel
    url: http://squareup.com/store/miriamsuzanne/
video:
  caption: |
    with [Teacup Gorilla](/orgs/teacup-gorilla/)'s
    *Whiskey From Strangers*
  src:
    - iframe: https://player.vimeo.com/video/182858323
      width: 640
      height: 360
summary: |
  A fragmented memory of friendship --
  navigating fluid genders, relationships,
  and bodies that resist order, category, or completion.
  Inspired by Margaret Clap,
  and the many myths of Hermaphroditus.
---
{% import "content.macros.njk" as content %}

[Buy the book](http://www.springgunpress.com/riding-sidesaddle-eric-suzanne/)
or
[read it online](https://read.ridingsidesaddle.com)

---

{{ content.fig(
  video.src,
  video.caption
) }}

{{ content.quotes(press) }}

---

## 10 Myths on the Proper Application of Beauty Products

![True West Award](/assets/images/writing/sidesaddle/true-west-award.jpg)

Riding SideSaddle was
[adapted for the stage][10myths] by [Buntport Theater][buntport],
with original music by [Teacup Gorilla][tg].

[Read the script »](script/)

[10myths]: /theater/10myths/
[buntport]: http://buntport.com/
[tg]: /orgs/teacup-gorilla/

---

## The Holes They Leave

The Teacup Gorilla EP includes several songs based on the novel:

{% set ep = collections.all | getPage('/2015/07/09/holes-they-leave/') | first %}

{{ content.fig(ep.data.audio) }}

---

## Visual Art

The novel has gone vertical
with art prints,
and several [gallery shows](art/)…

{% set show = collections.all | getPage('/books/sidesaddle/art/') | first %}

{{ content.fig(
  show.data.gallery.images,
  show.data.gallery.caption
) }}

---

## Publishing Credits

Riding SideSaddle* is an
[open source text](http://creativecommons.org/licenses/by-nc-sa/4.0/)
published by
[SpringGun Press](http://springgunpress.com),
[released online](https://oddbooksapp.com/book/ridingsidesaddle)
by [OddBird](https://oddbird.net/),
and [adapted for the stage](/theater/10myths/)
by [Buntport Theater](http://buntport.com/) and
[Teacup Gorilla](http://teacupgorilla.com/).
