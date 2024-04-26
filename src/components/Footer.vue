<script setup lang="ts">
import { CurrencyDollar } from "@vicons/carbon";
</script>
<template>
  <div class="container">
    <div class="top">
      <p style="font-family: 'Paytone One'">
        Compre conosco com mais segurança e facilidade
      </p>
      <div
        class="button"
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 200px;
          padding: 5px;
        "
      >
        <n-button color="white" style="box-sizing: border-box">
          <RouterLink class="link" to="/teste">Quero Comprar </RouterLink>

          <n-icon
            size="18"
            color="#20284f"
            style="
              box-sizing: border-box;
              background-color: #f6bd17;
              border-radius: 50%;
              margin-left: 5px;
            "
          >
            <CurrencyDollar />
          </n-icon>
        </n-button>
      </div>
    </div>
    <div class="bottom">
      <div class="left-corner">
        <img src="../assets/logo.png" style="width: 100px; height: 100px" />
        <p style="font-family: 'Paytone One'">AutoBusca</p>
        <n-divider vertical />
        Ainda tem alguma dúvida?
        <n-button color="#f6bd17"> Fale Conosco </n-button>
      </div>

      <div class="right-corner">
        <div class="negociar">
          <p>Negocie com a gente</p>
          <RouterLink class="link" to="/">Quero Comprar</RouterLink>
        </div>

        <div class="links-rapidos">
          <p>Links rápidos</p>

          <RouterLink class="link" to="/about">Sobre nós</RouterLink>
          <RouterLink class="link" to="/contact">Fale Conosco</RouterLink>
          <RouterLink class="link" to="/login">Privacidade</RouterLink>
          <RouterLink class="link" to="/register">Login</RouterLink>
        </div>
      </div>

    </div>
    <div>
      <n-divider />
      <p>AutoBusca © 2024. Todos os direitos reservados.</p>
    </div>
  </div>
</template>

<style scoped>
.link {
  text-decoration: none;
  font-family: "Paytone One";
  font-size: 18px;
  color: black;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  background-color: #00aeef;
  font-size: 24px;
}

.bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100%;
}

.left-corner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 50%;
}

.right-corner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 20vh;
  margin-right: 10%;
}

.negociar{
  display: flex;
  flex-direction: column;
}
.links-rapidos{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
