<template>
  <div>
    <GalaxyBackground />
    <Astronaut
      :mouseoverButton="this.$store.state.astronaut.activated"
      :mouseoutButton="this.$store.state.astronaut.deactivated"
      :astronautLaunched="this.$store.state.astronaut.launched"
      :astronautFloating="this.$store.state.astronaut.floating"
    />
    <nuxt/>
  </div>
</template>

<script>
import GalaxyBackground from '@/components/GalaxyBackground.vue'
import Astronaut from '@/components/IndexPageAstronaut.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    Astronaut,
    GalaxyBackground
  },

  watch: {
    '$route.path' () {
      switch (this.$route.path) {
        case '/': {
          this.resetAstronaut()
        }
      }
    }
  },

  methods: {
    ...mapActions([
      'resetAstronaut'
    ])
  },
}
</script>

<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
</style>
