<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        vue-space-radar
      </h1>
      <h2 class="subtitle">
        App for visualizing Netguru How We Roll when it comes to Vue.js
      </h2>
      <div class="links">
        <nuxt-link class="button--grey" to="/radar">Space Radar</nuxt-link>
      </div>
    </div>
  </section>
</template>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
