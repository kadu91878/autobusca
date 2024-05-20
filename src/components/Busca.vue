<script setup lang="ts">
// imports
import { ref } from "vue";

// refs
const ano = ref("");
const minPreco = ref<number | null>(null);
const maxPreco = ref<number | null>(null);
const maxQuilometragem = ref<number | null>(null);
const minQuilometragem = ref<number | null>(null);
const cambio = ref("");
const combustivel = ref("");

//functions
function limpar() {
    ano.value = "";
    minPreco.value = null;
    maxPreco.value = null;
    maxQuilometragem.value = null;
    minQuilometragem.value = null;
    cambio.value = "";
    combustivel.value = "";
    console.log(maxQuilometragem.value);
}
</script>

<template>
  <div
    class="filters"
    style="
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      box-shadow: 3px 10px 3px 0 rgba(0, 0, 0, .02);
      
    "
  >
    <div class="filter-item">
      <n-input
        v-model:value="ano"
        placeholder="Ano"
        type="text"
        size="medium"
        clearable
      />
    </div>
    <n-divider />
    <div class="filter-item">
      <n-input
        v-model:value="minPreco"
        placeholder="Preço Mínimo"
        type="text"
        size="medium"
        clearable
      />
    </div>
    <n-divider />
    <div class="filter-item">
      <n-input
        v-model:value="maxPreco"
        placeholder="Preço Máximo"
        type="text"
        size="medium"
        clearable
      />
    </div>
    <n-divider />
    <div class="filter-item">
      <n-input
        v-model:value="minQuilometragem"
        placeholder="Menor Quilometragem"
        type="text"
        size="medium"
        clearable
      />
    </div>
    <n-divider />
    <div class="filter-item">
      <n-input
        v-model:value="maxQuilometragem"
        placeholder="Máxima Quilometragem"
        type="text"
        size="medium"
        clearable
      />
    </div>
    <n-divider />
    <div class="filter-item">
      <n-input
        v-model:value="cambio"
        placeholder="Cambio"
        type="text"
        size="medium"
        clearable
      />
    </div>
    <n-divider />
    <div class="filter-item">
      <n-input
        v-model:value="combustivel"
        placeholder="Combustível"
        type="text"
        size="medium"
        clearable
      />
    </div>
    <n-divider />
    <n-button style="margin-bottom: 10px; width: 80%; background-color: #f6bd17 " @click="limpar()">
        Limpar
    </n-button>
  </div>
</template>

<style scoped>
.filter-item {
  width: 80%;
  margin-top: 10px;
}
</style>
