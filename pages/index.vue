<template>
  <section class="container">
    <div class="content">
      <div class="main-title">
        <span class="main-title__title">Explore uni</span>
        <span class="main-title__title-v">
          <img src="https://vuejs.org/images/logo.png" width="100px" height="100px" />
        </span>
        <span class="main-title__title">erse</span>
      </div>
      <div class="subtitle">
        <span>made with</span>
        <span class="subtitle__heart"><Heart/></span>
        <span>by</span>
        <span>
          <NetguruLogo class="subtitle__netguru-logo" />
        </span>
      </div>
      <nuxt-link
        class="start-link"
        to="/radar"
      >
        <ButtonRipple
          @mouseoverButton="activateAstronaut"
          @mouseoutButton="deactivateAstronaut"
          @clickButton="launchAstronaut"
        />
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ButtonRipple from '@/components/atoms/ButtonRipple.vue'
import Heart from '@/components/SVG/Heart.vue'
import NetguruLogo from '@/components/SVG/NetguruLogo.vue'

export default {
  components: {
    ButtonRipple,
    Heart,
    NetguruLogo,
  },

  data() {
    return {
      mouseoverButton: false,
      mouseoutButton: true,
      astronautLaunched: false,
    }
  },

  methods: {
    ...mapActions([
      'activateAstronaut',
      'deactivateAstronaut',
      'launchAstronaut'
    ])
  },
}
</script>


<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: $color-black;

  .content {
  display: flex;
  flex-direction: column;
  z-index: 1;

    .main-title {
      &__title {
        @include font(100px, 300, Roboto);
        color: $color-white;
        letter-spacing: 1px;
      }

      &__title-v {
        position: relative;
        top: 30px;
      }
    }

    .subtitle {
      color: $color-white;
      fill: $color-white;
      stroke: $color-white;

      &__netguru-logo {
        @include sizing(100px 20px);
        position: relative;
        top: 5px;
        left: 10px;
      }

      &__heart {
        margin: 0 7px;
        position: relative;
        top: 5px;
      }
    }

    .start-link {
      margin-top: 180px;
      padding-top: 15px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
