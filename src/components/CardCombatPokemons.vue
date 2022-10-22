<template>
  <div
    class="card"
    v-bind:id="card.id"
    @click="
      flip(card.name, card.stats[1].base_stat, card.stats[2].base_stat, card.id)
    "
  >
    <div class="card__face card__face--front"></div>
    <div class="card__face card__face--back">
      <img :src="card.sprites.front_default" />
      <h2>{{ card.name }}</h2>
      <p><strong>Atac: </strong> {{ card.stats[1].base_stat }}</p>
      <p><strong>Defensa: </strong> {{ card.stats[2].base_stat }}</p>
    </div>
  </div>
</template>

<script>
import "@/assets/global.css";
export default {
  name: "CardCombatPokemon",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    flip(nom, atac, defensa, id) {
      //girem si hi ha menys de 2 cartes
      if (document.getElementsByClassName("is-flipped").length < 2) {
        document.getElementById(id).classList.toggle("is-flipped");
      }

      //si es la primera guardem l'atac
      if (document.getElementsByClassName("is-flipped").length == 1) {
        localStorage.setItem("atac", atac);
        localStorage.setItem("nom", nom);
      }

      if (document.getElementsByClassName("is-flipped").length == 2) {
        let atac1 = localStorage.getItem("atac");
        let nom1 = localStorage.getItem("nom");
        let resultat;
        //si es la segona fem el combat
        if (atac1 > defensa) {
          resultat = nom1 + " ataca i guanya contra " + nom;
        } else if (atac1 <= defensa) {
          resultat = nom1 + " ataca i perd contra " + nom;
        }
        sessionStorage.setItem("resultat", resultat);
        this.$emit("resultado", resultat);
        //eliminen la funcio onclick
        for (
          let i = 0;
          i < document.getElementsByClassName("card").length;
          i++
        ) {
          document.getElementsByClassName("card")[i].style.pointerEvents =
            "none";
        }
      }
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
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1s;
}
.card img {
  width: 120px;
}

.card:hover {
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2);
}

.card.is-flipped {
  transform: translateX(-100%) rotateY(-180deg);
}

.card__face {
  backface-visibility: hidden;
}

.card__face--back {
  transform: rotateY(180deg);
}
</style>
