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

<article><aside>

Open the app here and start the server.    
I wonder if I can create one mega app then use the routers to separate the different apps during the workshop.    
This will be less moving parts for the students and make transitions easy from one lesson to the next lesson.

</aside></article>

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


src/components/Start.svelte

``` html
<script>
  import Nav from './components/Nav.svelte'
  import Page from './components/Page.svelte'
</script>
<Nav />
<Page>
  ...
</Page>
```


---

[Home](/)

</main>
