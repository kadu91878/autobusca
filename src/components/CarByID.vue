<script setup lang="ts">
//imports
import { ref, onMounted } from "vue";
import type { VeiculoComLocalizacao } from "@/types/VeiculoLocalizacao";
import VeiculoDetailService from "@/application/VeiculoDetailService";
import { Calendar } from "@vicons/carbon";
import { Car } from "@vicons/ionicons5";
import { ManualGearbox, Gauge } from "@vicons/tabler";
import {FormatPaintFilled, LocalGasStationRound} from "@vicons/material";

//refs
const veiculoDetail = ref<VeiculoComLocalizacao>();

//functions

async function getVeiculo(id: string) {
  try {
    const veiculo = await VeiculoDetailService.listarDetalhesById(id);
    veiculoDetail.value = veiculo;
    console.log(veiculoDetail.value);
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  console.log("aqui");
  try {
    const id: string = window.location.href.split("/").pop() || "";
    console.log(id);
    getVeiculo(id);
  } catch (error) {
    console.error("Erro ao carregar detalhes do produto:", error);
  }
});
</script>

<template>
  <div class="container">
    <div v-for="item in veiculoDetail">
      <div class="title">
        {{ item.nome_veiculo }}
      </div>
      <div class="imagens">
        <p>work in progress</p>
      </div>
      <div class="container-info">
        <div class="info">
          <div class="ano">
            <n-icon size="12px" :component="Calendar" />
            <div class="text">
              {{ item.ano_modelo }}
              <p>Ano</p>
            </div>
          </div>
          <div class="categoria">
            <n-icon size="12px" :component="Car" />
            <div class="text">
              {{ item.categoria }}
              <p>Categoria</p>
            </div>
            <div class="cambio">
              <n-icon size="12px" :component="ManualGearbox" />
              <div class="text">
                {{ item.tipo_cambio }}
                <p>Cambio</p>
              </div>
              <div class="cor">
                <n-icon size="12px" :component="FormatPaintFilled" />
                <div class="text">
                  {{ item.cor }}
                  <p>Cor</p>
                </div>
                <div class="quilometragem">
                  <n-icon size="12px" :component="Gauge" />
                  <div class="text">
                    {{ item.quilometragem }}
                    <p>Quilometragem</p>
                    </div>
                </div>
                <div class="combustivel">
                  <n-icon size="12px" :component="LocalGasStationRound" />
                  <div class="text">
                    {{ item.tipo_combustivel }}
                    <p>Combustível</p>
                  </div>
                </div>
                <div class="portas">
                  <n-icon size="12px" :component="Car" />
                  <div class="text">
                    {{ item.quantidade_portas }}
                    <p>Portas</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>