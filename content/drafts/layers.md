---
title: Don't Fight the Cascade, Join It!
---

In CSS conversations
people will often use the terms 'cascade'
and 'specificity' interchangeably.
It's a bit like
referring to all facial tissues as 'Kleenex',
or using 'Google' to mean 'search the web' --
a _synecdoche_ that's not technically accurate,
but is entirely reasonable
based on our day-to-day interactions.

Specificity is only one part of the CSS cascade,
but it's the part we interact with the most often.
And, historically at least,
it's the part of CSS that can most easily trigger
hours of frustration and swearing.
So why does it exist,
and how can we use Cascade Layers
to manage it in our projects?

## There Can Be Only One [Cascaded Value]

The Cascade as a whole
is part of an even larger process
of _filtering_, _cascading_, and _defaulting_
which ensures that there will always be
_exactly one **value** for every CSS **property**
on every **element**_ in the document:

1. _Filtering_:
   for each element,
   we only need to consider a declaration
   if it is directly applied (like inline styles)
   or in a matching selector,
   and all the relevant conditions (like `@media`) are `true`.
2. _Cascading_:
   if multiple declarations would apply
   to the same property on the same element,
   we need to choose the winning declaration.
   Specificity is just one part of this process.
3. _Defaulting_:
   if no value is defined for
   a CSS property on an element,
   then we need to get that value
   from somewhere else --
   either the parent element (inheritance),
   or the specification (initial value).

Karl Dubost has a great article
on all the ["Thousand" Values of CSS](https://www.otsukare.info/2022/10/25/css-values-definitions)
that result along the way.
But for this article,
we're just interested in getting from
[declared values](https://www.w3.org/TR/css-cascade-5/#declared)
(the results of _filtering_)
down to [cascaded values](https://www.w3.org/TR/css-cascade-5/#cascaded)
(the results of _cascading_).

The Cascade itself
is a series of six filters
for determining the winner of any conflicts.
Declarations are compared by each filter in order,
and only the winners move on
to the next round of competition:

1. Origins and Importance
2. Context (this refers to Shadow DOM vs Light DOM)
3. Element-Attached Styles (such as inline styles on the `style` attribute)
4. **Cascade Layers** (a new feature!)
5. Selector Specificity
6. Order of Appearance

So when we say things like
'the `!important` flag increases specificity' --
the truth is that importance _overrides_ specificity
because it comes first in the cascade.
The effect is basically
