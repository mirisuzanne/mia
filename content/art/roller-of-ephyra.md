---
type: game
title: Roller of Ephyra
banner: |
  ~~Ruler~~ Roller of Ephyra
sub: Almost a board game, for any number of players
date: 2022-10-16
hero:
  img: 2022/roller/sisyphus-dice.jpg
  alt: |
    AI generated Sisyphus
    awkwardly straddling rocks,
    while holding a boulder
    carved to be almost dice-like –
    there are mountains and maybe more dice
    in the background
  caption: |
    The AI branding wasn't as successful as I hoped,
    but neither is the game.
tags:
  - game
  - post
  - artifact
gallery:
  data:
    - img: 2022/roller/big-dice.jpg
      alt: |
        AI generated
        big dice-like white boulder
        with strange facets and black dots
        sitting in a mountain range
    - img: 2022/roller/body-dice.jpg
      alt: |
        AI generated
        black and white, a
        muscular body without a head
        leans over a large dice
        with illegible markings –
        there are mountains in the background
    - img: 2022/roller/dice-mountain.jpg
      alt: |
        AI generated
        mountain side
        with what might be people,
        some large boulders,
        and a massive distorted dice-like
        object above them in the sky
  caption: |
    How long can you spend
    [generating AI art](https://huggingface.co/spaces/stabilityai/stable-diffusion)
    for a game idea this bad?
summary: |
  Keep rolling the dice.
  You're bound to win eventually.
---

## What you need

- Any number of 6-sided dice
- A board from another game (Monopoly & Sorry are good options)
- Player tokens

## Setup

All players start with their token on the board.

## Take turns

Keep rolling the dice until one of the following:

- All dice are 1s & 2s: Move your token that number of spaces
- All dice are 5s & 6s: Go back to your starting space

## Winning

The game ends when any player gives up.

## Strategy

The more dice you roll, the farther you might move.
But fewer dice will move you more quickly.

Does it matter?
No, it does not.

## Game Art

{% import "content.macros.njk" as content %}

{{ content.figure(
  data=gallery.data,
  caption=gallery.caption
) }}
