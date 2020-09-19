---
title: Svelte 101 Workshop - Reactivity 
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

## Svelte Reactivity

Reactivity is a special feature in Svelte that allows you to watch changes of specific variables and react to those changes, very similar to calculated fields in an excel spreadsheet. In this lesson, we will show a simple counter example to show how reactivity works, then create an example by building a BMI calculator, and an exercise to create amarkdown editor. 

## Setup

``` sh
npx degit sveltejs/template reactivity
cd $_
yarn
yarn dev
```

## Counter Example

```
src/Example.svelte
```

``` html
<script>
  let count = 0

  $: double = count * 2
</script>
<header>
  <h1>Reactivity Example</h1>
</header>
<section>
  <h3>Count: {count}</h3>
  <h4>Double: {double}</h4>
  <button on:click={() => count += 1}>Increment</button>
</section>
<style>
  section {
    display: block;
  }
</style>
```

### BMI Calculator

A BMI Calculator takes the height and weight of a patient and uses a formula to calculate the body mass index. In this example, we will create two sliders, one to represent the height and the other to represent the weight. As the sliders move, we will change the value of the BMI in real-time.

The formula in lbs and inches is 703 * weight (lbs) / [height (inches)(squared)] then the result is part of the following scale:

Thin = < 18.5
Healthy = > 18.6 < 24.9
Overweight = > 25 > 29.9
Obese = > 30 

Code File

``` 
src/Bmi.svelte
```

``` html
<script>

  function calculate(weight, height) {
    return (weight / (height * height)) * 703
  }
</script>

<section>
  <h1>BMI Calculator</h1>
  <aside>
    <label for="height">Height (in)</label>
    <input id="height" type="range" />
    <label for="weight">Weight (lbs)</label>
    <input id="weight" type="range" />
  </aside>
</section>
```

### Markdown Parser

Another reactive example is to convert markdown to html and show the html side by side with the markdown.

In this exercise use the marked library which is already installed in this project. Here is an example of how to use it.

``` html
<script>
  import marked from 'marked'
  const markdown = '# Hello World'
  const html = marked(markdown)
</script>
<div>{markdown}</div>
<div>{@html html}</div>
```

Code File

```
src/MarkdownEditor.svelte
```

``` html
<script>
  import marked from 'marked'

</script>
<main>
  <h1>Markdown Editor</h1>
  <section>
    <aside>
      <h3>Markdown</h3>
      <textarea></textarea>
    </aside>
    <aside>
      <h3>Preview</h3>
      <!-- show html here -->
    </aside>
  </section>
</main>
```

---

<a href="/">Home</a>

</main>
