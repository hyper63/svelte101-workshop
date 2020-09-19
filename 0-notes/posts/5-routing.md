---
title: Svelte 101 Workshop - Routing 
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

# Svelte and Routing

Routing conversations always come up when trying to separate concerns from a JS Library and a full JS Framework, currently, Svelte does not have an official routing library, but there are several top modules available.

* Sapper comes with routing built in.
* Elder.js - static site generator with routing
* Routify - Svelte library focused on routing

In this tutorial we are going to use `pagejs` a framework agnostic router that will demonstrate how you might handle routing with svelte.

src/Router.svelte

``` html
<script>
  import router from 'page'

  // pages
  import Start from './pages/Start.svelte'
  import Signup from './pages/auth/Signup.svelte'
  import Signin from './pages/auth/Signin.svelte'

  let page, params, qs

  page('/', navTo(Start))
  page('/signin', navTo(Signin))
  page('/signup', navTo(Signup))

  page.start()

  function navTo(Component) {
    return ctx => {
      params = ctx.params
      qs = ( new URLSearchParams(ctx.querystring))
        .entries()
        .map(e => ({e[0]: e[1]}))
      page = Component
    }
  }
</script>
<svelte:component this={page} {params} {qs} />
```

Basically, the main take away here is that the `<svelte:component>` is a directive that allows you to dynamically 
create components when you assign the component to the `this` property. So when we change the assignment in each event handler of the router, Svelte dynamically renders the new page. We can also pass params down to the page components. In this example, we are passing the params which are url params and the querystring. This way we can access url parts at the page component level.

Exercise

Lets create a child router for Tasks

``` html
<script>
  import router from 'page'

  import Task from './Show.svelte'
  import Form from './Form.svelte'
  
  let page, params, qs

  page('/tasks/new', navTo(Form))
  page('/tasks/:id/edit', navTo(Form))
  page('/tasks/:id', navTo(Task))

  page.start()

  function navTo(Component) {
    return ctx => {
      params = ctx.params
      qs = ( new URLSearchParams(ctx.querystring))
        .entries()
        .map(e => ({e[0]: e[1]}))
      page = Component
    }
  }
</script>
<svelte:component this={page} {params} {qs} />
```

Exercise: Create a child router for projects

### Redirecting programmatically

With routing, you will want to at some point redirect the app to a specific page.

With `page` you simply call the route you want to direct:

``` html
<script>
  import page from 'page'

  function handleSubmit() {
    // ...do stuff
    
    // redirect to projects page
    page('/projects')
  }
</script>
<!-- template here -->

```

Lets try it with some of the pages we have already worked on:

* Signup
* Signin
* Task Form
* Task Show


---

[Home](/)

</main>
