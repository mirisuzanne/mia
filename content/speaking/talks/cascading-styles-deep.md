---
title: Cascading Style Systems
sub: A workshop on resilient & maintainable CSS
date: 2023-08-15
tags:
  - css
  - cascade
  - custom properties
  - cascade layers
  - container queries
  - css scope
og:
  img: talks/mia-smashing-de.jpg
events:
  - venue: Web Directions Workshops
    date: 2024-11-29
    adr: Sydney, Australia
    url: https://webdirections.org/dev-summit/speakers/workshop-suzanne.php
  - venue: Smashing Workshops
    date: 2024-10-14
    end: 2024-10-28
    adr: Online
    url: https://smashingconf.com/online-workshops/workshops/modern-css-miriam-suzanne/
  - venue: Smashing Workshops
    date: 2024-02-26
    adr: Online
    url: https://smashingconf.com/online-workshops/workshops/modern-css-miriam-suzanne/
  - venue: Smashing Workshops
    date: 2023-09-06
    adr: Freiburg, Germany
    url: https://smashingconf.com/freiburg-2023/workshops/miriam-suzanne/
actions:
  - text: Tickets on sale now!
    url: https://smashingconf.com/online-workshops/workshops/modern-css-miriam-suzanne/
media:
  - iframe: https://player.vimeo.com/video/880145407
summary: |
  It’s a good time to step back and understand
  how these tools fit together in a declarative system --
  a resilient cascade of styles.
---
{% import "content.macros.njk" as content %}

{{ content.figure(
  media,
  "[Tickets on sale now!](https://smashingconf.com/online-workshops/workshops/modern-css-miriam-suzanne/)"
) }}

---

New CSS features are shipping at an unprecedented rate --
cascade layers, container queries, the `:has()` selector,
subgrid, nesting, and so much more.
It’s an exciting time, but the list can also feel overwhelming.
Do I really need grids if I already know flexbox?
What problem do layers actually solve?
Should I rewrite my styles with each feature release,
or stick with the tools that I know?

If you ever feel lost in the CSS weeds,
wrestling with the cascade,
or you just want to improve your workflow
with modern, efficient, and maintainable stylesheets,
then this workshop is for you!
We'll approach the language as a cohesive system,
learn new features along the way,
and then put it all in practice
with a resilient approach to CSS architecture.

Join Miriam for a deep dive
into what makes the language work,
and how we can harness its power
to **develop resilient and delightful experiences**
that hold up across browsers, languages, and device interfaces.

## What Will Attendees Learn In This Workshop?

- Building maintainable CSS systems with progressive enhancement
- The entire cascade, why it exists,
  and what all is involved (much more than specificity!)
- Managing style conflicts with cascade layers, scope, and nesting
- Modern selectors like `:is()`, `:where()`, and `:has()`
- Value resolution and validation, beyond cascading and inheritance
- Using custom properties to build adaptive systems
- The advantages of logical vs physical dimensions
- The layout flow with intrinsic and extrinsic sizing
- Size comparison functions like min(), max(), and clamp()
- When to use flexbox vs grid for layout and alignment
- Fast and dynamic layouts using subgrid and container queries

## Who Is This For?

This workshop is intended for designers & developers
with at least a basic understanding in HTML and CSS.
You don’t need to be an expert to keep up,
but even the experts are likely to learn something new.

## Schedule

The workshop is taught in five sessions, each with two parts:

### 1. Resilient Styles: a Declarative Cascade

#### First, Do No Harm

CSS is fundamentally different
from other languages or design tools,
built around a radical vision
for contextual style and user-control.
We’ll dig into the practical implications of that vision,
and how the ‘grain’ of the language
can guide us to more performant and resilient styles.

#### Cascading & Inheritance

A deep-dive into the algorithms
that take us from simple property/value declarations
to a fully-styled web application.
Along the way, we’ll explore new features like nesting,
cascade layers, scope, and the `:has()` selector.

### 2. Dynamic Systems: Custom Properties & Value Resolution

#### Custom Properties Reveal the Matrix

CSS custom properties (aka “variables”)
expose the internals of CSS value resolution and error recovery.
What does it even mean for properties
to become ‘invalid at computed value time’?
And how can we use these CSS internals to our advantage,
developing more robust and dynamic style systems?

#### CSS Variables in Practice

Practical use-cases,
and interactive exercises related to CSS variables and functions.

### 3. Intrinsic Layouts: Distributing Space

#### Flowing & Flexing

Unlike the printed page,
web content and context can be unpredictable.
CSS provides tools to manage that uncertainty,
aligning & distributing objects on the page.
We’ll talk about normal flow,
intrinsic and extrinsic sizing,
logical properties,
box sizing & alignment,
and the flexible box model.

#### Flex & Alignment in Practice

Practical use-cases,
and interactive exercises related to distributing space.

### 4. Intrinsic Layouts: Defining Structure

#### Defining Structure

Sometimes we also need to impose external structure
to create consistent and reliable layouts,
even with unpredictable content.
This is a full session dedicated to grid & subgrid,
the multiple ‘stages of squishiness’,
and container queries.

#### Grids & Containers in Practice

Practical use-cases,
and interactive exercises related to defining layouts.

### 5. Resilient Styles: Organizing Conventions

#### Cascade Aligned Programming

There are many conventions for organizing CSS,
but the best systems all share underlying principles
based on CSS itself.
What would it mean to use _the cascade_ itself
as our guide for writing maintainable CSS?

#### Modern and Resilient

CSS is designed to adapt to context --
failing silently, and enhancing progressively.
We have tools to manage that context and support everyone,
without giving up on the latest features.
The details may vary from project to project,
but we’ll look at practical strategies
for building an expressive and robust CSS system
that works for you.
