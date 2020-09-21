<script>
	export let open = false
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
