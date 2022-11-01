---
draft: true
title: Ancient Web Browsers
venue: Edmund Tweedy Flanigan
url: http://9p.sdf.org/who/tweedy/ancient_browsers/
date: 2022-10-30
summary: |
  An archive of the earliest web browsers --
  from WorldWideWeb, LineMode, and ViolaWWW
  up through Mosaic.
---

The first three browsers here
are the ones I know the best.
There are emulators of both
[WorldWideWeb](https://worldwideweb.cern.ch/browser/)
and
[LineMode](http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html)
(though the latter seems to be broken).
I mention these two regularly in my talks,
because they represent an important
philosophy of the web itself:
_progressive enhancement_.

CERN first developed WWW
with a graphic user interface
for NeXT computers.
But the web itself is intended to work
[for everyone, on everything](https://w3.org/Consortium/mission.html#principles).
So they hired
[Nicola Pellow](https://en.wikipedia.org/wiki/Nicola_Pellow)
to develop a second
_text only_ LineMode browser.

[Pei Wei](https://web.archive.org/web/20101018012531/http://www.xcf.berkeley.edu/~wei/)'s
[ViolaWWW](https://en.wikipedia.org/wiki/ViolaWWW)
also represents
an important milestone
in the history of web design,
as the
[first browser to support external stylesheets](https://en.wikipedia.org/wiki/ViolaWWW#firsts)
(more than just browser 'user agent' styles).
It even looks pretty similar
to the eventual CSS syntax:

```
(BODY,INPUT,P   FGColor=black
                BGColor=grey70
                BDColor=grey70
                align=left

(H1             FGColor=white
                BGColor=red
                BDColor=black
                align=center
```

I didn't realize that Lynx
is also one of the early browsers.
I installed it on my modern mac
just last month.

> Lynx now has the distinction
> of being the oldest continuously-maintained web browser.

That's pretty cool.
But I still haven't figured out
how to load `https` sites,
which is pretty limiting.
