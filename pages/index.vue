<template>
  <section class="container">
    <div class="content">
      <h1 class="title">
        vue-space-radar
      </h1>
      <h2 class="subtitle">
        Explore Netguru / Vue.js universe
      </h2>
      <div class="links">
        <button class="button--space">
          <nuxt-link to="/radar">Start your journey</nuxt-link>
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: $color-black;
}

.title {
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $color-white;
  letter-spacing: 1px;
}

.content {
    z-index: 1;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: $color-white;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  display: flex;
  justify-content: center;
}

.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  text-transform: uppercase;
  
  &--space {
    height: 200px;
    width: 200px;;
    letter-spacing: 1px;
    border-radius: 50%;
    transition: all 0.6s ease-in-out;
    outline: none;
    box-shadow: 0 8px 16px 0 rgba(83, 99, 115, 0.32);
    background-color: $color-black;
    border: solid 1px $color-white;

    &:hover {
      background-color: $color-white;
      color: $color-black;
      cursor: pointer;
    }

    > a {
      padding: 20px;
      color: $color-white;
      text-decoration: none;
      font-size: 16px;

      &:hover {
      color: $color-black;
    }
    }
  }
}
</style>
