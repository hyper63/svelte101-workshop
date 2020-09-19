---
title: Svelte 101 Workshop - Actions 
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

# Creating a modal dialog with Svelte


Modals are a common building block in todays web applications, with Svelte you can create modals with its component architecture. Using the slot feature and the event dispatcher we can provide a modal component with a close button, that can accept any markup within the component to display as a modal box. We can also handle closing the dialog if the user clicks off of the dialog or make the modal require the user to click the close button.

<article><aside>

Disclaimer: there are many different ways to do modals and this modal does not try to address all use cases.

</aside></article>

https://svelte.dev/repl/e94473c00c5c422fa736ba60a2ca0e61?version=3.25.1

## Create a modal trigger button

``` html
<script>
  import Modal from './Modal.svelte'
  let open = false

  function toggle() {
    open = !open
  }
</script>
<main>
  <h1>Svelte Modal Example</h1>
  <button on:click|preventDefault={toggle}>Open Modal</button>
</main>
<Modal {open} on:close={toggle}>
  <h3>My Modal Dialog</h3>
  <figure><img alt="bill" src="http://www.fillmurray.com/60/60" /></figure>
  <p>my modal dialog</p>
</Modal>
```

### createEventDispatcher 

Using the createEventDispatcher function, we can create a dispatch function which can be called on our handleCloseClick function and it will dispatch a close event to the parent component.

``` html
<script>
  import { createEventDispatcher } from 'svelte'
  export let open = false
  const dispatch = createEventDispatcher()


  function handleCloseClick() {
    dispatch('close')
  }
</script>
{#if open}
<div>
  <section>
    <aside>
      <slot />
    </aside>
  </section>
</div>

{/if}
<style>
  section {
    height: 100%;
    display: grid;
    place-items: center;
  }
  aside {
    background-color: white;
  }
  div {
    position: absolute;
    background-color: rgba(0,0,0,.8);
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
</style>
```

### Issue: background scrolling.

Basically, we want to body of the page to be fixed when the modal is showing and to not be fixed when it is not showing. We can do this with Svelte Actions. Svelte actions allow you to write vanilla js at the html node level. This enables you to do things like focus and highlight text in input components or work with other native dom element attributes and properties. In this case, we want to access the body node and change the style of the overview value to 'hidden' which will prevent the screen from scrolling. Then when the modal is closed we will revert the setting. The action function allows us to return an object with a destroy method, which will get invoked at the time of component destruction. Pretty cool!


``` html
<script>
  import { createEventDispatcher } from 'svelte'
  import { scale } from 'svelte/transition'
  export let open = false
  const dispatch = createEventDispatcher()

  function handleCloseClick() {
    dispatch('close')
  }

  // action

  function modalAction(node) {
    let fns = []
    if (document.body.style.overflow !== 'hidden') {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      fns = [...fns, () => document.body.style.overflow = original]
    }
    return {
      destroy: () => fns.map(fn => fn())
    }
  }
</script>
{#if open}
  <div use:modalAction on:click={handleCloseClick}>
    <section>
      <aside in:scale out:scale={{duration: 500}}>
        <slot />
        <br />
        <button on:click|preventDefault={handleCloseClick}>Close</button>
      </aside>
    </section>
  </div>
{/if}
<style>
  section {
    height: 100%;
    display: grid;
    place-items: center;
  }
  aside {
    background-color: white;
  }
  div {
    position: absolute;
    background-color: rgba(0,0,0,.8);
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
</style>
```

---

[Home](/)

</main>
