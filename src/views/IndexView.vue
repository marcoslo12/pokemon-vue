<template>
  <h1>Pokedex</h1>
  <div class="search" id="divbusc">
    <input
      v-model="message"
      placeholder="Buscar pokemons"
      class="search__input"
      id="buscador"
      @input="buscar"
    />
    <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
      <g>
        <path
          d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
        ></path>
      </g>
    </svg>
  </div>
  <div id="container">
    <Card v-for="card in pokemon" :key="card" :card="card" />
  </div>
</template>

<script>
import PostsService from "@/services/Api.js";
import Card from "../components/CardPokemons.vue";
import "@/assets/global.css";

export default {
  name: "IndexView",
  data() {
    return {
      pokemon: [],
      message: "",
    };
  },
  methods: {
    buscar(event) {
      let container = document.getElementsByClassName("card");
      let input = event.target.value;

      for (let i = 0; i < this.pokemon.length; i++) {
        if (this.pokemon[i].name.startsWith(input)) {
          container[i].style.display = "block";
        } else {
          container[i].style.display = "none";
        }
      }
    },
  },
  created() {
    for (let i = 0; i < 10; i++) {
      let random = Math.floor(Math.random() * 905);
      PostsService.getPokemon(random)
        .then((response) => {
          this.pokemon.push(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  components: { Card },
};
</script>
<style scoped>
#container {
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.search {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.search__input {
  font-family: inherit;
  font-size: inherit;
  background-color: var(--color-fondo-search);
  border: none;
  color: var(--color-texto-search);
  padding: 0.7rem 1rem;
  border-radius: 30px;
  width: 12em;
  transition: all ease-in-out 0.5s;
  margin-right: -2rem;
  width: 350px;
}

.search__input:hover,
.search__input:focus {
  box-shadow: 0 0 1em #00000013;
}

.search__input:focus {
  outline: none;
  background-color: var(--color-fondo-search);
}

.search__input::-webkit-input-placeholder {
  font-weight: 100;
  color: var(--color-fondo-search);
}

.search__input:focus + .search__button {
  background-color: var(--color-fondo-search);
}

.search__icon {
  height: 1.3em;
  width: 1.3em;
  fill: #b4b4b4;
}

button {
  padding: 12px;
  background: var(--color-fondo);
  border-radius: 6px;
  color: var(--color-button);
  transition-duration: 0.4s;
  margin: 20px;
}

button:hover {
  background-color: var(--color-button);
  color: var(--color-fondo);
}
</style>
