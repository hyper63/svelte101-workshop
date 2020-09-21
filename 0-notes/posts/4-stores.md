---
title: Svelte 101 Workshop - Stores 
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

# Svelte Stores

When building web applications using a component architecture you will quickly become concerned about state and how to manage state, how to share state between components. I common pattern when working with components is to create `logic` components and `presentation` components. The `logic` components focus on the `business logic` and the `presentation` components focus on the presentation. With this approach, the logic components change state and the presentation componentsneed to know about that state in order to present the updates. 

You can satisfy these cases by passing data as props explicitly or by passing data implicitly using context. Both patterns are useful for different cases.

Passing state via props:

``` html
<Component title="Hello World" />
```

``` html
<script>
export let title
</script>
<h1>{title}</h1>
```

Passing state via context:

``` html
<script>
import { setContext } from 'svelte'

setContext('color', 'red')
</script>
```

``` html
<script>
import { getContext } from 'svelte'

const color = getContext('color')
</script>
<div style="color: {color}">Hello World</div>
```

Another approach to sharing state is using Svelte Stores.

Svelte simplies the approach of sharing state between components, using readable and writable stores. Stores is a pattern that has a specific specification on how you interact with values.

## Setup

``` sh
npx degit hyper63/svelte-template 4-stores 
cd $_
yarn
yarn dev
```

<article><aside>
NOTE: If you are in the workshops repository, then this project already exists and you don't need to create it.
</aside></article>

## Writable store

With a writable svelte store you can set the value, subscribe to the changes of the store and update the value of the store by passing in a help function.

``` js
import { writable } from 'svelte/store'

const state = writable({})

state.subscribe(state => {
  console.log('value changed to')
  console.log(JSON.stringify(state, null, 2))
})

state.set({users: [{id: 1, name: 'Fred'}]}) // logs change

state.update(state => {
  return {...state, projects: [{id:1, name: 'Blue Project'}]}
})

// logs change

unsubscribe()
```

## Readable store

``` js
import { readable } from 'svelte/store'

const isOnline = readable(false, set => {
  window.addEventListener('online', () => set(true))
  window.addEventListener('offline', () => set(false))

})

const unsubscribe = isOnline.subscribe(v => {
  console.log('online: ', v)
})

// toggle network off and event should fire
// unsubscribe()
```

## Derived stores

A derive store can take one or more stores and whenever one of those stores values change a callback runs which can then modify the value of the derive store.

``` js
import { derived } from 'svelte/store';

const doubled = derived(a, $a => $a * 2);
```

Example from https://svelte.dev/docs#derived - for more information on derived stores check out the link to the svelte documentation.

## Subscribing to stores in svelte

Because Svelte is a compiler, the language added a nice shortcut for svelte stores to let the compiler handle 
the subscribe and unsubscribe process for the svelte component.

src/components/Header.svelte

``` html
<script>
import isOnline from './is-online.js'
export let title = 'Title'
</script>
<header>
  <div>Online: {$isOnline}</div>
  <h1>{title}</h1>
</header>
```

## Implementing a redux like pattern using stores

``` js 
import { writable } from 'svelte/store'
import { reduce } from './lib/utils.js'

const initialState = {
  users: [],
  projects: [],
  tasks: []
}

export const store = writable(initialState)

export const dispatch = (action) => {
  store.update(state => reduce(reducer, state, [action]))
})

function reducer((state, action) => {
  return state
})

```

## Lets see this redux like store in action

src/Signup.svelte

``` html
<script>
import { store, dispatch } from './store.js'

</script>
<header>
  <h1>Signup User</h1>
</header>
<main>
  <form>
    <div>
      <label>Username</label>
      <input type="text" />
    </div>
    <div>
      <button type="submit">Sign up</button>
      <a href="/">Cancel</a>
    </div>
  </form>
</main>
```

## Lets add this store to the Signin page too

src/Signin.svelte

``` html
<script>
import { dispatch } from './store.js'
import { getJSON } from './lib/async.js'

</script>
<header>
  <h1>Sigin User</h1>
</header>
<main>
  <form>
    <div>
      <label>Select User</label>
      <select>
        <option>-- select user --</option>
      </select>
    </div>
    <div>
      <button type="submit">Sign in</button>
      <a href="/">Cancel</a>
    </div>
  </form>
</main>
```

## How to check if a user is logged in?

``` html
<script>
import { store } from './store.js'
import { onMount } from 'svelte'

onMount(() => {
  if (!$store.user) {
    // not logged in
    // redirect to start page
  }
})

</script>
<!-- template details -->

```

## Summary

In this lesson, you learned how to create a svelte store and how to send updates to the store and how to subscribe to the store using the svelte `$` helper within a svelte component.


---

[Home](/)

</main>

