<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type IUser from "../Interfaces/IUser";
  import { searchRepos, searchUser } from "../TS/requisicoes";
  import mountUser from "../Utils/mountUser";
  import Button from "./Button.svelte";

  let inputValue = "";
  let statusError: null | number = null;
  const dispatch = createEventDispatcher<{
    aoChangeUser: IUser | null;
  }>();

  async function aoSubmit() {
    const responseUser = await searchUser(inputValue);
    const responseRepos = await searchRepos(inputValue);

    if (responseUser.ok && responseRepos.ok) {
      const dadosUser = await responseUser.json();
      const dadosRepos = await responseRepos.json();

      dispatch("aoChangeUser", mountUser(dadosUser, dadosRepos));
      statusError = null;
    } else {
      statusError = responseUser.status;
      dispatch('aoChangeUser', null)
    }
  }
</script>

<form on:submit|preventDefault={aoSubmit}>
  <input
    type="text"
    class="input"
    class:erro-input={statusError === 404}
    placeholder="Digite um usuário do GitHub"
    bind:value={inputValue}
  />

  {#if statusError === 404}
  <span class="erro">Usuário não encontrado!</span>
  {/if}

  <div class="botao-container">
   <Button>
    Buscar
    <img src="/Assets/search-line.svg" alt="Ícone de Busca">
   </Button>
  </div>
</form>

<style>
  .input {
    padding: 15px 25px;
    width: calc(100% - 8.75rem);
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #2e80fa;
    box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
    outline: 0;
  }

  .input::placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 300;
    font-size: 19.5px;
    line-height: 26px;
    color: #6e8cba;
  }

  .botao-container {
    position: absolute;
    width: 9.625rem;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
  }

  .erro {
    position: absolute;
    bottom: -25px;
    left: 0;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    z-index: -1;
    color: #ff003e;
  }

  .erro-input{
    border: 1px solid #FF003E;
  }
</style>
