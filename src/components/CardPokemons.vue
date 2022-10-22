<template>
  <div class="card">
    <img :src="card.sprites.front_default" />
    <h2>{{ card.name }}</h2>
    <p><strong>Atac: </strong> {{ card.stats[1].base_stat }}</p>
    <p><strong>Defensa: </strong> {{ card.stats[2].base_stat }}</p>
    <button>
      <router-link :to="{ name: 'MesInfo', params: { id: card.id } }">
        Més Informació
      </router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "CardPokemon",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 8px;
  margin: 30px;
  width: 200px;
  text-align: center;
  padding: 25px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-card);
}
.card img {
  width: 120px;
}

.card:hover {
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2);
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

a {
  color: var(--color-button);
  text-decoration: none;
  cursor: unset;
}

a:hover {
  color: var(--color-fondo);
}
</style>
