<script>
	let open = false

	function toggle() {
		open = !open
	}
</script>
<main>
	<h1>Svelte Modal Example</h1>
	<button on:click|preventDefault={toggle}>Open Modal</button>
</main>

