---
title: reusable components
author: Tom Wilson
date: 2020-9-15
---

# Reusable Components with Svelte

Svelte makes it easy to create reusable components, but it takes a lot of experience and displine to get the 
abstraction right. Here are some guidelines, I would recommend to consider.

* Reusable components should be pure

Which means everything the component knows about the world is passed in. A reusable component should not
have implementation details on making an API call, or have implementation details about some business 
logic, it should be designed to focus on user presentation, showing a header, error, textfield, image,
card, etc. 

* Generalization > Specialization

When building your components try to make them as general as possible, even if you do not plan to
use them in other applications, you will get greater reusuability within your own application 
as it grows over time. Separate the specialized components via folder structure so you know
these components are for a specific purpose.

* Separate generic style of the component from specific style of the application

A button component should have style attributes that make it a button, but any app specific
attributes are passed in via props or managed in a global.css file.

* Dispatch events for parent components to implement side effects.

Svelte has a dispatch pattern that is great for reusable components, because they can 
dispatch the implementation back up to the parent to implement.

``` html
<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  function handleSubmit() {
    dispatch('change', { some: 'data' })
  }
</script>
```

``` html
<script>
  import Child from './Child.svelte'

  function handleChange(event) {
    console.log(event.detail)
  }

</script>
<Child on:change={handleChange} />
```


