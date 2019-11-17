---
title: Sass Striped Backgrounds
date: 2012-07-20
tags:
  - _calendar
  - _post
  - code
---

[Jina][jina] asked twitter for Sass advice the other day.
She was working on a [bit of code][code] to create
a rainbow-striped background gradient
using any set of arbitrary colors.
This is my solution,
in the form of a Sass function.
This requires [Sass 3.2][sass3]
(currently in alpha)
in order to run.

[jina]: https://twitter.com/jina/status/225811628338323458
[code]: https://gist.github.com/3140730
[sass3]: http://rubygems.org/gems/sass


## Stripes Function

Start by setting a variable to the colors you want:

```scss
$rainbow: red orange yellow green blue indigo violet;
```

You could set individual variables for each color as well.
You would still pass them all as a single argument,
or join them into a single variable before passing, as you see fit.

Here's the function:

```scss
// Returns a striped gradient for use anywhere gradients are accepted.
// - $position: the starting position or angle of the gradient.
// - $colors: a list of all the colors to be used.
@function stripes($position, $colors) {
  $colors: if(type-of($colors) != 'list', compact($colors), $colors);
  $gradient: compact();
  $width: 100% / length($colors);

  @for $i from 1 through length($colors) {
    $pop: nth($colors,$i);
    $new: $pop ($width * ($i - 1)), $pop ($width * $i);
    $gradient: join($gradient, $new, comma);
  }

  @return linear-gradient($position, $gradient);
}
```

And how to use it:

```scss
.rainbow {
  @include background-image(stripes(left, $rainbow));
}
```

Jina has posted a demo and explanation
on [CodePen][cp].

[cp]: http://codepen.io/jina/pen/iosjp

(The real lesson here
is that all the colors of the rainbow
are acceptable CSS color keywords.
Go forth and queer the web.)
