<script setup lang="ts">
//imports
import { ref, onMounted } from "vue";
import type { VeiculoComLocalizacao } from "@/types/VeiculoLocalizacao";
import VeiculoDetailService from "@/application/VeiculoDetailService";
import { Calendar } from "@vicons/carbon";
import { Car } from "@vicons/ionicons5";
import { ManualGearbox, Gauge } from "@vicons/tabler";
import { FormatPaintFilled, LocalGasStationRound } from "@vicons/material";

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
        work in progress
      </div>
      <div class="container-info">
        <div class="info">
          <div class="ano">
            <n-icon class="icon" size="24px" :component="Calendar" />
            <div class="text">
              {{ item.ano_modelo }}
              <br>
              Ano
            </div>
          </div>
          <div class="categoria">
            <n-icon class="icon" size="24px" :component="Car" />
            <div class="text">
              {{ item.categoria }}
              <br>
              Categoria
            </div>
          </div>
          <div class="cambio">
            <n-icon class="icon" size="24px" :component="ManualGearbox" />
            <div class="text">
              {{ item.tipo_cambio }}
              <br>
              Cambio
            </div>
          </div>
          <div class="cor">
            <n-icon class="icon" size="24px" :component="FormatPaintFilled" />
            <div class="text">
              {{ item.cor }}
              <br>
              Cor
            </div>
          </div>
          <div class="quilometragem">
            <n-icon class="icon" size="24px" :component="Gauge" />
            <div class="text">
              {{ item.quilometragem }}
              <br>
              Quilometragem
            </div>
          </div>
          <div class="combustivel">
            <n-icon class="icon" size="24px" :component="LocalGasStationRound" />
            <div class="text">
              {{ item.tipo_combustivel }}
              <br>
              Combustível
            </div>
          </div>
          <div class="portas">
            <n-icon class="icon" size="24px" :component="Car" />
            <div class="text">
              {{ item.quantidade_portas }}
              <br>
              Portas
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.info {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
}

.info > * {
  flex: 1 1 calc(33.33% - 10px);
  margin-top: 10px;
  align-self: flex-start; /* Adiciona alinhamento vertical ao topo */
}

/* Se quiser limitar cada coluna a 3 itens, você pode usar nth-child */
.info > *:nth-child(3n) {
  flex: 1 1 calc(33.33% - 10px);
  margin-top: 10px;
  align-self: flex-start; /* Adiciona alinhamento vertical ao topo */
}


.ano, .categoria, .cambio, .cor, .quilometragem, .combustivel, .portas {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  justify-content: center;
}

.icon{
  border: 2px solid #000; /* Cor e largura da borda */
  border-radius: 25%; /* Raio do border-radius */
  padding: 5px; /* Espaçamento interno */
  background-color: #f6bd17;
}
</style>
