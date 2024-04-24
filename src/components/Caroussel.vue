<script setup lang="ts">
//imports
import ImagemService from "@/application/ImagemService";
import VeiculoDetailService from "@/application/VeiculoDetailService";
import { onMounted, ref, onBeforeMount } from "vue";
import type { VeiculoComLocalizacao } from "@/types/VeiculoLocalizacao";
import { TopSpeed20Regular, Location20Regular } from "@vicons/fluent";
import { DateRangeTwotone } from "@vicons/material";
import { ManualGearbox } from "@vicons/tabler";

//refs
const listaPlacas = ref([]);
const listaImagens = ref([]);
const listaPaginadaCarros = ref<VeiculoComLocalizacao[]>([]);

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

async function getListaPaginadaCarros() {
  try {
    const data = await VeiculoDetailService.listarDetalhesPaginado();
    listaPaginadaCarros.value = data;
  } catch (error) {
    console.error("Erro ao obter lista de carros:", error);
  }
}

async function printarDetalhes() {
  await getListaPaginadaCarros();
  console.log(listaPaginadaCarros.value);
}

onMounted(async () => {
  await getPlacas();
  await Promise.all(listaPlacas.value.map((placa) => getImages(placa)));
  await getListaPaginadaCarros();
  console.log(listaPaginadaCarros.value[0].ano_modelo);
});
</script>
<template>
  <div class="container">
    <div class="container-title">
      <p>Confira nossas ofertas</p>
    </div>
    <div class="container-cards">
      <div class="cards" v-for="(item, index) in listaPaginadaCarros">
        <router-link :to="{ name: 'Carro', params: { id: item.placa_carro } }" style="text-decoration: none">
        <n-card class="card">
          <template #cover class="cover">
            <div class="card-image">
              <img :src="listaImagens[index].imagens[0]" alt="" />
            </div>
          </template>
          <div class="details">
            <div class="top">
              <div class="title">
                <p>{{ item.nome_veiculo }}</p>
              </div>
              <div class="preco">
                <p>R$ {{ item.preco }}</p>
              </div>
            </div>
            <n-divider style="margin: 0" />
            <div class="bottom">
              <div class="info">
                <div class="left">
                  <div class="quilometragem">
                    <n-icon size="12px" :component="TopSpeed20Regular" />
                    <p>{{ item.quilometragem }} km</p>
                  </div>
                  <div class="ano-modelo">
                    <n-icon size="12px" :component="DateRangeTwotone" />
                    <p>{{ item.ano_modelo }}</p>
                  </div>
                </div>
                <div class="right">
                  <div class="localizacao">
                    <n-icon size="12px" :component="Location20Regular" />
                    <p>{{ item.cidade }} - {{ item.estado }}</p>
                  </div>
                  <div class="cambio">
                    <n-icon size="12px" :component="ManualGearbox" />
                    <p>{{ item.tipo_cambio }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </n-card>
      </router-link>
      </div>
    </div>
    <div class="button">
      <n-button
        type="primary"
        size="large"
        style="margin-top: 10px"
        text-color="#20284f"
        color="#f6bd17"
      >
        <RouterLink class="link" to="/ofertas">Ver mais</RouterLink>
      </n-button>
    </div>
  </div>
  <!-- <n-button @click="printarDetalhes()"> </n-button> -->
  <!-- <n-carousel show-arrow>
      <img
        v-for="(img, index) in listaImagens"
        class="carousel-img"
        :src="img.imagens[0]"
      />
    </n-carousel> -->
</template>

<style scoped>
.button {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
  margin-left: 5rem;
  font-family: "Paytone one";
}
.link {
  text-decoration: none;
  color: #20284f;
}
.cards {
  width: calc(
    60vh - 20px
  ); /* ajuste a largura do card para ser 25% da altura da tela (menos a margem) */
  max-width: 312px; /* tamanho máximo do card */
  margin: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0.25rem 0.25rem 1rem 0 #73738040;
}

.container-cards {
  max-width: 200vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.card-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%; /* altura da capa em relação à altura do card */
  overflow: hidden; /* garantir que a imagem não ultrapasse o container */
}
.card-image img {
  object-fit: cover;
  height: 30vh;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f122b;
  flex-direction: column;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.title {
  font-family: "Hind";
  font-size: 15px;
}

.preco {
  font-family: "Hind";
  font-weight: 900;
  font-size: 20px;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.quilometragem {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-size: 12px;
}
.ano-modelo {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  gap: 5px;
}

.cambio {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  gap: 5px;
}

.localizacao {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  gap: 5px;
}

.container-title {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: #f6bd17;
  font-family: "Hind";
  font-size: 65px;
  margin-left: 5rem;
  height: 100%;
}
</style>
