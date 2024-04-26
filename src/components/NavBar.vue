<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import { IosSearch } from "@vicons/ionicons4";

//Refs
const busca = ref("");
</script>

<template>
  <div class="_container">
    <div class="right-side">
      <div class="_img">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="_title">
        <RouterLink class="link" to="/"><h1>AutoBusca</h1> </RouterLink>
      </div>
    </div>
    <div class="left-side">
      <div class="links">
        <RouterLink class="link" to="/">Quero Comprar</RouterLink>
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/about">About</RouterLink>
        <RouterLink class="link" to="/contact">Contact</RouterLink>
        <RouterLink class="link" to="/login">Login</RouterLink>
        <RouterLink class="link" to="/register">Register</RouterLink>
      </div>
      <div class="search-bar">
        <n-input
          class="input"
          v-model:value="busca"
          type="text"
          placeholder="Pesquise aqui..."
          round
        >
          <template #prefix>
            <n-icon size="20" :component="IosSearch" />
          </template>
        </n-input>
      </div>
    </div>
  </div>
</template>

<style scoped>
._container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f6bd17;
  img {
    width: 10vh;
  }
}

.right-side {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-left: 10vh;
}

.left-side {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10vh;
  gap: 20px;
  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
}

.link {
  text-decoration: none;
  font-family: "Paytone one";
  font-weight: 900;
  color: black;
  font-size: 15px;
}

.link:hover {
  color: #fff;
}

._title {
  font-family: "Paytone one";
}
</style>
