---
title: Teacup Gorilla
sub: Bass & Vocals -- dark indie soundscapes with evocative poetry
hero:
  img: art/music/video-meta.jpg
url: https://teacupgorilla.com/
start: 2010-03-04
end: null
index: teacup gorilla
tags:
  - art
  - music
  - teacup gorilla
events:
  - title: PRF BBQ Denver
    date: 2019-04-28
    url: https://www.facebook.com/events/2191187377812554/
    venue: The Bakery
    venue_url: https://thebakerydenver.com
  - title: FACEMAN's 100 Year Storm
    venue: The Oriental Theater
    url: http://www.theorientaltheater.com/event/260005/facemans-100-year-storm-
    date: 2016-11-18
  - title: Underground Music Showcase
    venue: Illegal Pete's
    url: http://theums.com/
    date: 2016-07-25
  - title: Underground Music Showcase
    venue: The Historian
    url: http://theums.com/
    date: 2015-07-25
  - venue: Bouldering Poets Anniversary
    url: http://boulderingpoets.wordpress.com/2014/04/07/may-17-2014-two-year-anniversary/
    date: 2014-05-17
    venue_title: true
    tags:
      - writing
      - reading
  - venue: Bouldering Poets
    url: https://boulderingpoets.wordpress.com/2013/04/01/march-photos/
    date: 2013-03-22
    venue_title: true
    tags:
      - writing
      - reading
press:
  - text: |
      Teacup Gorilla's amiable creative approach,
      unorthodox roots, and sense of community
      have resulted in a sound that is difficult to pin down:
      part instrumental rock, part glam, part psychedelic, part jazz-inflected.
      And it sounds like nothing much else in this highly imitative era.
    venue: The Westword
    credit: Tom Murphy
    url: http://www.westword.com/music/jen-korte-miriam-suzanne-daniel-eisenstat-sondra-eby-of-teacup-gorilla-release-music-video-9001887
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
    url: http://www.westword.com/arts/music-art-and-words-are-in-the-cards-at-the-riding-sidesaddle-book-launch-6626798
  - text: |
      One of the most ambitious projects that has come across our desk recently.
    venue: Colorado Music Buzz
    credit: Tim Wenger
    url: http://www.colomusicbuzz.com/eric-suzanne-drops-non-linear-novel-in-conjunction-with-teacup-gorilla/
summary: |
  Teacup Gorilla inhabits the venues of Denver, CO
  with dark indie-rock soundscapes and evocative poetry --
  often compared to early Modest Mouse,
  Explosions in the Sky,
  or the Velvet Underground.
---
{% import "content.macros.njk" as content %}

{% set ep = collections.all | getPage('/2015/07/09/holes-they-leave/') | first %}

{{ content.fig(
  data=ep.data.audio,
  caption='The Holes They Leave EP'
) }}

We also enjoy collaborating across media
with theaters, writers, dancers, and other artists.

- In the summer of 2015 we released our debut EP,
  The Holes They Leave,
  along with the multimedia novel
  Riding SideSaddle*.
- In 2015 and 2016, we collaborated with Buntport Theater to crerate
  ReTriplicate for the Clyfford Still Museum,
  and a fuull-length play --
  10 Myths on the Proper Application of Beauty Products --
  which recieved a True West Award.
- In 2018, we collaboratted with Grapefruit Lab
  to create JANE/EYRE,
  a concert/theater adaptation of the classic.

---

{% set darkplain = collections.all | getPage('/2019/04/14/dark-plain-live/') | first %}

{{ content.fig(
  data=darkplain.data.video,
  caption='A Dark Plain at Seventh Circle Session'
) }}

---

{{ content.quotes(press) }}

---

{% set justlike = collections.all | getPage('/2017/02/13/just-like-that/') | first %}

{{ content.fig(
  data=justlike.data.video,
  caption='Just Like That official music video'
) }}

---

Teacup Gorilla is Daniel Eisenstat,
Sondra Eby,
Miriam Suzanne,
and Josselyn Cool.
