---
title: Svelte 101 Workshop - Basics 
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

# Getting started with Svelte

<article>
  <aside>

Learning Svelte Resources      
There is a great tutorial walk through of Svelte on the Svelte website - https://svelte.dev/tutorial/basics      
There is a MDN tutorial as well - https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started      

  </aside>
</article>

## Prerequisites

* Git https://git-scm.org
* Nodejs https://nodejs.org
* Editor https://code.visualstudio.com

<article>
  <aside>

    If you are using visualstudio code you may want to install the Svelte package: https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode

  </aside>
</article>

## What is Svelte?

Svelte is a web development framework that takes a different approach to creating rich user interfaces online. From the developers perspective Svelte is designed almost as a super-set of HTML, it wants to embrace all of the web's usability and features. The way svelte transforms from a developer friendly component model to a performant web application is via a compiler, so a large part of svelte is its compiler engine. This engine takes the declarative code you write and transforms it, into vanilla js that is very performant. This is a different approach from other frameworks which use things like the virtual dom at runtime to convert a declarative style of code to the web code need to run in the browser environment.

## Use Cases

What is Svelte great at? 

* Small Web Mobile (PWA) applications

Svelte is great at creating applications intended for low powered devices and/or slow network connections. Svelte ships less code to the browser. You can find more information about the peformance characteristics of Svelte as compared to other frameworks here: https://krausest.github.io/js-framework-benchmark/current.html

* Interactive visualizations

The creator of Svelte works for the New York times as an interactive journalist and created Svelte to play nice with other frameworks and web content management systems, as well as provide the performance needed to embed rich visualizations on web pages in a very efficent manner.

* Beginners

Svelte is a great environment for people new to web development and has basic web development knowledge with HTML and CSS. With Sveltes focus as a super-set of HTML the onboarding into the modern component style of developing is done is a very short time.

What is Svelte not great at?

* Native Mobile Applications

