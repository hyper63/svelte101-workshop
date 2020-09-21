---
title: Svelte 101 Workshop - Transitions 
author: Tom Wilson
date: 2020-9-14
css: https://unpkg.com/mvp.css
code: true
---

<header>
  <nav>
    <a href="/">Workshop Menu</a>
    <a href="/z-prereqs">Prerequisites</a>
    <a href="/hyper63">About hyper63</a>
  </nav>
  <h1>SvelteJS 101 Workshop</h1>
</header>

<main>

# Svelte Transitions

Svelte is a comprehensive framework with many features added in the box when you need them. Transitions are one of those features. Transitions allow you to leverage css animation to use motion to transition from one presentation to the next. You can specify a transtion per native dom element and give the element a in transition or an out transition or just a transition for both. Svelte does not include transitions into the bundle unless you import them, so you only incur the cost when you need them. In this section, we will walk through the process of adding some transtions to a simple three page app.

## Lesson Setup

<article><aside>

* Close current server
* open the `6-transitions` folder
* open the console in this folder
* run `yarn dev`

</aside></article>

## Lesson Introduction

In this lesson you will learn how to use transitions to navigate pages, or add effects to specific dom elements.

src/components/Page.svelte

``` html
<script>
  import { fade } from 'svelte/transition'
</script>
<div transition:fade>
  <slot />
</div>
```

## Add transition component to each page

src/Start.svelte

``` html
<script>
  import Page from './components/Page.svelte'
</script>
...
<Page>
  ...
</Page>
```

src/Blog.svelte

``` html
<script>
  ...
  import Page from './components/Page.svelte'
</script>
...
<Page>
  ...
</Page>
```

src/About.svelte

``` html
<script>
  ...
  import Page from './components/Page.svelte'
</script>
...
<Page>
  ...
</Page>
```

## Work with page transitions

src/components/Page.svelte

``` html
<script>
  import { blur, fade } from 'svelte/transition'
</script>
<div in:fade={{delay: 1000, duration: 1000}} out:blur={{duration: 500}}>
  <slot />
</div>
<style>
  div {
    height: 100%;
  }
</style>
```

## Transitioning specific components

Lets say we have two cards on our `Start` page and we want one to fly in from the left and the other to fly in from the right.

``` html
<script>
  ...
  import { fly } from 'svelte/transition'
  ...
</script>
...
  <section>
    <aside in:fly={{x: -1000, duration: 1000, delay: 1000}}>
      <p>Card 1</p>
    </aside>
    <aside in:fly={{x: 1000, duration: 1000, delay: 1000}}>
      <p>Card 2</p>
    </aside>
  </section>
...
```

## Summary

In this lesson, you learned how to apply transitions to pages and specific elements. We learned about the fade, blur and fly transitions. You can learn more about each transition and their attributes in the svelte documentation: https://svelte.dev/docs#svelte_transition


---

[Home](/)

</main>
