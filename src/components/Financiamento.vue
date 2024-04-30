<!-- <script setup lang="ts">
import { ref } from "vue";
import CalculadoraService from "@/application/CalculadoraService";

const valorPrestacao = ref(540); // Valor da prestação
const numeroMeses = ref(36); // Número de meses
const valorFinanciado = ref(null); // Valor financiado
const taxaJuros = ref(0.0176); // Taxa de juros mensal
// const resultado = CalculadoraService.calcularValorFinanciado(numeroMeses, taxaJuros, valorPrestacao, valorFinanciado);
const resultado = ref(null)

async function Calcular(valorPrestacao, numeroMeses, valorFinanciado, taxaJuros){
  try{
   const result = CalculadoraService.calcularValorFinanciado(numeroMeses, taxaJuros, valorPrestacao, valorFinanciado);
   resultado.value = result;
   console.log(resultado.value)

  }catch(error){
    console.log(error)
  }
}


</script>

<template>
  <h1>Financiamento</h1>

  <n-button @click="Calcular">
    clicar
  </n-button>
</template>
 -->


 <template>

  hello
 </template>