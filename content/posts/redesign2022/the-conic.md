---
title: CSS Tie-Dye Gradient Backgrounds
sub: a conic splash of color
date: 2022-10-21
hero:
  img: 2022/trans-rights.jpg
  alt: |
    Trans Rights in all-caps
    on blurry radial/conic tie-dye-like splash
    of pinks, blues, and whites
  caption: |
    CSS is Rad(ial)
tags:
  - css
  - colors
summary: |
  [As] a flame,
  Which oft, they say, some evil Spirit attends,
  Hovering and blazing with delusive light--

  ---John Milton
  {.cite}
---

{% import "content.macros.njk" as content %}

## Playful gradient inspiration

Last week,
my friend Dylan
(a junior dev looking for work, if you have any leads!)
sent me a question about
improving the performance of this
fun blurry-blob background animation:

{{ content.codepen(
  id='zYjyEOb',
  title='Moving CSS blur background',
  preview=true,
  caption='It performs ok on my machine, but can get choppy on less powerful devices'
) }}

I made a few small suggestions,
and sent links to other animation performance resources.
But this isn't a post about animation performance.
I love the sense of playfulness
that Dylan has already discovered in CSS --
despite code bootcamps generally
not giving the language much attention.

Now I want to play with blurry blob backgrounds too!

## Looking for texture

Over at
[CSS { In Real Life }](https://css-irl.info/),
Michelle Barker
wrote a great post on
[CSS Halftone Patterns](https://css-irl.info/css-halftone-patterns/).
I've always enjoyed halftone patterns,
and I've been looking for something
to add _texture_
to my new site design.
The last several designs used
semi-random semi-transparent bubbles --
something like this,
but with colors based on the site design:

{{ content.codepen(
  id='mdXzwxr',
  title='Random circles',
  caption='Hit rerun in the bottom right to generate new circles'
) }}

I like that randomness,
but it's time to try something new.

After playing with the half-tones effect,
it didn't feel quite right in context.
So I went looking for more inspiration.
There are a lot of CSS background pattern ideas out there:

- Lea Verou's classic
  [CSS3 Patterns Gallery](http://projects.verou.me/css3patterns/)
- Temani Afif's
  [CSS-Pattern.com](https://css-pattern.com/)
- Jim Raptis'
  [CSS Background Patterns](https://www.magicpattern.design/tools/css-backgrounds)
  tool
- And [many more](https://www.magicpattern.design/tools/css-backgrounds)

As always,
Ana Tudor also has
a series of fantastic gradient demos
on CodePen:

{{ content.codepen(
  id='GRRpzNX',
  title='Single element card background patterns',
  user='thebabydino'
) }}

{{ content.codepen(
  id='JxELvZ',
  title='Single element card background patterns',
  user='thebabydino'
) }}

## A conic & radial first draft

I might revisit some of those ideas
down the road.
I imagine this site
potentially having different patterns
for different areas of the site --
or maybe a way to select your favorite pattern?
But for now I went with a pattern by
[Temani Afif](https://twitter.com/ChallengesCss)
that I really love:

{{ content.codepen(
  id='ZErrbEp',
  title='Fancy pattern using radial-gradient',
  user='t_afif'
) }}

I swapped in my own subtle site background colors,
and an extra radial gradient on top.
I think the pattern would get overwhelming
if it continued too far down the page,
so this gives it a nice fade-out
with soft/curved edges.

{{ content.codepen(
  id='gOzVama',
  title='Site background'
) }}

## Blended gradient tie-dye

As part of playing around
and exploring these patterns,
I realized both
[conic gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient)
and
[background blend mode](https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode)
are both well-supported features.

That's not surprising,
they've been around for a while now,
but I've never integrated them
into my work before.
So I spent some time exploring,
and really enjoyed this result:

{{ content.codepen(
  id='QWrPXEQ',
  title='Conic splash',
  caption='Almost tie-dye, if only we had spiral gradients…'
) }}

It's fun to just sit
and tinker with the colors,
gradients, and blend modes
to see what happens.
I also experimented with using `oklch`
to get a more uniform lightness --
but found that didn't have the same impact.
I guess variation is part of the charm.
If your browser supports `oklch`,
you can uncomment that code to see the results.

I also experimented with animating
the positions of each gradient,
but that didn't seem to play well
with blend-modes?
I'll have to look into that more.

I might use this effect
in my site footer --
where I previously had a trans flag.
What happens if we use the trans colors?

{{ content.codepen(
  id='bGMXdey',
  title='Conic splash'
) }}
