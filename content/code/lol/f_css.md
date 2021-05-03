---
title: F*CSS
sub: If you give zero F*CSS, are you even a developer?
date: 2019-08-28
summary: |
  In the CSS naming-convention arms race to lowest specificity,
  I’ve decided to only use universal `*` selectors.
  I call it **F*CSS**.
---

- It's a recursive backronym: the "F" is for F*CSS
- When asked "why?" you must say "for F*CSS sake" [^1]

```css
* {
  box-sizing: border-box;
  margin: 1em auto;
  max-width: 40em;
  padding: 0;
}
```

See the [CodePen Demo »](https://codepen.io/miriamsuzanne/pen/GRKEZQy)

[^1]: The key words
"MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
"SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and
"OPTIONAL" in this document are to be interpret...
