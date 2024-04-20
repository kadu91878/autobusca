<template>
    <div id="imagem-container">
        <img v-for="(imagem, index) in imagens" :key="index" :src="imagem" alt="Imagem" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const imagens = ref<string[]>([]);
  
  onMounted(() => {
    fetchImagens();
  });
  
  async function fetchImagens() {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/carregar-imagens/ABC1234/');
      const data = await response.json();
      imagens.value = data.imagens;
    } catch (error) {
      console.error('Erro ao carregar imagens:', error);
    }
  }
  </script>
  
  <style scoped>
  /* Estilos opcionais aqui */
  </style>
  