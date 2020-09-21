<script>
	import Nav from './components/Nav.svelte'
</script>
<Nav />
<header><h1>About</h1></header>
<main>
	<section>
		<h1>Great Freaking Company</h1>
	</section>
	<section>
		<aside>
			<h3>Mission</h3>
			<p>To rule the world!</p>
			
		</aside>
	</section>
	<section>
		<aside>
			<h3>A great picture of bill murray</h3>
			<figure>
				<img src="http://www.fillmurray.com/600/600" alt="bill" />
			</figure>
		</aside>
	</section>
</main>
<footer>
	<p>Some footer stuff</p>
</footer>
<style>
	footer {
		position: absolute;
		bottom: 0;
	}
</style>

