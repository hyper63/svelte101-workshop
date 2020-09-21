<script>
  let projects = []
</script>
<header>
  <h1>Projects</h1>
</header>
<main>
  <section>
    <ul>
      {#each projects as project}
        <li><a href="/projects/{project.id}">{project.name}</a></li>
      {:else}
        <li>No Projects Found</li>
      {/each}
    </ul>
  </section>
</main>

