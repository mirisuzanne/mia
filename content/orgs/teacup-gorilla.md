---
title: Teacup Gorilla
sub: Dark indie-rock soundscapes with evocative poetry
org: Bass & Vocals
type: band
adr: Denver, CO
hero:
  img: art/music/video-meta.jpg
url: https://teacupgorilla.com/
date: 2010-03-04
end: ongoing
index: teacup gorilla
tags:
  - art
  - music
  - band
press:
  - text: |
      Teacup Gorilla's amiable creative approach,
      unorthodox roots, and sense of community
      have resulted in a sound that is difficult to pin down:
      part instrumental rock, part glam, part psychedelic, part jazz-inflected.
      And it sounds like nothing much else in this highly imitative era.
    venue: The Westword
    credit: Tom Murphy
    url: https://www.westword.com/music/jen-korte-miriam-suzanne-daniel-eisenstat-sondra-eby-of-teacup-gorilla-release-music-video-9001887
  - text: |
      Reminiscent of late ‘90s punk
      with elements of spoken word combed through,
      Teacup Gorilla never fails to put the moodiness
      to their heavy indie-rock.
    venue: 303 Magazine
    credit: Kori Hazel and Alex Kramer
    url: https://303magazine.com/2018/06/13-colorado-lgbt/
    title: 14 Colorado LGBTQ Musicians You Should Know
  - text: |
      I was just digging everything,
      and didn't want the night to be over.
    venue: Your Older Brother
    credit: Sam O'Daniel
    url: https://www.yourolderbrother.com/2015/07/22/riding-sidesaddle-with-teacup-gorilla-jen-korte-and-open-to-the-hound/
  - text: |
      Expect performances that blend mediums, styles and disciplines.
    venue: The Westword
    credit: Luke Leavitt
    url: https://www.westword.com/arts/music-art-and-words-are-in-the-cards-at-the-riding-sidesaddle-book-launch-6626798
  - text: |
      One of the most ambitious projects that has come across our desk recently.
    venue: Colorado Music Buzz
    credit: Tim Wenger
    url: https://www.colomusicbuzz.com/eric-suzanne-drops-non-linear-novel-in-conjunction-with-teacup-gorilla/
summary: |
  If you're gonna dance for war,
  you're gonna dance for sure.
  And if you're gonna dance for peace,
  you will never cease.
---
{% import "content.macros.njk" as content %}

{% set ep = collections.all | getPage('/music/albums/holes-they-leave/') %}
{{ content.figure(
  data=ep.data.audio,
  caption='The Holes They Leave EP'
) }}

- **Spring 2010**
  we collaborated with [Grapefruit Lab](/orgs/grapefruit-lab/)
  to create [Missa Populi](/theater/missa/)
- **Summer 2015**
  we released our debut EP,
  [The Holes They Leave](/music/albums/holes-they-leave/)
- **Fall 2015**
  we created
  [ReTriplicate](/theater/retriplicate/)
  with Buntport Theater and the Clyfford Still Museum.
- **Spring 2016**
  we collaborated with Buntport again
  to create a full-length show --
  [10 Myths on the Proper Application of Beauty Products][10myths] --
  which received the True West Award.
- **Spring 2018**
  we collaborated with Grapefruit Lab
  to create [JANE/EYRE](/theater/janeeyre/),
  a concert/theater adaptation of the classic novel.

Since then,
we've had a baby and a global pandemic --
but we're working on new material.
Hope to see you soon!

[10myths]: /theater/10myths/

---

{% set darkplain = collections.all | getPage('/2019/04/14/dark-plain-live/') %}

{{ content.figure(
  data=darkplain.data.video,
  caption='A Dark Plain at Seventh Circle Session'
) }}

{% set justlike = collections.all | getPage('/2017/02/13/just-like-that/') %}

{{ content.figure(
  data=justlike.data.video,
  caption='Just Like That official music video'
) }}

---

{% import "macros/quote.njk" as quote %}
{{ quote.list(press) }}

---

Teacup Gorilla is Daniel Eisenstat,
Sondra Eby,
and Miriam Suzanne.
Former members include
Josie Cool,
Jen Korte,
and Daniel Rule.
