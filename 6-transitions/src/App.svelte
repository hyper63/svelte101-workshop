<script>
	import router from 'page'

	import Start from './Start.svelte'
	import Blog from './Blog.svelte'
	import About from './About.svelte'

	let page

	router('/', navTo(Start))
	router('/blog', navTo(Blog))
	router('/about', navTo(About))

	router.start()

	function navTo(Component) {
		return ctx => page = Component
	}
</script>
<svelte:component this={page} />
<style>
  :global(body) {
  	height: 100%;
  }
  :global(html) {
  	height: 100%;
	}
</style>
