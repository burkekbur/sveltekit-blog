<!-- /src/routes/bloghtml-page/+page.svelte -->
<script>
import { base } from "$app/paths"
export let data
</script>

<h1>Blog</h1>
<ul>
  {#each data.posts as post}
    <li>
      <h2>
        <a href={base}{post.path}>
          {post.meta.title}
        </a>
      </h2>
      Published {post.meta.date}
    </li>
  {/each}
</ul>