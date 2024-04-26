<script setup lang="ts">
//imports
import { ref, onMounted } from "vue";
import type { VeiculoComLocalizacao } from "@/types/VeiculoLocalizacao";
import VeiculoDetailService from "@/application/VeiculoDetailService";
import { Calendar } from "@vicons/carbon";
import { Car } from "@vicons/ionicons5";
import { ManualGearbox, Gauge } from "@vicons/tabler";
import { FormatPaintFilled, LocalGasStationRound } from "@vicons/material";
import ImageService from "@/application/ImagemService";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperType } from "swiper";

//refs
const veiculoDetail = ref<VeiculoComLocalizacao>();
const listaImagens = ref<string[]>([]);
const modules = [Navigation, Thumbs]; // Adicionado Thumbs à lista de módulos
const thumbsSwiper = ref<SwiperType>(); // Adicionado para o Swiper das miniaturas

const setThumbsSwiper = (swiper: SwiperType) => {
  thumbsSwiper.value = swiper;
};

//functions

async function getVeiculo(id: string) {
  try {
    const veiculo = await VeiculoDetailService.listarDetalhesById(id);
    veiculoDetail.value = veiculo[0];
  } catch (error) {
    console.error(error);
  }
}

async function getImages(placa: string) {
  try {
    const imagens = await ImageService.carregarImagens(placa);
    listaImagens.value = imagens.imagens;
    listaImagens.value.forEach((element) => {
      console.log(element);
    });
  } catch (error) {
    console.error("Erro ao carregar imagens:", error);
  }
}

onMounted(() => {
  console.log("aqui");
  try {
    const id: string = window.location.href.split("/").pop() || "";
    console.log(id);
    getVeiculo(id);
    getImages(id);
  } catch (error) {
    console.error("Erro ao carregar detalhes do produto:", error);
  }
});
</script>

<template>
  <div class="container">
    <div v-if="veiculoDetail">
      <div class="title">
        {{ veiculoDetail.nome_veiculo }}
      </div>
      <div class="imagens">
        <div v-if="listaImagens.length > 0">
          <swiper
            :navigation="true"
            :loop="true"
            :modules="modules"
            :spaceBetween="40"
            :thumbs="{ swiper: thumbsSwiper }"
            class="mySwiper"
            style="width: 100%; max-width: 90vh; height: 560px"
          >
            <swiper-slide
              v-for="imagem in listaImagens"
              :key="imagem"
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                width: 100%;
                max-width: 200vh;
              "
            >
              <img
                :src="imagem"
                style="
                  object-fit: contain;
                  width: 100%;
                  height: 100%;
                  max-width: 200vh;
                  aspect-ratio: auto;
                "
              />
            </swiper-slide>
          </swiper>
          <swiper
            @swiper="setThumbsSwiper"
            :loop="true"
            :spaceBetween="10"
            :slidesPerView="4"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper2"
            style="width: 100%; max-width: 90vh; height: 80px"
          >
            <swiper-slide v-for="imagem in listaImagens" :key="imagem">
              <img
                :src="imagem"
                style="width: 100%; height: 100%; object-fit: cover"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <n-divider />
      <div class="container-info">
        <div class="ano">
          <n-icon class="icon" size="24px" :component="Calendar" />
          <div class="text">
            {{ veiculoDetail.ano_modelo }}
            <br />
            Ano
          </div>
        </div>
        <div class="categoria">
          <n-icon class="icon" size="24px" :component="Car" />
          <div class="text">
            {{ veiculoDetail.categoria }}
            <br />
            Categoria
          </div>
        </div>
        <div class="cambio">
          <n-icon class="icon" size="24px" :component="ManualGearbox" />
          <div class="text">
            {{ veiculoDetail.tipo_cambio }}
            <br />
            Cambio
          </div>
        </div>
        <div class="cor">
          <n-icon class="icon" size="24px" :component="FormatPaintFilled" />
          <div class="text">
            {{ veiculoDetail.cor }}
            <br />
            Cor
          </div>
        </div>
        <div class="quilometragem">
          <n-icon class="icon" size="24px" :component="Gauge" />
          <div class="text">
            {{ veiculoDetail.quilometragem }}
            <br />
            Quilometragem
          </div>
        </div>
        <div class="combustivel">
          <n-icon class="icon" size="24px" :component="LocalGasStationRound" />
          <div class="text">
            {{ veiculoDetail.tipo_combustivel }}
            <br />
            Combustível
          </div>
        </div>
        <div class="portas">
          <n-icon class="icon" size="24px" :component="Car" />
          <div class="text">
            {{ veiculoDetail.quantidade_portas }}
            <br />
            Portas
          </div>
        </div>
      </div>
      <n-divider />
      <div class="endereco">
        <p
        style="font-size: 20px; font-weight: 600; margin-bottom: 10px"
        >Disponível em {{ veiculoDetail.cidade }}</p>
        <div class="disponibilidade">
          <h3>{{ veiculoDetail.cidade }}</h3>
          <p>{{ veiculoDetail.endereco }} - {{veiculoDetail.cidade}} - {{ veiculoDetail.estado}}</p>
          <n-divider />
          <h4>Horário de funcionamento</h4>
          <p>Dias úteis das 8h às 18h</p>
          <p>Fins de Semana e feriados das 8h às 14h</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 24px;
  position: relative;
}

.container > * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.container-info {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  column-gap: 64px;
  row-gap: 32px;
  width: 100%;

  flex-wrap: wrap;
}

.ano,
.categoria,
.cambio,
.cor,
.quilometragem,
.combustivel,
.portas {
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 150px;
  width: 100%;
}

.icon {
  border: 2px solid #000; /* Cor e largura da borda */
  border-radius: 25%; /* Raio do border-radius */
  padding: 5px; /* Espaçamento interno */
  background-color: #f6bd17;
}

.title {
  font-family: "Paytone one";
  color: #20284f;
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.disponibilidade{
  border: 1px solid #ced4da;
  box-sizing: border-box;
  padding: 24px;
  border-radius: 8px;
}
</style>
