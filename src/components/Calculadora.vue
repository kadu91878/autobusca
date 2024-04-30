<template>
  <div class="container">
    <div class="left-side">
      <div class="title">
        <p>Clique no botão para calcular seu financiamento</p>
      </div>
      <div class="button">
        <n-button
          type="primary"
          size="large"
          style="margin-top: 10px"
          color="#f6bd17"
          text-color="#20284f"
        >
          <RouterLink class="link" to="/financiamento">Calcular</RouterLink>
        </n-button>
      </div>
    </div>
    <div class="right-side">
      <img src="/OEVLX40.jpg" alt="" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
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
  font-family: "Paytone one";
}

.link {
  text-decoration: none;
  color: #20284f;
}

.title{
    font-family: "Paytone one";
    font-size: 26px;
    color: #7994ac;
}
</style>
