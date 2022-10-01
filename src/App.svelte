<script lang="ts">
	import Forms from "./Components/Forms.svelte";
	import Title from "./Components/Title.svelte";
  import Usuario from "./Components/Usuario.svelte";
  import type IUser from "./Interfaces/IUser";
  
	let usuario:IUser | null = null;

	function definirUser(event: CustomEvent<IUser | null>){
		usuario = event.detail;
	}
</script>

<div class="app">
	<header>
		<Title />

			<div class="busca-usuario">
				<Forms on:aoChangeUser={definirUser}/>
			</div>
	</header>


	{#if usuario}
		<Usuario {usuario}/>
	{/if}
</div>

<style>
	    .app {
    max-height: 100vh;
  }

  header {    
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

	.busca-usuario {
    position: relative;
    width: 70%;
  }

</style>