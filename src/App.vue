<template>
  <nav>
    <ul>
      <img alt="Logo" src="@/assets/logo.png" />
      <li><router-link to="/">Inici</router-link></li>
      <li><router-link to="/combat">Combat</router-link></li>
      <li>
        <label class="switch">
          <input type="checkbox" id="theme" @click="theme" />
          <span class="slider"></span>
        </label>
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<script>
export default {
  methods: {
    theme() {
      //clar
      if (document.querySelector("#theme").checked) {
        console.log("1");
        sessionStorage.setItem("theme", "clar");
        document.documentElement.setAttribute("tema", "dark");
      }
      //fosc
      else {
        console.log("2");
        sessionStorage.setItem("theme", "fosc");
        document.documentElement.setAttribute("tema", "light");
      }
    },
  },
};
</script>
<style>
nav a.router-link-exact-active {
  color: white;
}

nav li {
  display: inline-block;
}
nav ul {
  display: flex;
  margin: 0 -10px;
  align-items: center;
}
nav li a {
  color: rgb(150, 145, 145);
  font-weight: bolder;
  margin: 0 10px;
  text-decoration: none;
}
nav {
  background-color: rgb(68, 64, 64);
  padding: 30px 30px 30px 0px;
}
nav img {
  margin-right: auto;
  width: 200px;
}
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  --background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  transition: 0.5s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 10%;
  bottom: 15%;
  box-shadow: inset 8px -4px 0px 0px #fff000;
  background: var(--background);
  transition: 0.5s;
}

input:checked + .slider {
  background-color: black;
}

input:checked + .slider:before {
  transform: translateX(100%);
  box-shadow: inset 15px -4px 0px 15px #fff000;
}

@media only screen and (max-width: 600px) {
  nav img {
    display: none;
  }
  nav ul {
    justify-content: center;
  }
}
</style>
