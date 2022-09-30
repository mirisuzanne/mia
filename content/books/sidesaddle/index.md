---
feature: home
type: novel
title: Riding SideSaddle*
venue: ridingsidesaddle.com
url: https://ridingsidesaddle.com
sub: A queer novel, in fragments of memory…
date: 2015-04-02
hero:
  img: writing/sidesaddle/box.jpg
  alt:
  caption: A novel on 250 note-cards
index: riding sidesaddle
events:
  - title: Queer Art
    type: reading
    venue: Charis Books
    url: https://www.facebook.com/events/737586806673620/
    adr: Atlanta, GA
    date: 2019-09-16
  - title: A Leon Affair
    type: reading
    venue: Leon Gallery
    adr: Denver, CO
    date: 2017-03-18
  - title: The Card Table
    type: reading
    venue: Buntport
    adr: Denver, CO
    date: 2016-03-19
  - title: Fucking Fabulous Fiction Festival
    type: reading
    venue: Oriental Theater
    url: https://www.theorientaltheater.com/event/214770/fiction-fest
    adr: Denver, CO
    date: 2015-07-31
    with:
      - name: BookBar
        url: https://bookbardenver.com/
      - name: High Fiction
        url: https://highfiction.com/
  - title: SideSaddle Book Release
    type: reading
    venue: Syntax Physic Opera
    url: https://physicopera.com/
    date: 2015-04-02
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
    url: https://www.michiganquarterlyreview.com/2015/06/on-riding-sidesaddle-an-interview-with-eric-suzanne/
    date: 2015-06-01
  - text: |
      The characters, ideas, story are exposed, raw, alive --
      merging masculine and feminine into some kind of mystical marriage.
    credit: Erin Rollman & Brian Colonna
    venue: Buntport Theater
  - text: |
      I was just digging everything,
      and didnt want the night to be over.
    credit: Sam O’Daniel
    venue: Your Older Brother
    url: https://www.yourolderbrother.com/2015/07/riding-sidesaddle-with-teacup-gorilla.html
    date: 2015-07-21
  - venue: Denver Westword
    url: https://www.westword.com/arts/music-art-and-words-are-in-the-cards-at-the-riding-sidesaddle-book-launch-6626798
    credit: Luke Leavitt
    date: 2015-04-02
  - venue: Colorado Music Buzz
    url: https://www.colomusicbuzz.com/eric-suzanne-drops-non-linear-novel-in-conjunction-with-teacup-gorilla/
    credit: Tim Wenger
    date: 2015-04-01
actions:
  - text: buy the novel
    url: https://miriamsuzanne.square.site/product/ridingsidesaddle/16?cs=true&cst=custom
  - text: art from the novel
    url: https://miriamsuzanne.square.site/
video:
  caption: |
    with [Teacup Gorilla](/orgs/teacup-gorilla/)'s
    *Whiskey From Strangers*
  src:
    - iframe: https://player.vimeo.com/video/182858323
      title: Live video
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

[Buy the book](https://miriamsuzanne.square.site/)
or
[read it online](https://ridingsidesaddle.com)

---

{{ content.figure(
  video.src,
  video.caption
) }}

{% import "macros/quote.njk" as quote %}
{{ quote.list(press) }}

---

## 10 Myths on the Proper Application of Beauty Products

{{ 'writing/sidesaddle/true-west-award.jpg' | img('True West Award') | safe }}

Riding SideSaddle was
[adapted for the stage][10myths] by [Buntport Theater][buntport],
with original music by [Teacup Gorilla][tg].

[Read the script »](/theater/10myths/script/)

[10myths]: /theater/10myths/
[buntport]: https://buntport.com/
[tg]: /orgs/teacup-gorilla/

---

## The Holes They Leave

The Teacup Gorilla EP includes several songs based on the novel:

{% set ep = collections.all | getPage('/music/albums/holes-they-leave/') %}

{{ content.figure(ep.data.audio) }}

---

## Visual Art

The novel has gone vertical
with art prints,
and several [gallery shows](art/)…

{% set show = collections.all | getPage('/books/sidesaddle/art/') %}

{{ content.figure(
  show.data.gallery.images,
  show.data.gallery.caption
) }}

---

## Publishing Credits

Riding SideSaddle* is an
[open source text](https://creativecommons.org/licenses/by-nc-sa/4.0/)
published by
**SpringGun Press**,
[released online](https://ridingsidesaddle.com)
by [OddBird](https://oddbird.net/),
and [adapted for the stage](/theater/10myths/)
by [Buntport Theater](https://buntport.com/) and
[Teacup Gorilla](https://teacupgorilla.com/).
