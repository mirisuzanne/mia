---
title: Dynamic CSS
banner: Dynamic CSS -- layouts & beyond
sub: with grids & custom properties
slides: https://talks.oddbird.net/dynamic-css/
hero:
  img: talks/miriam.jpg
tags:
  - speaking
  - code
  - layout
events:
  - venue: Webconf.asia
    url: https://2019.webconf.asia/
    adr: Hong Kong
    start: 2019-11-22
    end: 2019-11-23
  - venue: Develop Denver
    url: https://developdenver.org/
    start: 2019-08-15
    end: 2019-08-16
    adr: Denver, CO
  - venue: Generate New York
    url: https://www.generateconf.com/
    adr: San Francisco, CA
    start: 2019-04-24
    end: 2019-04-25
    slides: https://talks.oddbird.net/dynamic-css/generate19/
  - venue: Smashing Conf
    url: https://www.smashingconf.com/sf-2019/
    adr: San Francisco, CA
    start: 2019-04-16
    end: 2019-04-17
    slides: https://talks.oddbird.net/dynamic-css/smashingsf19/
    video: https://vimeo.com/331571593
  - venue: VueConf US
    url: http://vueconf.us/
    adr: Tampa, FL
    start: 2019-03-26
    end: 2019-03-27
    slides: https://talks.oddbird.net/dynamic-css/vueconf19/
  - venue: Front Range Front-End
    url: https://www.meetup.com/front-range-front-end/events/chtxtpyxpbcb/
    adr: Denver, CO
    start: 2018-11-01
    slides: https://talks.oddbird.net/dynamic-css/frontrange18/
    video: https://www.vuemastery.com/conferences/vueconf-us-2019/dynamic-css-with-vue/
  - venue: Full Stack Fest
    url: https://2018.fullstackfest.com/
    adr: Barcelona, Spain
    start: 2018-09-06
    slides: https://talks.oddbird.net/dynamic-css/fullstack18/
    video: https://youtu.be/9fTUeLsR2Hc
    embed: &fsfest
      iframe: https://www.youtube.com/embed/9fTUeLsR2Hc
      width: 560
      height: 315
  - venue: JSConf US
    url: https://2018.jsconf.us/
    adr: Carlsbad, CA
    start: 2018-08-21
    slides: https://talks.oddbird.net/dynamic-css/jsconfus18/
    video: https://www.youtube.com/watch?v=uwgBz748t-g
    embed: &jsconf
      iframe: https://www.youtube.com/embed/uwgBz748t-g
      width: 560
      height: 315
  - venue: CSSConf Argentina
    url: https://cssconfar.com/
    adr: Buenos Aires, Argentina
    start: 2018-08-18
    slides: https://talks.oddbird.net/dynamic-css/cssconfar18/
press:
  - text: |
      Some pretty mind-bendingly cool uses for CSS custom props
      from @MiriSuzanne --
      color, layout & animation all in css
      and only using JS to feed data.
    credit: Jason Pamental
    title: Invited Expert on the W3C
    url: https://twitter.com/jpamental/status/1118585546803036160
  - text: |
      Well that was awesome!!!
      “If you think CSS is a dumb language,
      you’re a dumb language — CSS IS AWESOME!”
      @MiriSuzanne thank you so much for the amazing talk!
    credit: Nour Saud
    title: Software Engineer
    url: https://twitter.com/Nour_ASoud/status/1118588349994823681
  - text: |
      Miriam has always been nothing but spot-on,
      professional, funny, while also being extremely knowledgeable,
      smart, polite and always on time.
    credit: Vitaly Friedman
    title: Founder of Smashing Magazine & Conference
    url: https://www.smashingmagazine.com/events/
  - text: |
      So stoked @mirisuzanne is @vueconfus !!!
      look at how cool CSS is ~ and all the squishy things it does.
    credit: Ngan Hoang
    title: Principal Designer at Prefect.io
    url: https://twitter.com/itsngansense/status/1111001282528063488
summary: |
  Don't let the declarative syntax fool you --
  CSS is a powerful and dynamic programming language.
  It's time to start moving style logic
  back into the language designed for it.
media:
  - span: full
    <<: *fsfest
  - span: full
    <<: *jsconf
---
{% import "content.macros.njk" as content %}

CSS has come a long way since the browser wars of the late 90s.
What used to be a struggle,
is now often a breeze (see `box-shadow` or `border-radius`).
But the last 2 years have pushed CSS into entirely new territory:
with DOM-aware variables
and calculations that can drive your design,
without all the invasive Javascript.

- Basics for understanding Custom Properties & `Calc()`.
- Practical examples and use-cases for data-infused design.
- Integrating with CSS Grids to build layouts on-the-fly.

------

{{ content.quotes(press) }}

------

{{ content.fig(
  data=media,
  caption='Conference videos…'
) }}
