---
title: Svelte 101 Workshop - Async 
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

# Async with Svelte

If you build web applications you have deal with async and the need to fetch data from web services. In this article we will walk through some examples of how to work with Svelte with async data. 

<article><aside>

Disclaimer: these use cases are produced for demo and practice purposes only and you should consider your specific guidelines and design principles when working with components. 

</aside></article>

## Setup

``` sh
npx degit hyper63/svelte-template async-examples
cd $_
yarn
yarn dev
```

## Reading data from a REST Data Source

### Exercise 1 -- Show a list of open tasks for a project

With any dynamic web application, you will want to read data from a data source and this use case is focused around REST APIs that return JSON.

User Story

``` 
As a user viewing the 'Blue Project' with an project id of 1    
I want to read the list of available tasks for the blue project    
So that I can see which one I may take ownership   
```

Task Data Model

| Field | Type | Description |
| ----- | ---- | ----------- |
| text  | string | task description |
| status | string (enum) | (open or closed) |
| projectId | number | id the task belongs to |
| assigned | number | userId the task is assigned to |


src/ShowProject.svelte

``` html
<script>
  import { getJSON } from './lib/async.js'
  import { onMount } from 'svelte'
  export let params // params passed in from route /projects/:id 
  
  let name = ''

  // REST API call /api/tasks?projectId=1&status=open&_expand=project


</script>
<header>
  <a href="/tasks/new?projectId={projectId}">Add Task</a>
  <h1>Project {name}</h1>
</header>
<main>
  <h3>Available Tasks</h3>
  <!-- Add Available Tasks here -->
  <!-- show Task text if not assigned -->
  <!-- task should contain a hyperlink to /tasks/{id} --> 
</main>
<style>
</style>
```

### Exercise 2 - Assign existing task to an user

User Story

```
As an user viewing the Task with an id of 2   
I want to select an user from a drop down of users   
And click a button called 'assign' to update the 
Task Resource with an assigned user
```

src/ShowTask.svelte

``` html
<script>
  import { getJSON, postJSON } from './lib/async.js'
  
  export let params // params passed in from route /tasks/:id

  let text = ''

  // REST API calls 
  // GET /api/users
  // GET /api/tasks/:id
  // PUT /api/tasks/:id

</script>
<header>
  <h1>Task</h1>
</header>
<main>
  <h3>Task: {task.text}</h3>
  <p>Status: {task.status}</p>
  <p>Project: {task.project.name}</p>
  <!-- if task is not assigned show form and allow user assignment -->
  <form>
    <label>Assigned To</label>
    <select />
    <button type="submit">Assign</button>
  </form>
</main>
```

### Exercise 3 - create a new task

User Story

```
As an user when I have requested to create a new task for a given project   
I want to add the task description and submit the new task to the server     
So that I can see the task on the project show page
```

src/FormTask.svelte

``` html
<script>
  import { postJSON } from './lib/async.js'

  export let qs // query string passed from route 

  let projectId = (new URLSearchParams(qs)).get('projectId')

</script>
<header>
  <h1>Task</h1>
</header>
<main>
  <form>
    <div>
      <label>Description</label>
      <input type="text">
    </div>
    <div>
      <label>Status</label>
      <select>
        <option value="open">open</option>
        <option value="closed">closed</option>
      </select>
    </div>
    <div>
      <button type="submit">Save</button>
      <a href="/projects/{projectId}">Cancel</a>
    </div>
  </form>
</main>
```

---

If time permitting talk about `svelte-query` based on `react-query`

---

[Home](/)

</main>
