---
title: Svelte 101 Workshop - Testing 
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

# Svelte Unit Testing

This article is about setting up unit testing with svelte using cypress. Cypress is an end to end testing tool for web applications. It can run in multiple browser environments, but it also can run headless. Cypress is a game changer for the front-end testing eco-system. Not only does Cypress work for end to end and integration tests, it has the ability to run unit tests on your components. We will walk through the setup involved to configure cypress to run unit tests in Svelte.

<article><aside>

🙏THANK YOU! 🙏 This is made possible by the great work Gleb Bahmutov of Cypress has done with the cypress-svelte-unit-test library, you will see how seemless it is to create and run component unit tests with cypress.

</aside></article>

## Install a svelte project

```
npx degit sveltejs/template test-example
cd $_
yarn
```

## Install cypress

The first thing we need to do is install cypress and cypress-svelte-unit-test:

```
yarn add -D cypress cypress-svelte-unit-test
```

## Initialize Cypress

```
yarn run cypress open
```

Once you see the modal, you click `ok` and then close the cypress window.

<article><aside>

Cypress comes with a bunch of examples, but we don't need them for this walkthrough, you can get rid of them by running `rm -rf cypress/integration/examples`

</aside></article>

## Tell cypress to use rollup when working with svelte components

Open an index.js file in the cypress/plugins directory and edit the following function:

```
module.exports = (on) => {
  const filePreprocessor = require('@bahmutov/cy-rollup')
  on('file:preprocessor', filePreprocessor())
}
```

This code will give cypress the information it needs to compile the svelte component

## Turn on component support for cypress

When you installed cypress, the install created a cypress.json file, in this file we need to add the following entries:

``` json
{
  "experimentalComponentTesting": true,
  "componentFolder": "src",
  "testFiles": "**/*spec.js"
}
```

The first entry is a flag to enable component testing, the second is the location of the components, finally the third entry is a pattern matcher for the test files.

## Write a test

Now, we have our project configured we can write a test.

In our src folder, lets create a test for the App component.

create a new file src/App.spec.js

``` js
import App from './App.svelte'
import { mount } from 'cypress-svelte-unit-test'

it('shows greeting', () => {
  mount(App, { props: { name: 'World' }})
  cy.contains('h1', 'Hello World!')
})
```

The it function takes a description and a callback function, in the callback function, 
we use the imported mount function to mount the App component passing the name
prop. Then we use cypress contains function to find the dom element h1 and validate 
if it contains the following text 'Hello World!'

## Run the Test

Now that we have our test, lets run it and see if it passes.

```
yarn run cypress run
```

This command will run cypress in the console.

If everything went as planned you should see a print out showing App.spec.js passed and all specs passed!

🎉 Congrats! 🎉

## Where to go from here

Now that you have setup your project to use cypress with component tests, you will want to start to familarize yourself with the cypress documentation. The added benefit of setting cypress up for component testing, is that it is also ready to do end to end testing, all you have to do is start adding your end to end tests in the cypress/integration folder. Here is the link to the cypress guides - https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell


---

[Home](/)

</main>
