<template>
  <h1>Informació ampliada</h1>
  <div id="container">
    <div class="card">
      <div id="images">
        <img :src="pokemon.sprites.front_default" />
        <img :src="pokemon.sprites.back_default" />
      </div>
      <h2>{{ pokemon.name }}</h2>
      <p><strong>Atac: </strong> {{ pokemon.stats[1].base_stat }}</p>
      <p><strong>Defensa: </strong> {{ pokemon.stats[2].base_stat }}</p>
      <p v-for="item in pokemon.types" :key="item">
        <strong>Tipus: </strong>{{ item.type.name }}
      </p>
      <button @click="$router.go(-1)">Tornar enrere</button>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/Api.js";
import "@/assets/global.css";

export default {
  props: ["id"],
  name: "MesInfoView",
  data() {
    return {
      pokemon: [],
    };
  },
  created() {
    PostsService.getPokemon(this.id)
      .then((response) => {
        this.pokemon = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
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

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 8px;
  margin: 30px;
  text-align: center;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-card);
  width: 300px;
  height: 450px;
}
.card img {
  width: 120px;
}

.card:hover {
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2);
}

#images {
  display: flex;
}
#images img {
  margin: 0 20px;
}
</style>
