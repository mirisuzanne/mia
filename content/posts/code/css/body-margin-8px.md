---
title: Body Margin 8px
sub: The origin story for a style no one wants
date: 2022-07-04
tags:
  - cascade
summary: |
  All browsers add an `8px` margin
  on the `body` element --
  it's part of the w3c-recommended
  [default stylesheet](https://drafts.csswg.org/css2/#html-stylesheet)
  which browsers generally use
  as a starting point
  for their own 'user agent' styles.
  But why `8px`?
  Where does that come from?
---

## Initial values vs browser defaults

Every property in CSS has an _initial value_.
That initial value is the same
for all elements across the entire web.
The [initial value of `display`](https://www.w3.org/TR/css-display/#the-display-properties)
is `inline`,
and the [initial value of every `margin` property](https://www.w3.org/TR/css-box/#margin)
is `0`.

Initial values are used
when no other value is specified by the _Cascade_,
or _inherited_ from elsewhere.
We can also revert our styles explicitly
to their initial value
using the `initial` keyword.

But if we stop there,
initial values don't provide a great
reading experience.
When all the properties are the same
on all the elements,
there's no visual differentiation between
a link, a paragraph, a heading, or a list.
We can see that
by using the
[Ultimate CSS Reset](/2019/11/02/most-normal/):

```css
/* you can't get any more 'reset' than this */
* { all: initial !important; }
```

This is why we need **browser styles**,
which provide _different defaults_
from one element to the next.
Some elements should be `display: block`
(divs, paragraphs, lists, headings, etc),
and some of those elements
should have margins on them
to improve readability.

We can revert any property on a given element
to the browser default style
by using the `revert` keyword.
Technically this removes any styles from the author origin,
but since user-origin styles are rare,
it often results in styles from the browser.

## Standardizing browser defaults

Browser styles are essential,
but we often only notice them
when they seem 'wrong' or unexpected --
and think of them
as a problem to be solved
with 'resets' and 'normalization'.

- _Resets_ remove defaults to achieve a more 'blank canvas'
- _Normalizers_ attempt to make the defaults more consistent across browsers

The CSS Working Group
and browser vendors
also understand that default styles work best
when they are more consistent
across different browsers.
While browsers are free to
provide whatever styles they want,
most browser defaults can be traced back
to the (non-normative)
[default style sheet](https://drafts.csswg.org/css2/#html-stylesheet)
provided in the CSS specifications.

~~I'm not sure if there's a more recent version somewhere,
but I couldn't find it?~~

{% callout 'update', '2022-07-27' -%}
The recommended default styles
are now part of the
[HTML Living Standard](https://html.spec.whatwg.org/multipage/rendering.html#rendering),
rather than the CSS specification.
{%- endcallout %}

<details data-pattern="figure">
<summary>CSS 2.2 default style sheet</summary>

```css
html, address,
blockquote,
body, dd, div,
dl, dt, fieldset, form,
frame, frameset,
h1, h2, h3, h4,
h5, h6, noframes,
ol, p, ul, center,
dir, hr, menu, pre   { display: block; unicode-bidi: embed }
li              { display: list-item }
head            { display: none }
table           { display: table }
tr              { display: table-row }
thead           { display: table-header-group }
tbody           { display: table-row-group }
tfoot           { display: table-footer-group }
col             { display: table-column }
colgroup        { display: table-column-group }
td, th          { display: table-cell }
caption         { display: table-caption }
th              { font-weight: bolder; text-align: center }
caption         { text-align: center }
body            { margin: 8px }
h1              { font-size: 2em; margin: .67em 0 }
h2              { font-size: 1.5em; margin: .75em 0 }
h3              { font-size: 1.17em; margin: .83em 0 }
h4, p,
blockquote, ul,
fieldset, form,
ol, dl, dir,
menu            { margin: 1.12em 0 }
h5              { font-size: .83em; margin: 1.5em 0 }
h6              { font-size: .75em; margin: 1.67em 0 }
h1, h2, h3, h4,
h5, h6, b,
strong          { font-weight: bolder }
blockquote      { margin-left: 40px; margin-right: 40px }
i, cite, em,
var, address    { font-style: italic }
pre, tt, code,
kbd, samp       { font-family: monospace }
pre             { white-space: pre }
button, textarea,
input, select   { display: inline-block }
big             { font-size: 1.17em }
small, sub, sup { font-size: .83em }
sub             { vertical-align: sub }
sup             { vertical-align: super }
table           { border-spacing: 2px; }
thead, tbody,
tfoot           { vertical-align: middle }
td, th, tr      { vertical-align: inherit }
s, strike, del  { text-decoration: line-through }
hr              { border: 1px inset }
ol, ul, dir,
menu, dd        { margin-left: 40px }
ol              { list-style-type: decimal }
ol ul, ul ol,
ul ul, ol ol    { margin-top: 0; margin-bottom: 0 }
u, ins          { text-decoration: underline }
br:before       { content: "\A"; white-space: pre-line }
center          { text-align: center }
:link, :visited { text-decoration: underline }
:focus          { outline: thin dotted invert }

/* Begin bidirectionality settings (do not change) */
BDO[DIR="ltr"]  { direction: ltr; unicode-bidi: bidi-override }
BDO[DIR="rtl"]  { direction: rtl; unicode-bidi: bidi-override }

*[DIR="ltr"]    { direction: ltr; unicode-bidi: embed }
*[DIR="rtl"]    { direction: rtl; unicode-bidi: embed }

@media print {
  h1            { page-break-before: always }
  h1, h2, h3,
  h4, h5, h6    { page-break-after: avoid }
  ul, ol, dl    { page-break-before: avoid }
}
```

</details>

Some of those default styles seem obvious --
block elements should have block display,
table elements need table displays,
and list elements need list displays.
Headings get larger, bolder text.
But other default styles
seem pretty arbitrary.
About a third of the way down,
we find this one:

```css
body { margin: 8px; }
```

It makes some sense to me
that we would want some default spacing
around the edges of our document,
but why `8px`?
Where did that come from?

## Nothing ever goes away completely

The _default style sheet_
isn't only there
to ensure consistency between browsers,
but also to ensure
consistency across time.
The entire web is designed
to be forwards-and-backwards compatible.
That doesn't mean the web is static --
we're getting new features all the time --
but it means those new features
should never break existing websites.

On rare occasions
a browser will decide to break existing sites
if there are privacy or security issues.
But we do everything we can
to avoid those situations.
And often,
browsers will choose to 'deprecate'
a feature (like the old `marquee` element)
without actually removing support.

Browser default styles follow a similar pattern.
Since CSS was first implemented in browsers,
there have been default browser styles.
And, while browsers add new defaults on occasion,
it's very uncommon to remove an old default.
There's too much potential
to break sites that relied on the default
when they were made.

Many of the default styles
we have in browsers today
are the same defaults that existed
back when an HTML element was first introduced.

## Purity vs reality in specification

There's another rule
that impacts the development of standards --
even non-normative standards
(not officially 'required' for conformance)
like the default style sheet:

_A standard is meaningless unless it describes reality_.

To be successful,
a standard has to be both _prescriptive_
(telling browsers what to implement),
and also retroactively _descriptive_
(describing what browsers actually implemented).
It's not helpful to have a specification
that is theoretically perfect,
if it doesn't accurately describe the web.

While we often write new standards to explain
how a new feature _should_ work,
and then expect browsers to implement
the feature as specified,
that's only the first step
in a more complicated back-and-forth process.
We also regularly revisit and revise existing standards
to reflect how features _actually_ work,
after they have been implemented.

Ideally,
when an implementation doesn't match the spec,
we want to consider that a browser issue,
and fix the browser.
But sometimes --
depending how big the change,
how many browsers would need to change,
and how many sites would be impacted --
we'll update the specification instead.

That's not the only way we end up with
[mistakes in the design of CSS](https://wiki.csswg.org/ideas/mistakes),
but it makes mistakes harder to fix
when they do show up.

Again,
we're prioritizing
_consistency_ across browsers and time,
over _theoretical purity_
of the standards themselves.

## A margin on all our bodies

Last month
I decided to track down the origins
of this style:

```css
body { margin: 8px }
```

I knew it was part of the
default style sheet,
and I assumed it would be a legacy style --
initially provided by one of the early browsers,
and eventually standardized
for the sake of web-and-browser consistency.

But where did it come from originally?
I decided to [ask twitter](https://twitter.com/TerribleMia/status/1537986972177747968),
and eventually we were able to
(mostly) track it down.

### Step 1: The specification

Alan Stearns
(one of the current CSSWG chairs)
pointed me to
the first specification with `8px` margin
in the default style sheet:

> Spec-wise, it first showed up in 2003
> https://w3.org/TR/2003/WD-CSS21-20030128/sample.html.
> The version from the previous year had padding: 8px
>
> ---@alanstearns,
> [June 17 @ 8:34pm](https://twitter.com/alanstearns/status/1537999498210779138)

> Whoops, off by one. The 2003 had padding.
> 2004 changed to margin
> https://w3.org/TR/2004/CR-CSS21-20040225/sample.html
>
> ---@alanstearns,
> [June 17 @ 9:26pm](https://twitter.com/alanstearns/status/1538000075577667586)

The change from padding to margin is interesting.
But I figure
these spec style sheets
were likely describing some prior browser reality --
not inventing the style from scratch?

### Step 2: The original browsers

There are several links that I revisit on occasion,
when I'm curious about the early history of CSS.
My favorite are the source documents themselves:

- [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
  by **Håkon Lie**
  (the proposal that became CSS)
- [Historical Style Sheet proposals](https://www.w3.org/Style/History/)

But there are also great articles
that tell the story of how CSS came to be:

- [A brief history of CSS until 2016](https://www.w3.org/Style/CSS20/history.html)
  by **Bert Bos**
  (co-author of the original CSS spec)
- [A Look Back at the History of CSS](https://css-tricks.com/look-back-history-css/)
  by **Jay Hoffmann** on CSS-Tricks
- [The Languages Which Almost Became CSS](https://eager.io/blog/the-languages-which-almost-were-css/)
  by **Zack Bloom**

All of these are excellent,
and I highly recommend reading through them
to understand why this language works the way it does.

That got me a list of the first browsers with CSS,
but it didn't give me any more detail on the body margin question:

> For context,
> IE3 was the first commercial browser with CSS.
> That's 1996.
> Then Netscape 4 added some support.
> Before either of those,
> CSS was being tested in Argo & Arena…
> How far back does it go???
>
> https://www.w3.org/Style/CSS20/history.html
>
> ---@TerribleMia,
> [June 17 @ 9:52pm](https://twitter.com/TerribleMia/status/1538006627151818756)

### Step 3: The www-talk & www-style archives

Of course,
most of those 'historic style proposals'
were originally written as emails
to the
[`www-talk@w3.org` mailing list](https://lists.w3.org/Archives/Public/www-talk/),
or (later) the more focussed
[`www-style@w3.org` list](https://lists.w3.org/Archives/Public/www-style/) --
both of which are well-archived,
and searchable.

(One advantage of having a medium
created by a bunch of information-science nerds.)

Searching the archives
lead me to an email from
Todd Fahrner in March of 1998 --
[_Re: IE, NN and background-position: thpppt!_](https://lists.w3.org/Archives/Public/www-style/1998Mar/0092.html)

> My most recent revision to the "Base Stylesheet"[1] has the body margin set
> to 0 and the padding set at 8 pixels. Previously I had the margin at 8
> pixels, 0 padding, and the background-position set to -8px.
>
> ...
>
> [1] https://www.verso.com/agitprop/corestyle/base.html

It's an email thread
about the proper handling
of background-images,
so not exactly on topic,
but there's our 8px padding-or-margin on the body.

### Step 4: The wayback machine

That reference link is broken,
so I jumped over to
[The WayBack Machine](https://web.archive.org/)
to see if there was an archived copy --
and there are several!

First, I landed on
[The Base Stylesheet - February 22, 1999](https://web.archive.org/web/19990222082453/https://www.verso.com/agitprop/corestyle/base.html),
which claims it was _last modified 7 November 1998_.
Then I clicked through to the earliest archive of the page --
[The Base Stylesheet - January 30, 1998](https://web.archive.org/web/19990222082453/https://www.verso.com/agitprop/corestyle/base.html) --
which says it was _last modified 07/04/2022 16:39:51 GMT_
(the exact moment I loaded the page).

Wait, what?
Inspecting the source code,
I found this:

```html
<p>
  This is a work in progress, last modified
  <script>document.write(document.lastModified);</script>
  <noscript>quite recently</noscript> GMT...
</p>
```

I assume the `document.lastModified` is getting updated
by The WayBack Machine
every time we load the page?

### Final answer: the base stylesheet

This is what we've been looking for:
the [original default style sheet](https://web.archive.org/web/19990222082453/https://www.verso.com/agitprop/corestyle/base.html),
still under development.
There are a few quotes that stand out:

> The Base Stylesheet describes
> the "consensus default" rendering of all HTML 4.0 elements
> in Mosaic-derivative Web browsers
> (Netscape Navigator and Microsoft Internet Explorer).
> It … captures the status quo in order to move beyond it.

Those are the major browser-engines at the time,
and they both trace their roots back to
the previous Mosaic browser.

> The Mosaic browser's allegedly "neutral" default stylesheet
> is a simple adaptation of the normative style
> for (printed) scientific writings in Europe
> (cf. Wanning, Frank; Internationaler Typographie
> und wissenschaftliche Textverarbeitung; Haag + Herchen, 1996).
> This is appropriate enough considering the Web's origins at CERN.
> In view of the Web's far more common applications
> in commerce, entertainment, journalism, and the humanities, however,
> and the deeply entrenched market dominance of Mosaic-based browsers,
> it is fair to say that "correct" HTML
> has been infected with a reliably inappropriate style,
> like a cancer or virus.
>
> The escape of the Mosaic Browser Default Stylesheet (MBDS) virus
> from the scientific community at CERN
> has produced Web generations of mutant tools
> and authors who misapply markup solely to invoke certain MBDS effects.
> The use of `<p>` to produce vertical whitespace
> and table structures for nontabular information are signature examples.
> The high reliability of such manipulation
> accounts for HTML's grotesque cannibalization beyond academia,
> and the market success of architecturally incongruous HTML extensions
> for symptomatic relief.
> To reverse this epidemic,
> it is necessary first to isolate the virus,
> and expose its genes to precise and comprehensive manipulation.
> The Base Stylesheet is a CSS1 model of the MBDS virus,
> and the first step toward the development of "style antibodies" -
> comprehensive alternative stylesheets for HTML.

Lol, the snark.

So there you have it.
This style sheet is meant to capture
_what was already happening before CSS existed_
in Mosaic-based browsers,
and _recreate those styles in CSS_.
The `8px` spacing on the body predates CSS!
The style likely comes directly from Mosaic's internal rules,
before CSS was invented,
so the only remaining question is
_how to represent it_ --
as either `padding` or eventually a `margin`.

<details data-pattern="figure">
<summary>Todd Fahrner's (early draft) Base Stylesheet</summary>

```css
A, ABBR, ACRONYM, ADDRESS, BDO, BLOCKQUOTE, BODY, BUTTON, CITE, CODE, DD, DEL,
DFN, DIV, DL, DT, EM, FIELDSET, FORM, H1, H2, H3, H4, H5, H6, HTML, IFRAME, IMG, INS,
KBD, LABEL, LI, OBJECT, OL, P, Q, SAMP, SPAN, STRONG, SUB, SUP, UL, VAR,
APPLET, B, BIG, CENTER, DIR, FONT, HR, I, MENU, PRE, S, SMALL, STRIKE, TT, U {
  background: transparent;
  width: auto;
  height: auto;
  text-decoration: none;
  margin: 0;
  padding: 0;
  border: 0;
  float: none;
  clear: none;
  vertical-align: baseline;
  list-style-image: none;
  list-style-type: disc;
  list-style-position: outside;
  }

ADDRESS, BLOCKQUOTE, BODY, DD, DIV, DL, DT, FIELDSET, FORM, H1, H2, H3, H4, H5,
H6, OL, P, UL, CENTER, DIR, HR, MENU, PRE {
  display: block;
  }

A, ABBR, ACRONYM, APPLET, BDO, BUTTON, CITE, CODE, DEL, DFN, EM, IFRAME, IMG,
INS, KBD, LABEL, OBJECT, Q,
SAMP, SPAN, STRONG, SUB, SUP, VAR, B, BIG, FONT, I, S, SMALL, STRIKE, TT, U {
  display: inline;
  }

LI {
  display: list-item;
  }

/* Begin tree of inherited properties and cascades. */

/* Describes the default type, color, and link decoration specs of
Mosaic-derivative browsers to the extent and degree of granularity that users
may typically override. Uncomment for "factory settings."

HTML {
  font-family: "Times New Roman", Times;
  font-size: medium;
  color: black;
  background-color: #BFBFBF;
  }

PRE, TT, CODE, KBD, SAMP {
  font-family: "Courier New", Courier;
  }

A:link, A:visited, A:active {
  text-decoration: underline;
  }

A:link {
  color: #0000FF;
  }

A:visited {
  color: #7F007F;
  }

A:active {
  color: #0000FF;
  }

end pre-CSS user settings */

HTML {
  line-height: 1.12;
  word-spacing: normal;
  letter-spacing: normal;
  text-transform: none;
  text-align: left;
  text-indent: 0;
  white-space: normal;
  }

BODY {
  padding: 8px;
  }

H1 {
  font-size: xx-large;
  margin: .67em 0;
  }

H2 {
  font-size: x-large;
  margin: .75em 0;
  }

H3 {
  font-size: large;
  margin: .83em 0;
  }

H4, P, BLOCKQUOTE, FIELDSET, FORM, UL, OL, DL, DIR, MENU {
  margin: 1.12em 0;
  }

H5 {
  font-size: small;
  margin: 1.5em 0;
  }

H6 {
  font-size: x-small;
  margin: 1.67em 0;
  }

H1, H2, H3, H4, H5, H6, B, STRONG {
  font-weight: bolder;
  }

BLOCKQUOTE {
  margin-left: 40px;
  margin-right: 40px;
  }

I, CITE, EM, VAR, ADDRESS {
  font-style: italic;
  }

PRE, TT, CODE, KBD, SAMP {
  font-family: monospace;
  }

PRE {
  white-space: pre;
  }

BIG {
  font-size: larger;
  }

SMALL, SUB, SUP {
  font-size: smaller;
  }

SUB {
  vertical-align: sub;
  }

SUP {
  vertical-align: super;
  }

S, STRIKE, DEL {
  text-decoration: line-through;
  }

HR {
  border: 1px inset; /* questionable */
  }

OL, UL, DIR, MENU, DD {
  padding-left: 40px;
  }

OL LI {
  list-style-type: decimal;
  }

UL LI {
  list-style-type: disc;
  }

UL UL, UL OL, UL MENU, UL DIR, MENU UL, MENU OL, MENU MENU, MENU DIR, DIR UL,
DIR OL, DIR MENU, DIR DIR, OL UL, OL OL, OL MENU, OL DIR {
  margin-top: 0;
  margin-bottom: 0;
  }

OL UL, UL UL, MENU UL, DIR UL, OL MENU, UL MENU, MENU MENU, DIR MENU, OL DIR, UL
DIR, MENU DIR, DIR DIR  {
   list-style-type: circle;
  }

OL OL UL, OL UL UL, OL MENU UL, OL DIR UL, OL OL MENU, OL UL MENU, OL MENU MENU,
OL DIR MENU, OL OL DIR, OL UL DIR, OL MENU DIR, OL DIR DIR, UL OL UL, UL UL UL,
UL MENU UL, UL DIR UL, UL OL MENU, UL UL MENU, UL MENU MENU, UL DIR MENU, UL OL
DIR, UL UL DIR, UL MENU DIR, UL DIR DIR, MENU OL UL, MENU UL UL, MENU MENU UL,
MENU DIR UL, MENU OL MENU, MENU UL MENU, MENU MENU MENU, MENU DIR MENU, MENU OL
DIR, MENU UL DIR, MENU MENU DIR, MENU DIR DIR, DIR OL UL, DIR UL UL, DIR MENU
UL, DIR DIR UL, DIR OL MENU, DIR UL MENU, DIR MENU MENU, DIR DIR MENU, DIR OL
DIR, DIR UL DIR, DIR MENU DIR, DIR DIR DIR  {
  list-style-type: square;
  }

U, INS {
  text-decoration: underline;
  }

CENTER {
  text-align: center;
  }

CAPTION, COL, COLGROUP, LEGEND, TABLE, TBODY, TD, TFOOT, TH, THEAD, TR {
  background: transparent;
  text-decoration: none;
  margin: 1px;
  padding: 1px;
  border: none;
  float: none;
  clear: none;
  }

TABLE, TBODY, TFOOT, THEAD, TR {
  display: block;
  background-position: top left;
  width: auto;
  height: auto;
  }

CAPTION, LEGEND, TD, TH {
  display: inline;
  vertical-align: baseline;
  font-size: 1em;
  line-height: 1.33em;
  color: black;
  word-spacing: normal;
  letter-spacing: normal;
  text-transform: none;
  text-align: left;
  text-indent: 0;
  white-space: normal;
  }

TH {
  font-weight: bolder;
  text-align: center;
  }

CAPTION {
  text-align: center;
  }

/* not part of the legacy browser default sheet, but an obvious enhancement */

OL OL LI {
  list-style-type: lower-alpha;
  }

OL OL OL LI {
  list-style-type: lower-roman
  }
```

</details>

## A remedy for the MBDS virus?

The plan didn't work out
exactly the way Todd Fahrner imagined.
That base style sheet lives on,
with a number of Mosaic-based styles intact.
There are no _comprehensive alternative stylesheets for HTML_ --
at least not from the w3c
or the browser vendors.
Both are too invested in backwards-compatibility
to make any radical changes
to the default styles of the web.

If it's going to happen,
it will have to come from web authors
who can choose to opt-in to a new stylesheet,
without worrying about backwards compatibility.
To some extent,
you can think of
various resets and normalizers
as attempts at a new comprehensive stylesheet --
tho resets generally remove too much
(relying on authors to put it all back),
and normalizers often worry more about
browser-consistency more than improved styles.

This is what lead
Jen Simmons to create
[CSS Remedy](https://github.com/jensimmons/cssremedy).
(I'm one of the core contributors,
though there hasn't been much work on it recently).
The goal is to re-imagine a 'default' stylesheet
for the modern web.
What would we come up with now,
if we weren't constrained
by what Mosaic did almost 30 years ago?
There's still a lot of discussion,
but one thing is clear
[on line 47 of the main remedy stylesheet](https://github.com/jensimmons/cssremedy/blob/master/css/remedy.css#L47):

```css
body { margin: 0; }
```

For the most part,
CSS Remedy isn't trying to make things pretty --
just trying to provide a better default.
There are also projects
that take a more opinionated approach,
providing fully-designed styles for basic HTML elements.

Last month,
Robin Rendle posted some thoughts
on [The Smallest CSS](https://www.robinrendle.com/notes/the-smallest-css/) --
_What’s the smallest amount of CSS that you can write
to make HTML look halfway decent?_
It's a great little exploration,
landing on about 15 lines of CSS.

I also appreciate the
['no-class frameworks'](https://css-tricks.com/no-class-css-frameworks/) --
based entirely on writing semantic html,
without any need for special selectors.
Here are some more
[classless CSS libraries](https://github.com/dbohdan/classless-css)
to look at.

I'm tempted to try something like that myself.
We'll see.
Maybe this site is almost due
for a refresh.
