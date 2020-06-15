---
title: Managing The Cascade with Custom Properties
---

Since the inception of CSS in 1994, the cascade and inheritance have defined how we design on the web. Both are powerful features, but as authors we've had very little control over how they interact. Selector specificity and source order provide some minimal "layering" control, without a lot of nuance -- and inheritance requires an *unbroken lineage*. Now **CSS Custom Properties allow us to manage and control both cascade & inheritance in new ways**.

I want to show you how I've used Custom Property "stacks" to solve some of the common issues people face in the cascade: from scoped component styles, to more explicit layering  of intents.

## Intro to Custom Properties

The same way browsers have defined new properties using a vendor prefix like `-webkit-` or `-moz-`, we can define our own Custom Properties with an “empty” `--` prefix. Like variables in Sass or JS, we can use them to name, store, and retrieve values -- but like other properties in CSS, they *cascade* and *inherit* with the DOM.

```css
/* Define a custom property */
html {
  --brand-color: rebeccapurple;
}
```

In order to access those captured values, we use the `var()` function. It has two parts: first the name of our custom property, and then a fallback in case that property is undefined. (If we don't provide a fallback, the default is `unset`).

```css
button {
  /* use the --brand-color if available, or fall back to deeppink */
  background: var(--brand-color, deeppink);
}
```

## Building Variable "Stacks"

This ability to define a fallback is similar to "font stacks" used on the `font-family` property. If the first family is unavailable, the second will be used, and so on. The `var()` function only accepts a single fallback, but we can nest `var()` functions to create custom-property fallback "stacks" of any size:

```css
button {
  /* try Consolas, then Menlo, then Monaco, and finally monospace */
  font-family: Consolas, Menlo, Monaco, monospace;

  /* try --state, then --button, then --brand-color, and finally deeppink */
  background: var(--state, var(--button-color, var(--brand-color, deeppink)));
}
```

If that nested syntax for stacked properties looks bulky, you can use a pre-processor like Sass to [make it more compact][vars].

[vars]: https://codepen.io/mirisuzanne/pen/GRpmOjr

That single-fallback limitation is required to support fallbacks with a comma inside them -- like font stacks or layered background images:

```css
html {
  /* The fallback value is "Helvetica, Arial, sans-serif" */
  font-family: var(--my-font, Helvetica, Arial, sans-serif);
}
```

## Managing "Scope"

CSS selectors allow us to drill down into the HTML DOM tree, and style elements anywhere on the page -- or elements in a particular nested context.

```css
/* all links */
a { color: slateblue; }

/* only links inside an article */
article a { color: rebeccapurple; }
```

That's useful, but it doesn't capture the reality of "modular" object-oriented or component-driven styles. We might have multiple articles and asides, nested in various configurations. We need a way to clarify which context, or *scope*, should take precedence when they overlap.

### Proximity Scopes

Let's say we have a `.light` theme and a `.dark` theme. We can use those classes on the root `<html>` element to define a page-wide default, but we can also apply them to specific components, nested in various ways:

https://codepen.io/mirisuzanne/pen/ExPYEVQ?editors=1100

Each time we apply one of our color-mode classes, the `background` and `color` properties are reset, then inherited by nested headings and paragraphs. In our main context, colors inherit from the `.light` class, while the nested heading and paragraph inherit from the `.dark` class. Inheritance is based on direct lineage, so the nearest ancestor with a defined value will take precedence. We call that *proximity*.

Proximity matters for inheritance, but it has no impact on selectors -- which rely on specificity. That becomes a problem if we want to style something *inside* the dark/light containers.

Here I've attempted to define both light & dark button variants. Light-mode buttons should be `rebeccapurple` with `white` text so they stand out, and dark-mode buttons should be `plum` with `black` text. We're selecting the buttons directly based on light/dark context, but it doesn't work:

https://codepen.io/mirisuzanne/pen/NWxKYRN?editors=1100

Some of the buttons are in both contexts -- with both `.light` and `.dark` ancestors. What we want in that case is for the closest theme to take over (inheritance *proximity* behavior), but what we get instead is the second selector overriding the first (cascade behavior). Since the two selectors have the same specificity, source-order determines the winner.

### Custom Properties & Proximity

What we need here is a way to *inherit* these properties from the theme, but only apply them to specific children. Custom Properties make that possible! We can define values on the light and dark containers, while only using their inherited values on nested elements like our buttons.

We'll start by setting up the buttons to use custom properties, with a fallback "default" value, in case those properties are undefined:

```css
button {
  background: var(--btn-color, rebeccapurple);
  color: var(--btn-contrast, white);
}
```

Now we can set those values based on context, and they will *scope* to the appropriate ancestor based on proximity & inheritance:

```css
.dark {
  --btn-color: plum;
  --btn-contrast: black;
}

.light {
  --btn-color: rebeccapurple;
  --btn-contrast: white;
}
```

As an added bonus, we're using less code overall, and one unified `button` definition:

https://codepen.io/mirisuzanne/pen/QWyLrdr?editors=1100

I think of this as creating an API of available parameters for the button component. Sara Soueidan and Lea Verou have both covered this well in recent aricles -- [Global and Component Style Settings with CSS Variables][sara], and [A user’s guide to CSS variables][lea].

[sara]: https://www.sarasoueidan.com/blog/style-settings-with-css-variables/
[lea]: https://increment.com/frontend/a-users-guide-to-css-variables/

## The Ownership Problem

Sometimes proximity isn't enough to define scope. When JS frameworks generate "scoped styles" they are establishing specific object-element *ownership*. A "tab-layout" component _owns_ the tabs themselves, but not the content behind each tab. This is also what the BEM convention attempts to capture in complex `block__element` class names.

Nicole Sullivan [coined the term "Donut Scope"][donut] to talk about this problem back in 2011. While I'm sure she has more recent thoughts on the issue, the fundamental problem hasn't changed. Selectors & specificity are great for describing how we build detailed styles over top of broad patterns, but they don't convey a clear sense of *ownership*.

[donut]: http://www.stubbornella.org/content/2011/10/08/scope-donuts/

We can use custom propery stacks to help solve this problem. We'll start by creating "global" proprties on the `html` element -- our default colors:

```css
html {
  --background--global: white;
  --color--global: black;
  --btn-color--global: rebeccapurple;
  --btn-contrast--global: white;
}
```

That default global theme is now available anywhere we want to refer to it. We'll do that with a `data-theme` attribute that applies our forground and background colors. We want the global values to provide a default fallback, but we also want the option to override with a specific theme. That's where "stacks" come in:

```css
[data-theme] {
  /* If there's no component value, usse the global value */
  background: var(--background--component, var(--background--global));
  color: var(--color--component, var(--color--global));
}
```

Now we can define an inverted component by setting the `*--component` properties as a reverse of the global properties:

```css
[data-theme='invert'] {
  --background--component: var(--color--global);
  --color--component: var(--background--global);
}
```

But we don't want those settings to inherit beyond the donut of *ownership* -- so we reset those values to `initial` (undefined) on every theme:

```css
[data-theme] {
  --background--component: initial;
  --color--component: initial;
}
```

The `initial` keyword has a special meaning when used on custom properties, reverting them to a [Guaranteed-Invalid][initial] state. That means rather than being passed along to set `background: initial` or `color: initial`, the custom property becomes `undefined`, and we fallback the the next value in our stack -- the global settings.

[initial]: https://drafts.csswg.org/css-variables/#guaranteed-invalid-value

We can do the same thing with our buttons, and then make sure to apply `data-theme` to each component. If no specific theme is given, each component will default to the global theme:

https://codepen.io/mirisuzanne/pen/VweaPGp?editors=1100

## Cascade "Origins"

The CSS cascade is a series of filtering layers, used to determine what value should take precedence when multiple values are defined on the same property. We most often interact with the *specificity* layers, or the final layering based on source-order -- but the first layer of cascade is the "origin" of a style. The origin describes where a style came from -- often the browser (defaults), the user (preferences), or the author (that's us).

By default, author styles override user preferences, which override browser defaults. That changes when anyone applies `!important` to a style, and the origins reverse: browser `!important` styles have the highest origin, then important user preferences, then our author important styles, above all the normal layers. There are [a few additional origins][origins], but we won't go into them here.

[origins]: https://www.w3.org/TR/css-cascade-3/#cascading-origins

When we create custom property "stacks", we're recreating a very similar behavior. If we wanted to represent existing origins as a stack of custom properties, it would look something like this:

```css
.origins-as-custom-properties {
  color: var(--browser-important, var(--user-important, var(--author-important, var(--author, var(--user, var(--browser))))));
}
```

Those layers already exist, so there's no reason to recreate them. But we're doing something very similar when we layer our "global" and "component" styles above -- creating a "component" origin layer that overrides our "global" layer. That same approach can be used to solve various layering issues in CSS, which can't always be described by specificity:

- override » component » theme » default
- theme » design system or framework
- state » type » default

Let's look at some buttons again. We'll need a default button style, a disabled state, and various button "types" -- like `danger` or `primary`/`secondary`. We wan't the `disabled` state to always override the type variations, but selectors don't capture that distinction:

https://codepen.io/mirisuzanne/pen/abdoYLa?editors=1100

But we can define a stack that provides both "type" and "state" layers in the order that we want them prioritized:

```css
button {
  background: var(--btn-state, var(--btn-type, var(--btn-default)));
}
```

Now when we set both variables, the state will always take precedence:

https://codepen.io/mirisuzanne/pen/abdNWwa?editors=1100

I've used this technique to create a [Cascading Colors][cc] framework that allows custom theming based on layering:

- pre-defined theme attributes in the html
- user color preferences
- light and dark modes
- global theme defaults

[cc]: https://cascading-colors.netlify.com/

## Mix & Match

These approaches can be [taken to an extreme][extreme], but most day-to-day use-cases can be handled with two or three values in a stack -- often using a combination of the techniques above:

[extreme]: https://codepen.io/mirisuzanne/pen/KKdWXGo?editors=1100

- A variable stack to define the layers
- Inheritance to set them based on proximity & scope
- Careful application of the `initial` value to remove nested elements from a scope