Svelte itself is not the whole picture when wanting to create native or hybrid mobile applications, but with the help of projects like [Svelte Native](https://svelte-native.technology/) and [Svelte Capacitor](https://capacitorjs.com/solution/svelte) you can create great mobile experiences using svelte.

* Large Web Applications

In order to build large web applications, you need to be able to split your code, have server-side rendering and smart routing. Using companion frameworks like [Sapper](https://sapper.svelte.dev/) and [Elder.js](https://elderguide.com/tech/elderjs/) you can do both SSR and SSG to create both high performing large web applications or high performing large SEO websites.

<article><aside>

This workshop assumes you have NodeJS installed as well as yarn `npm install yarn -g`

</aside></article>

## Create a svelte project 

We can create a svelte project by running the following command your console:

``` sh
npx degit sveltejs/template svelte-basics
cd svelte-basics
yarn
```

We can run our svelte project by run the following line in our console:

``` sh
yarn dev
```

## Tour of the project

In the svelte project you will notice the following directories:

- public
- src

The public directory contains your `index.html` and all of your web assets, svelte will compile your code into a bundle and place it in the `public/build` directory.

You will see the following files in the root directory. 

* `package.json` file, this contains your nodejs project configuration information.
* `rollup.config.js` file, in this setup we are using rollup to bundle and tree shake our svelte compenents into bundled js code.
* `.gitignore` set to ignore files and folders from the project when checked in to git.
* `yarn.lock` a file setup to manage your node module dependencies 

In the `src` folder you will see a `main.js` and a `App.svelte` file. The main.js file is the application root file for the project, it bootstraps your svelte components and binds them to the html page. The App.svelte is the root svelte component. Lets open it up.

## App.svelte a svelte component

When we open the component we see the following:

``` html
<script>
  export let name;
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
```

You can think of a svelte component in three main sections, you have the script section where your code goes and you have the style section where your css code goes and you have any html markup, which is actually a small template laguage.

``` html
<!-- programming logic -->
<script>
...
</script>
<!-- html template -->
<main>

</main>
<!-- css style -->
<style>
...
</style>
```

## Write your first svelte component

Lets delete everything from the App.svelte component and replace it with the following:

``` html
<h1>My first component</h1>
```

press save. If you are still running the `yarn dev` command in a console, you should be able to see the
changes you made.

This is a svelte component, you see it is a super-set of html so plan html works in a svelte template.

Lets add some functionality

``` html
<script>
  let count = 0
</script>
<h1>My first component</h1>
<button on:click={() => count += 1}>Count {count}</button>
```

Here we are declaring a local variable which is only scoped to this component then we are presenting the value of the variable in the button text context using single curly braces. And we are hooking into or listening to the click event of the button and running a inline function that increments the count local variable. Svelte compiles this to vanilla js and creates a reactive binding with the local variable and the process of assignment, so when ever a local variable is assigned Svelte knows and updates all of the places svelte is presenting that variable. In this case it is the text context of the button element.


With svelte we can change the style of that h1 element by just specifying it in a style tag:

``` html
<style>
  h1 {
    color: rebeccapurple;
  }
</style>
```

And when we save our changes, we should see our Hello World text in rebeccapurple.

<article><aside>

NOTE: Styles are bound to the Svelte Component so you can modify the style of your component, but they do not cascade down to child components or up to parent components, this is by design. If you want to modify styles for multiple components, use the `global.css` file.

</aside></article>

We can add logic using the `script` tag:

``` html
<script>
  let name = 'mars'
</script>
```

This `variable` name is available within the component:

``` html
<h1>Hello {name}!</h1>
```

Using the curly braces I can execute any JS that returns a value inside the `svelte` template and it will replace that template with the value.

``` html
<h1>Hello {name}!</h1>
<p>I can add any js to my curly brackets {1 + 41} it just needs to return a value</p>
```

Lets create a counter:

```
As a user
I want to increase the count by 1   
When I click on the '+' button
And I want to decrease the count by 1
When I click on the '-' button
```

``` html
<script>
  
  let count = 0
  
  // add inc function
  // add dec function
  // handle + button with inc function
  // handle - button with dec function
</script>
<h1>Count {count}</h1>
<button>+</button>
<button>-</button>
```

<article><aside>

HINT: to listen to an event you can use the on directive followed by a colon and the event name. For example, if you want to listen for a click event, it would be on:click={fn}

</aside></article>

Spend 5 minutes to try complete the application.

Lets go over the result:

You may have noticed that by declaring a local variable in the svelte script element of the component that variable becomes reactive. Whenever it is modified in the application, then all references are automatically modified and the component is repainted with the new value. This is backed in reactivity that causes the application to function like a spreadsheet. But there is another reactive feature. Like in a spreadsheet you can take the local values and enhance them to create new values. For example, what if everytime count changes we needed a new value generated as part of an equation. Lets create a variable called double and then we will use a special JS label to define our double variable, which will always multiple the value of the count variable by two and assign it to the double variable.

``` js
let count = 0

$: double = count * 2
```

Now we can display the result of the double in our presentation layer:

``` html
<h3>Double: {double}</h3>
```

Thats cool!

With reactivity you can generate new results based on any value defined on the right side that changes, you can also add code blocks.

``` js
$: { 
  console.log(`${double} is twice the size of ${count}`) 
}
```

## Svelte Templates are easy

Templates or adding logic to your presentation is a necessary requirement. Svelte gives you three easy to use directives.

* if
* each
* await

Each one of these directives uses a handlebars like declarative syntax. With the start tag containing a curly pound name curly. `{#if __} or {#await __} or {#each ___ as ___}` and the closing tag will use a curly slash name and curly. `{/if} or {/await} or {/each}`

Here are some examples:

an if block

``` html
<script>
  let error = null

  setTimeout(() => {
    error = 'An error has occurred in your application!'
  }, 5000)
</script>
{#if error}
  <div class="error">{error}</div>
{/if}
<style>
  .error {
    padding: 16px;
    text-align: center;
    border-radius: 4px;
    background-color: red;
    color: white;
    margin-bottom: 24px;
  }
</style>

```

https://svelte.dev/repl/b8d707297e7342a084fe499702bed9c6?version=3.25.0

an each block

``` html
<script>
  let colors = ['red', 'green', 'blue']
</script>
<h1>Colors</h1>
<ul>
{#each colors as color}
  <li style="color: {color}">{color}</li>
{/each}
</ul>
```

https://svelte.dev/repl/b8d707297e7342a084fe499702bed9c6?version=3.25.0

Lets add some simple functionality to the colors app.

``` html
<script>
  let colors = ['red', 'green', 'blue']
  let color = ''

  function addColor () {
    colors.push(color)
    color = ''
  }
</script>
<h1>Colors</h1>
<form on:submit|preventDefault={addColor}>
  <legend>Add Color</legend>
  <input type="text" placeholder="color" bind:value={color} />
  <button type="submit">Add Color</button>
</form>
<ul>
{#each colors as color}
  <li style="color: {color}">{color}</li>
{/each}
</ul>
```
https://svelte.dev/repl/ecbfaee9af77416fa371081070fe9a15?version=3

O no, its not working! What could be going on? It turns out this is a tricky bit of Svelte, since Svelte uses assignment to detect reactivity, it is unable to detect modifications. So we need to remember to think in terms of immutability and return a new array when things change:

``` js
function addColor(color) {
  colors = [...colors, color]
  color = ''
}
```

https://svelte.dev/repl/a505ede729624635805ee3943fcfb973?version=3.25.0

## Challenge - Emoji Search

In this challenge we will create an emoji search app, where we can type in the text of an emoji, press the search button and see the results along with the key. In this challenge we will be using the npm module `node-emoji`.

### Install the node-emoji module

In your console, type: `yarn add node-emoji`

### Create emoji component

Then lets create a new file in our src folder called `src/Emoji.svelte` and use this template to get us started:

``` html
<script>
  import emoji from 'node-emoji'
</script>
<h1>Emoji Search</h1>
<input type="text">
<button>search</button>
```

### Add emoji component to App.svelte

``` html
<script>
  import Emoji from './Emoji.svelte'
  ...
</script>
...
<Emoji />
```

### Declare a local variable to hold the results

``` html
<script>
  ...
  let results = []
</script>
```

<article><aside>

We can search for emojis using this modules `search` method `emoji.search('dog')`    
It returns an array of objects `[{emoji: '🐕', key: 'dog2'}, {emoji: '🐶', key: 'dog'}]`    

</aside></article>

### Create an emoji search function handler

``` html
<script>
  ... 
  let q = ''
  function search() {
   results = emoji.search(q)
  }
</script>
```

### Bind the q variable to the input element

``` html
<input bind:value={q} />
```

### Add the search handler to the button click event

``` html
<button on:click={search}>Search</button>
```

### Render the results using #each

``` html
{#each results as result}
  <div>{result.emoji} - {result.key}</div>
{/each}
```

### Handle the empty or null case

We can also handle cases where there is no data

``` html
{#each results as result}

{:else}
<div>✨ No Emoji Found ✨</div>
{/each}
```


we can declare props to be exported by using the `export` syntax of es modules.

Lets create an error component for our application, the error component will display an error message div using the following style:

``` css
  .error {
    padding: 16px;
    text-align: center;
    border-radius: 4px;
    background-color: red;
    color: white;
    margin-bottom: 24px;
  }

```

Create your error component in the `src/components/Error.svelte` file

https://svelte.dev/repl/9895c72136a3487cb9b68d73354be6e8?version=3

---

[Home](/)

</main>

