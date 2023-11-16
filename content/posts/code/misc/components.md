---
title: HTML Web Components are Just JavaScript?
sub: I'm still getting used to this
date: 2023-11-15
draft: true
tags:
  - web components
---

I've been _intrigued_
by web components
for some time,
[from a safe distance](https://mastodon.social/@davatron5000/111389814542279855).
I like things that are part of the web platform,
but mostly when that means
_I don't have to write any JavaScript_.

I'm a declarative programmer at heart.
I was raised by semantic HTML,
and I live by _the rule of least power_.
I don't even flinch
when I see a declared value cascade,
resolve, and inherit.
But I get very cautious about
instructing the browser
to _do things my way_.

It's not that I can't write JS,
or even that I don't like to.
I enjoy procedural code!
And I've learned enough JS
to do what I need --
especially here in my Eleventy setup.
Recently, I've been experimenting with WebC.
Sometimes,
I'll even write JS
that runs in the browser.
It's fun,
it's useful,
but it's not my default.
And I'm always skeptical
when JavaScript is inserted _between_
me and a more declarative language.

From a distance,
watching through well-organized venetian blinds,
that's what I see.
_Web Components are JavaScript files
that generate HTML & CSS along the way._
Often the HTML and CSS are written
as template literals,
or worse --
constructed in a long series functions.
You might even call them
_HTML-and-CSS in JS_.

I've been burned before.

## A turning point?

A few years ago,
web components still seemed
like a niche technology.
That's been changing for some time,
but these days my Mastodon & RSS feeds
are full of web components.
And some of the posts
are coming from declarative nerds like me!
Just last week:

- [Why Web Components](https://buttondown.email/cascade/archive/005-why-web-components/),
  by Robin Rendle
- [Blinded By the Light DOM](https://meyerweb.com/eric/thoughts/2023/11/01/blinded-by-the-light-dom/),
  by Eric Meyer
- [HTML web components](https://adactio.com/journal/20618),
  by Jeremy Keith
- [HTML Web Components](https://blog.jim-nielsen.com/2023/html-web-components/)
  (again), by Jim Nielsen
- [“Shadow dom is not a good default”](https://buttondown.email/cascade/archive/006-shadow-dom-is-not-a-good-default/),
  by Robin Rendle (again!)
- [HTML Web Components: An Example](https://blog.jim-nielsen.com/2023/html-web-components-an-example/),
  by Jim Nielsen (again!)

I recommend all of them.
And they're not alone.
I've been hearing the Good News constantly,
from folks like
Cassondra Roberts,
Zach Leatherman,
Dave Rupert,
and Westbrook Johnson.
Now John Allsopp is
[writing a book on web components](https://indieweb.social/@johnallsopp/111382386459592245).
I look forward to reading it.

I don't know what changed.
Did a browser ship a thing?
Probably.

But what struck me about
last week in particular
was the declarative angle --
the pitch being made for
HTML-_like_ web components.
Several of these articles
refer back to an earlier issue of
Robin Rendle's excellent newsletter,
[The Cascade](https://buttondown.email/cascade/archive/) --
and specifically the subject line --
_[What Would HTML Do?](https://buttondown.email/cascade/archive/003-what-would-html-do/)_.

That question,
and the flurry of posts expanding on it,
flipped a switch in my brain.
I've been trying to build web components
_out of HTML_,
but they are building web components
_into HTML_.

Every web component I've written
up until this point
started with a Shadow DOM-defining `template`.
To me, that made sense as
the most declarative
place to start:
you start by writing declarative HTML:

```html
<template>
  <style>/* Normal old CSS */</style>
  <section>
    <slot name="title">
      <h2>Normal Old HTML, With Slots!</h2>
    </slot>
    <p>
      This is
      the most declarative component,
      I say to myself
      as I register it
      using a JavaScript function.
    </p>
  </section>
</template>
```

It's possible to do this in a way
that all your components auto-register
with minimal JavaScript
and no additional custom behavior.
For example,
we can loop over all templates
that have a `data-register` attribute,
and generate a custom element from each:

```js
const elementTemplates = document.querySelectorAll('template[data-register]');

elementTemplates.forEach((template) => {
  customElements.define(
    template.dataset.register,
    class extends HTMLElement {
      constructor() {
        super();
        let content = template.content;
        const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
          content.cloneNode(true)
        );
      }
    }
  );
});
```

That works relatively well
if you only need a basic template
with markup and styles,
to achieve style 'encapsulation'
or avoid repetition.
Then the templates can be written
in HTML,
with CSS in `<style>` tags as needed:

```html
<!-- defining the component -->
<template data-register="media-object">
  <style>
    /* Media object styles */
  </style>
  <div class="object">
    <div part="media">
      <slot name="media"></slot>
    </div>
    <div part="content">
      <slot></slot>
    </div>
  </div>
</template>
```

```html
<!-- using the component -->
<media-object>
  <img slot="media" src="…" alt="…" />
  <p>content …</p>
</media-object>
```

I've used HTML
templating languages
since the early 2000s --
from Django templates to Handlebars,
Twig, Jinja & Nunjucks,
Vue, Svelte, Liquid, etc.
It seems to me like these quick templates
with shadow DOM
can generate a rough equivalent
of the most basic use-cases.
You get some amount of progressive enhancement
if you set it up right,
and you get CSS encapsulation for free,
even if you don't love how that works.
But I also find it challenging
to get the slots and parts set up
with necessary styling.
That may just be inexperience.

And then I wonder,
progressive enhancement
compared to what exactly?
In my example above
all the content is accessible from first load,
without the custom element registration.
That's better than some SPA frameworks,
but server-side templates
would get us even farther.

And what if we want to pass in data,
then use flow control
to render our component?
That's not a wild use-case.
Many sites and applications
need some way to
generate HTML from a database or CMS.
I suppose I could do it with more JS.

This is where tools like
[WebC](https://www.11ty.dev/docs/languages/webc/)
can come into play,
providing a server-side build step
based on web component syntax,
with additional control-flow features:

```html
<article>
  <slot name="title">
    <h2>Normal Old HTML, With Slots!</h2>
  </slot>
  <time @html="formatDate(now)"></time>
  <p webc:if="showSummary">
    This is still declarative
    I say to myself,
    injecting JS
    directly into its attributes.
  </p>
</article>
```

WebC is great for other reasons.
It will pre-render whatever it can,
and only require browser JS
for things that need dynamic rendering.

But the farther I go down this path
of data-to-html templating,
the heavier my components feel --
and the less declarative.
I end up writing mostly empty elements,
with all my content
hidden away inside private custom attributes.

```html
<figure class="block-quote">
  <blockquote @html="md(quoteText)"></blockquote>
  <quote-cite
    :@cite-name="citeName"
    :@cite-date="citeDate"
    :@cite-url="citeUrl"
    :@cite-source="citeSource"
  ></quote-cite>
</blockquote>
```

---

_Miriam comes cautiously out,
with Toto under her arm,
and looks about.
Music comes up slowly._

**Miriam** (after a pause) \
==I've got a feeling
we're not on the web platform any more.==

## What's a 'component', anyway?

The problem there isn't WebC,
or any of the other web component libraries.
You can easily get to that same place
without any build steps at all,
just by using Shadow-DOM
with more attributes than slots.
It must be a common issue,
because every article above
mentions the enticing danger
of 'empty' web components,
where all the content is provided through attributes.

They all blame React for this trend,
but I think that's too simple.
I've been passing arguments
to component templates
since my first time using PHP
in the early 2000's.
Before we called them _components_
we had _includes_.
For me at least
they served a similar purpose:
_reusable snippets of HTML,
generating markup from data_.
In most of these languages,
the simplest pattern is a
one-liner with parameters:

```liquid
&#123;% comment %&#125;Liquid rendering&#123;% endcomment %&#125;
&#123;% render 'blockquote', text: quoteText, … %&#125;
```

```jinja2
<!-- Nunjucks macros -->
&#123;% import "content.macros.njk" as content %&#125;
&#123;&#123; content.blockquote(
  text: quoteText,
  …
) &#125;&#125;
```

In both cases,
we're passing in values rather than markup.
And that's the entire point, right?
The purpose of the component
is to generate the markup for us.
All that's new
with frameworks and web components
is the HTML-looking
element-and-attributes syntax.

Meanwhile,
the articles above
all push for nearly the opposite approach
to 'HTML web components'.

The suggestion is to wrap custom elements
around normal HTML,
and then enhance those elements
with JavaScript [superpowers](https://htmlwithsuperpowers.netlify.app/).
No shadow DOM required,
though it may be sprinkled over top
in some cases.
The point is to provide an HTML-like use
of the components,
which doesn't rely on Shadow DOM as the baseline.
We pass in markup rather than raw values.

Eric Meyer provides a great side-by-side comparison
with his `super-slider`:

```html
<!-- an 'empty' component with attributes -->
<super-slider
  type="range" min="0.5" max="4" step="0.1" value="2"
  unit="em" target=".preview h1">
  Slider Label
</super-slider>

<!-- an 'HTML-like' component, with nested elements -->
<super-slider unit="em" target=".preview h1">
	<label for="title-size">Slider Label</label>
	<input id="title-size" type="range" min="0.5" max="4" step="0.1" value="2" />
</super-slider>
```

In this case,
the custom element doesn't (necessarily)
generate anything at all.
The content is all there in the light DOM, on load,
before any JavaScript gets involved.
These aren't _templates_,
they're _markup_.
Like the `button`, `form`, and `a` elements --
they don't have to generate anything new to be useful,
only provide additional semantics and behavior.

This leads me to agree with
Keith Grant
when he says
that [Web Components Aren’t Components](https://keithjgrant.com/posts/2023/07/web-components-arent-components/).

> At least,
> it’s not the same definition for component
> that modern frameworks use.

Keith also points to the fact
that the CSS cascade
handles web component styles
_exactly opposite_
from the way frameworks do:

In a framework,
'scoped' styles get priority
over page defaults.
The expectation is that
one will build on the other,
similar to how specificity works.
With shadow DOM,
'encapsulated' styles are the default.
It takes some work
for the page to get involved
using the `::part()` pseudo-class,
but when there's a conflict
the page always wins.

That's similar to user agent defaults
provided by the browser.
Which makes a lot of sense
if you plan to distribute a new element
for other authors to use
in unpredictable context.
But it makes less sense
when you just want to wrap up
the 'card' styles on your site
into a well-contained snippet.

Custom Elements
seem designed for providing
(wait for it)
_custom elements_ (markup),
while framework components
(old and new)
put more focus
on combining all the elements
into reusable _templates_.

I don't think one of those goals is right,
and the other one wrong
(setting aside SPA implementation issues) --
but it seems clear
that these tools were designed
to solve different use-cases.

I imagine there's a counter-point in here somewhere,
and I just haven't landed on it.
Maybe we should all be thinking of
component libraries
as 'third party' tools,
even when they come from inside the house?
Maybe there's an architectural benefit
to treating template-components
the same way we treat markup-components?
For sure there are use-cases
that don't fall neatly into one category or the other.

## JS in HTML in JS

I _like_ the HTML-familiar
custom element shape
that's recommended by these articles.
I think it's a good idea
to use the light DOM
for content,
even when you're providing
more Shadow-DOM structure
behind the scenes.

I was even inspired
by Eric's `<super-slider>`,
to build something similar of my own.
It's still experimental,
and I still have a lot to learn
(how do JS classes work?),
but I expect to use this
on my personal site in the future:

{% import "content.macros.njk" as content %}

{{ content.codepen(
  id='MWLoKJr',
  title='Ground Control web component'
) }}

But I was surprised to find,
this approach is even more JS-forward
than my previous experiments:

1. Start without any template or slots or Shadow DOM
2. Don't write any HTML or CSS
3. It's all just JavaScript
4. Even inside the JavaScript, there's no HTML
5. Maybe inline injected CSS, or maybe not
6. More JavaScripting
7. Only JavaScripts
8. Title the article "_HTML Web Components_"

It's a strange argument,
but the results are compelling.
Single-purpose and broadly reusable custom elements
that augment HTML with extra behavior
without adding a lot of overhead.

I also expect I'll keep playing
with _template_ elements that I can define
entirely in HTML,
with some form of auto-registration:

{{ content.codepen(
  id='qBgVOJR',
  title='Auto-Registered Custom Elements w/ Shadow DOM'
) }}

I'll also keep playing with WebC.
I think some of the same API design principles can apply.
Let the light DOM handle content wherever possible,
and add progressive enhancements
from either JS or shadow DOM or both.

It seems like the downside
of writing HTML in HTML
with the `<template>` tag is
getting it into a website.
Even within my own projects,
I would have to render the template instructions
on every page where they are needed.
HTML imports never happened.
I imagine that's why
every example I've seen
wraps the template in a JavaScript module,
which can be easily imported
on any page.

Declarative shadow DOM
doesn't really seem to help that problem.
While it will provide some
other benefits,
it requires even more duplication --
which makes the templating use-case less attractive.

All of that leaves me
simultaneously excited
to keep exploring the space,
and frustrated about how much JS
is required
to write even the simplest
'components' in my HTML.

And in many cases,
I would still want a build step
_on top of_
the web platform functionality.
But I'm not sure what I expected.
If I want raw-data flow-control,
I want something that isn't markup.
Something to _generate_ the markup.

I've said for some time
that Sass isn't going away.
Sass (and other pre-processors)
can still provide structured abstractions of CSS,
in a way that CSS can never replicate.
Maybe the same is true with HTML components.

I don't think I'm saying anything new here,
these same points seem to come up often.
I'm just stubbing my toe
on the well-documented table-leg,
as many have before me.

Here's Zach,
walking us through the steps:

{{ content.figure(
  data=[{
    iframe: 'https://www.youtube.com/embed/R4Ri4ft7bXY',
    title: 'The Good, The Bad, and The Web Components',
    width: '560',
    height: '315'
  }],
  caption='Hmmm, yeah. He already said it. I bet others have to. Why did I write this?'
) }}

Zach even comes to the same conclusion I have:
These features are promising,
but they doesn't (yet) provide
the DRY solution we're all hoping for.
I've seen that talk before,
but that was before I survived my own toe incident.
We must all stub our own toes.

(I still haven't even looked into
tools like Lit,
which seem to come highly recommended.
I wonder what those are for.
Do I need even more JS in my JS
to get that super-powered
HTML into my HTML?)
