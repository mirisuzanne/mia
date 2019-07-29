---
title: Don't Use My Grid System
sub: it's time to move past grid systems like Susy
slides: https://talks.oddbird.net/no-grid-system/
hero:
  img: talks/devconf-best.jpg
tags:
  - speaking
  - code
  - susy
  - layout
events:
  - venue: Boulder Python
    url: https://www.meetup.com/BoulderPython/events/256868153/
    adr: Boulder, CO
    start: 2019-02-12
    slides: https://talks.oddbird.net/no-grid-system/covalence19/
  - venue: Covalence Conf
    url: http://www.covalenceconf.com/
    adr: San Francisco, CA
    start: 2019-01-16
  - venue: Beyond Tellerand
    url: https://beyondtellerrand.com/events/duesseldorf-2018
    adr: Düsseldorf, Germany
    start: 2018-05-07
    slides: https://oddbooksapp.com/release/ce37ef91-8bd8-43e2-932a-66931b4b25ce
    video: https://vimeo.com/268576559
    embed: &bt
      iframe: https://player.vimeo.com/video/268576559
      width: 640
      height: 360
  - venue: Clarity
    url: https://www.clarityconf.com/2017
    adr: San Francisco, CA
    start: 2017-11-28
    slides: https://oddbooksapp.com/release/ae641b90-8efa-4b1e-8da8-16940edf420d
    video: https://youtu.be/Prc_V-j6yS4
    embed: &clarity
      iframe: https://www.youtube.com/embed/Prc_V-j6yS4
      width: 560
      height: 315
  - venue: CSS Dev Conf
    url: http://2017.cssdevconf.com/
    adr: New Orleans, LA
    start: 2017-10-09
    slides: https://oddbooksapp.com/release/0434d9c1-4e89-4827-abfc-4d3942fa305d
  - venue: DjangoCon US
    url: https://2017.djangocon.us/
    adr: Spokane, WA
    start: 2017-08-14
    slides: https://www.oddbooksapp.com/book/djangocon-layout
    video: https://youtu.be/mDRfFEcj3-Q
    embed: &django
      iframe: https://www.youtube.com/embed/mDRfFEcj3-Q
      width: 560
      height: 315
  - venue: Women Who Code Fort Collins
    url: https://www.meetup.com/Women-Who-Code-Fort-Collins/events/242033627/
    adr: Fort Collins, CO
    start: 2017-08-30
    slides: https://oddbooksapp.com/book/wwc-layout
    title: Practical Layouts, Past & Future
  - venue: Develop Denver
    url: https://developdenver.org/
    adr: Denver, CO
    start: 2017-08-10
    slides: https://oddbooksapp.com/release/76673f1e-63dc-4271-b326-76047288a10d
    title: Practical Layouts, Past & Future
  - venue: Refresh Denver
    url: https://www.meetup.com/refreshdenver/events/239219853/
    adr: Denver, CO
    start: 2017-06-14
    slides: https://oddbooksapp.com/release/543aea12-2264-4794-867d-d01fbf3a79c9
    title: Practical Layouts, Past & Future
press:
  - text: |
      Amazing talk by Miriam Suzanne at the Beyond Tellerand conference
      about the benefits of using plain CSS
      instead of heavy library for your grid!
      Very useful and inspiring. Thanks!
    credit: Sami Stein
    title: Frontend Developer at XING
    url: https://twitter.com/frontend_cat/status/993799732018532352
summary: |
  Explore the history of web layout
  with the creator of [Susy][susy] --
  why grid systems exist,
  how they work,
  and practical tips to avoid using them.

  [susy]: https://oddbird.net/susy/
media:
  - span: full
    <<: *bt
  - <<: *clarity
  - <<: *django
---
{% import "content.macros.njk" as content %}

For those few cases where a grid really is required,
we'll talk about the best ways to roll your own,
so you're not relying on a bloated library to make decisions for you.
We'll also look at the new layout toys —
from flexbox to CSS Grid —
and how to get started with only a few lines of code.

- When to use floats, CSS Grid, flexbox, custom properties, and other techniques.
- How to make grid-math simple, and lose the grid-system.
- How to make grid-systems work for you when you need them.

------

{{ content.quotes(press) }}

------

{{ content.fig(
  data=media,
  caption='Conference videos…'
) }}
