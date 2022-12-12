---
title: JavaScript Automation on Mac
sub: New powers unlocked!
date: 2022-12-11
tags:
  - javascript
  - automation
  - osx
summary: |
  When my Alfred word counting workflow
  stopped working (flowing?)
  I discovered it was written as a php script --
  and could be re-written with JS.
  So I did!
---

I've been using Alfred for Mac
as long as I can remember --
occasionally installing 'powerpack' workflows
or building simple flows
with the graphic interface.
The other day,
I discovered one of my
third-party workflows wasn't working.
It's a word/character counter
that I don't use often,
but like to have available.

Digging into it,
I found a simple php script
defining the entire word-count logic.
That's interesting,
I didn't know you could write Alfred workflows in php.
I wonder what other languages are supported?
Here's the list provided in a dropdown:

- `/bin/bash`
- `/bin/zsh`
- `/usr/bin/php` [not installed]
- `/usr/bin/ruby`
- `/usr/bin/python` [not installed]
- `/usr/bin/python3`
- `/usr/bin/perl`
- `/usr/bin/osascript (AppleScript)`
- `/usr/bin/osascript (JavaScript)`
- `/usr/bin/swift`

Well, that explains why the php script wasn't working --
it must have broken when I got my new Mac.
But JavaScript support
means I can re-write this workflow myself,
without learning a new language?

Yes!
It turns out Apple now supports
[JavaScript for Automation](https://en.wikipedia.org/wiki/AppleScript#JavaScript_for_Automation)
as an alternative to AppleScript.
You can do this [in Automator](https://developer.apple.com/library/archive/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-11.html#//apple_ref/doc/uid/TP40014508-CH110-SW1)
as well as Alfred.

## The basics of JS in Alfred

After selecting `/usr/bin/osascript (JavaScript)`
from the language dropdown,
I left the next option as-is:
`with input as {query}`.
That gives me the input pasted to Alfred.

For output,
the docs recommend
[returning a JSON object](https://www.alfredapp.com/help/workflows/inputs/script-filter/json/).
The object has a single `items` key,
with an array of objects
for each result row to be displayed.
The essential properties of an item
seem to be the `title` and `arg` keys.
There's more you can provide,
but that's enough to get started.

- The `title` is what's actually shown in the row
- The `arg` is the value that gets passed along to
  any further actions (like copying to clipboard)

In my case, the result I want is:

```json
{"items": [
  {
    "title": "Words: <word-count>",
    "arg": "<word-count>"
  },
  {
    "title": "Chars: <char-count>",
    "arg": "<char-count>"
  }
]}
```

There doesn't seem to be much magic
around using the `{query}`
or returning the JSON.
If we define a function called `wordCounter()`
that accepts a single argument
and returns a JSON string,
we can run it like this:

```js
wordCounter(`{query}`);
```

The `{query}` itself seems to be supplied
as a direct text replacement
before the script is run.
If I remove the backticks or quotes around `{query}`,
it assumes the first word is an undefined JS variable
and throws an error.

## My simple word counter

I didn't put a lot of thought into edge cases
beyond 'the query is missing for some reason',
so we'll see how well it holds up.
Here's the logic I used for counting:

```js
const words = (text || '').trim().split(' ').length;
const chars = (text || '').length;
```

Nothing clever,
and it seems to work
even when I copy text with line-breaks --
so that's good enough for now.
The rest is just to make sure
the query is a string
(maybe unnecessary since I'm already forcing it),
and build the correct JSON from the results.
Here's the full script:

```js
// generate an Alfred return item
const item = (title, arg) => ({
  title: arg ? `${title}: ${arg}` : title,
  arg,
});

// count words/chars and return as items
const count = (text) => {
  const words = (text || '').trim().split(' ').length;
  const chars = (text || '').length;

  return [
    item('Words', words),
    item('Chars', chars),
  ];
}

// count or error, and return as JSON string
const wordCounter = (txt) => {
  // error if query isn't text (maybe overkill?)
  const items = (typeof txt === 'string')
    ? count(txt)
    : [item('ERROR: please provide a string', null),];

  return JSON.stringify({ items });
}

// run the script
wordCounter(`{query}`);
```

That works great so far.
The only other thing in the workflow
is copying the output to the clipboard.

Now that I know how to do it,
I wonder what other automations
I might want to write!
