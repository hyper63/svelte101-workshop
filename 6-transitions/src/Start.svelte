<script>
	import Page from './components/Page.svelte'
	import Nav from './components/Nav.svelte'

</script>
<Nav />
<header>
	<h1>Start Page</h1>
</header>
<main>
	<section>
		<h1>Some big deal</h1>
	</section>
	<section>
		<aside>
			<p>Card 1</p>
		</aside>
		<aside>
			<p>Card 2</p>
		</aside>
	</section>
</main>
<footer>
	<p>Some footer stuff</p>
</footer>
<style>
	aside {
		background-color: yellow;
	}
	footer {
		position: absolute;
		bottom: 0;
	}
</style>


