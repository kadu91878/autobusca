<script setup lang="ts">
//imports
import ImagemService from "@/application/ImagemService";
import { ref, onMounted } from "vue";

//refs
const listaPlacas = ref([]);
const listaImagens = ref([]);

//functions
async function getPlacas() {
  try {
    const data = await ImagemService.listarPlacas();
    listaPlacas.value = data;
    // console.log(listaPlacas.value);
  } catch (error) {
    console.error("Erro ao obter lista de placas:", error);
  }
}

async function getImages(placa: string) {
  try {
    const imagens = await ImagemService.carregarImagens(placa);
    listaImagens.value.push(imagens);
    // console.log("Imagens para placa", placa, ":", imagens);
  } catch (error) {
    console.error("Erro ao carregar imagens para placa", placa, ":", error);
  }
}

function printarImagens(){
    listaImagens.value.forEach(element => {
        console.log(element.imagens[0]);
    });

}

onMounted(async () => {
  await getPlacas();
  // Iterar sobre cada placa e obter imagens
  for (const placa of listaPlacas.value) {
    await getImages(placa);
  }
});
</script>
<template>
  Hello

  <n-button @click="printarImagens()"> </n-button>
  <n-carousel show-arrow>
    <img v-for="(img, index) in listaImagens"
      class="carousel-img"
      :src=img.imagens[0]
    >
   
  </n-carousel>
</template>

<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
