<script>
  import router from 'page'
  
  import Start from './Start.svelte'
  import ShowProject from './ShowProject.svelte'
  import FormTask from './FormTask.svelte'
  import ShowTask from './ShowTask.svelte'

  let page, params, qs
  
  router('/', navigateTo(Start))
  router('/projects/:id', navigateTo(ShowProject))
  router('/tasks/new', navigateTo(FormTask))
  router('/tasks/:id', navigateTo(ShowTask))

  router.start()

  function navigateTo(Component) {
    return ctx => {
      page = Component
      params = ctx.params
      qs = ctx.querystring
    }
  }
</script>
<svelte:component this={page} {params} {qs} />
