---
title: A web component for CodePen embeds?
sub: It's not essential, but it took me down a path…
date: 2024-09-09
summary: |
  David Darnes
  already made
  [a `<code-pen>` web component](https://darn.es/code-pen-web-component/).
  It's great.
  It takes code,
  and creates a pen from that code.
  But I don't want to create a pen,
  I want to embed one.
---

The default CodePen embed is pretty good already.
So right from the start,
this whole project is unnecessary.
The code looks like this:

```html
<p class="codepen" data-slug-hash="BEvjbm" data-height="600">
  CodePen Demo:
  <a href="https://codepen.io/miriamsuzanne/pen/BEvjbm">
    CSS-only 'mixin'
  </a>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
```

There are other optional attributes,
but those are the essentials in my experience.
You can put anything you want inside the paragraph,
since the entire element is getting replaced.

To my eye,
that's a custom element waiting to happen.
And I had a few small adjustments in mind:

- The pen `data-slug-hash` could be extracted from the link
- If we provide the height in CSS,
  we can use it to avoid layout shift?

I'm not sure it's enough to make this worthwhile,
but it was enough for me to create
[a new pen](https://codepen.io/miriamsuzanne/pen/JjQxzYR?editors=1010)
and start playing around.

With the first draft,
my fancy new embed looks like this:

```html
<embed-pen style="height: 600px">
  CodePen Demo:
  <a href="https://codepen.io/miriamsuzanne/pen/BEvjbm">
    CSS-only 'mixin'
  </a>
</embed-pen>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
```

Ok, so not much has changed.
But it works!
Here it is, doing the thing:

<embed-pen style="height: 600px">
  CodePen Demo:
  <a href="https://codepen.io/miriamsuzanne/pen/BEvjbm">
    An embed-pen web web component
  </a>
</embed-pen>
<script src="https://codepen.io/miriamsuzanne/pen/JjQxzYR.js"></script>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

If I was to flesh this out,
I think:

- The custom element should stick around,
  instead of becoming `div.cp_embed_wrapper`
- The `embed/ei.js` logic should be part of the element definition,
  not a separate script

Along the way,
I learned that the `height` attribute
is only allowed on specific elements,
which is why I had to use the `style` attribute instead.
One of those elements is the `iframe`.

Looking closer,
the [CodePen Embed docs](https://blog.codepen.io/documentation/embedded-pens/)
demonstrate using an `iframe` from the start,
if you need to avoid JS:

```html
<iframe src="https://codepen.io/miriamsuzanne/embed/BEvjbm" height="600" width="100%" loading="lazy"></iframe>
```

<iframe src="https://codepen.io/miriamsuzanne/embed/BEvjbm" height="600" width="100%" loading="lazy"></iframe>

Well that sure gets right to the point.
Maybe that's all I need?
I don't feel like I'm losing essential behavior, here.
All the parameters are still available via the URL.
