<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="_container">
    <div class="right-side">
      <div class="_img">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="_title">
        <h1>Autobusca</h1>
      </div>
    </div>
    <div class="left-side">
        <div class="links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/">Quero Comprar</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
          <RouterLink to="/register">Register</RouterLink>

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

.right-side{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin-left: 10vh;
}

.left-side{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 10vh;
    .links{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }
}
</style>
