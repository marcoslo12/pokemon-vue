<template>
  <h1>Combat</h1>
  <div id="container">
    <Card
      v-for="card in pokemon"
      :key="card"
      :card="card"
      @resultado="resultado"
    />
  </div>
  <p>{{ this.resultat }}</p>
  <div class="buttons">
    <button id="reload" @click="reload">
      Un altre combat amb les mateixes cartes
    </button>
    <button id="reload2" onclick="location.reload();">
      Un altre combat amb cartes diferents
    </button>
  </div>
</template>

<script>
import PostsService from "@/services/Api.js";
import Card from "../components/CardCombatPokemons.vue";

export default {
  name: "CombatView",
  data() {
    return {
      pokemon: [],
      resultat: "",
    };
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
  methods: {
    resultado(resultat) {
      this.resultat = resultat;
      document.getElementById("reload").style.visibility = "visible";
      document.getElementById("reload2").style.visibility = "visible";
    },
    reload() {
      var element = document.getElementsByClassName("is-flipped");
      while (element.length > 0) {
        element[0].classList.remove("is-flipped");
      }
      document.getElementById("reload").style.visibility = "hidden";
      document.getElementById("reload2").style.visibility = "hidden";
      this.resultat = "";

      //eliminen la funcio onclick
      for (let i = 0; i < document.getElementsByClassName("card").length; i++) {
        document.getElementsByClassName("card")[i].style.pointerEvents = "auto";
      }
    },
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

#reload,
#reload2 {
  visibility: hidden;
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

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.buttons button {
  margin: 20px;
}

p {
  text-align: center;
  font-size: 22px;
}
</style>
