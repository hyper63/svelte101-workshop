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

Reactivity is a special feature in Svelte that allows you to watch changes of specific variables and react to those changes, very similar to calculated fields in an excel spreadsheet. In a spreadsheet, you have cells these cells can contains numbers or formulas, the formulas can declare to add two cells together or subtract two cells or take a sum of a group of cells. The cells represent the values in those cells, when the values change, the formula reacts to the change and updates its value. Svelte's reactivity works in the same way. The cells are variables and when those variables change the reactive code, ie the formulas change. In this lesson, we will show a simple counter example to show how reactivity works, then create an example by building a BMI calculator, and an exercise to create amarkdown editor. 

## Setup

``` sh
npx degit sveltejs/template 2-reactivity
cd $_
yarn
yarn dev
```

<article><aside>
If you checked out the `hyper63/svelte101-workshop` repo, and have a console open in the root directory, you may have this project already on your system.
</aside></article>

Open this project in your code editor and in the `src` folder, lets create a new file called `Example.svelte` 

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

In the `App.svelte` file, lets import our example file:

``` html
<script>
  import Example from './Example.svelte'
</script>
<Example />
```

We should be able to use our console to run the project.

``` sh
yarn dev
```

### BMI Calculator

A BMI Calculator takes the height and weight of a patient and uses a formula to calculate the body mass index. In this example, we will create two sliders, one to represent the height and the other to represent the weight. As the sliders move, we will change the value of the BMI in real-time.

The formula in lbs and inches is 703 * weight (lbs) / [height (inches)(squared)] then the result is part of the following scale:

Thin = < 18.5
Healthy = > 18.6 < 24.9
Overweight = > 25 > 29.9
Obese = > 30 

To build a BMI calculator we want to have two variables, the height in inches and the weight, then we want to bind them to some ui inputs of type range, so the user can select the heigh and weight. And as the values change, we want to calculate the bmi value. We will use the `$:` symbol to let Svelte know we want to make this code reactive. Then we want to display the results of the calculation on the view.

Lets create a new file in the `src` folder called `Bmi.svelte`, lets copy the code below into the file to get started.

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
    <input id="height" type="range" min="0" max="100" />
    <label for="weight">Weight (lbs)</label>
    <input id="weight" type="range" min="0" max="500" />
  </aside>
</section>
```

Lets import this component into our App component.

``` html
<script>
  import Bmi from './Bmi.svelte'
</script>
<Bmi />
```

Lets create two new variables, `height` and `weight` in the Bmi component.

``` html
<script>
  let height, weight

  ...

</script>
...
```

Bind the variables to the input elements.

``` html
...
<input bind:value={height} type="range" min="0" max="100">
<div>Current Height(in): {height}</div>
...
<input bind:value={weight} type="range" min="0" max="500">
<div>Current Weight(lbs): {weight}</div>
```

Lets react to the changes in the values:

``` html
<script>
  ...
  $: bmi = calculate(weight, height)

</script>
...
<div>BMI: {bmi}</div>
```

### Markdown Parser

Exercise: Create a markdown editor with a live preview.

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

## Summary

In this lesson, we learned about svelte reactivity and how to use the `$:` reactive operator to watch local variables that change and react to the values to assign or perform logic.

Creating reactive programs in svelte is very intuitive and simple.

---

[Home](/)

</main>
