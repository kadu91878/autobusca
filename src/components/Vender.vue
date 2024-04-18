<script setup lang="ts">
//imports
import { ref } from "vue";

//refs
const placa = ref("");
</script>

<template>
  <div class="_container">
    <div class="left-side">
      <div class="text">
        <div class="title">Quer vender seu carro?</div>
        <div class="subtitle">Faça uma avaliação</div>
    </div>
    <div class="busca">Placa do carro</div>
      <n-input
        v-model:value="placa"
        placeholder="ABC1234"
        type="text"
        size="large"
        clearable
        style="border-radius: 10px"
      >
      </n-input>
      <div class="button">
        <n-button type="primary" size="large" style="margin-top: 10px"
        color="#f6bd17"
        text-color="#20284f"
          >Avaliar meu carro</n-button
        >
      </div>
    </div>
    <div class="right-side">
      <img src="../../public/3286556.jpg" alt="" />
    </div>
  </div>
</template>

<style scoped>
._container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.left-side {
  width: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.right-side {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50%;
  }
}

.button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Paytone one';
}

.title {
  font-family: "Paytone one";
  color: #20284f;
  font-size: 48px;
}

.subtitle {
  font-family: "Paytone one";
  color: #7994ac;
  font-size: 30px;
}

.busca {
  font-family: "Encode Sans";
  color: #20284f;
  font-size: 20px;
  font-weight: 600;
}

.text{
    margin-bottom: 30px;
}
</style>
