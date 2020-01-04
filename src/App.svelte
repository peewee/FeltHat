<script>

	import Router from './Nav/Router.svelte'
	console.log( 'Router' )

	import Mbar from "./Mbar.svelte"
	import Fetch from "./Fetch.svelte"
	const props = {
		url: 'http://s3.amazonaws.com/negrone/album.txt'
	}	
</script>

<style>
	h1 { color: purple; }
	h2 { color: grey; }
</style>

<Mbar />

<Fetch {...props} let:data>
  <h2>Albums</h2>
  <ul>
    {#each data as link}
      <li>{link.album}</li>
    {/each}
  </ul>
</Fetch>

<!--h1>Hello {name}!</h1-->
<!--h2>count {$count}</h2>
<h3>Gallery {$albums}</h3-->

