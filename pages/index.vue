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

      <Astronaut
        :mouseoverButton='mouseoverButton'
        :mouseoutButton='mouseoutButton'
        :astronautLaunched='astronautLaunched'
      />

      <nuxt-link
        class="start-link"
        to="/radar"
      >
        <div class="start-link__circle-ripple">
          <svg
            :class="[
              {
                'start-link__circle-button--active': mouseoverButton
              },
              'start-link__circle-button'
            ]"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            @mouseover="mouseoverButtonAction"
            @mouseout="mouseoutButtonAction"
            @click="launchAstronaut"
          >
            <transition-group tag="g">
              <circle
                class="circle-button__core"
                key="core"
                cx="8"
                cy="8"
                r="8"
              />
            </transition-group>
            <text
              @click="launchAstronaut"
              class="circle-button__text"
              x="50%"
              y="50%"
            >
              Start your journey
            </text>
          </svg>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Astronaut from '@/components/IndexPageAstronaut.vue'
import Heart from '@/components/SVG/Heart.vue'
import NetguruLogo from '@/components/SVG/NetguruLogo.vue'

export default {
  components: {
    Astronaut,
    Heart,
    NetguruLogo,
  },

  data() {
    return {
      changed: false,
      mouseoverButton: false,
      mouseoutButton: true,
      astronautLaunched: false,
    }
  },

  computed: mapState(['page']),

  methods: {
    mouseoverButtonAction () {
      this.mouseoverButton = true
      this.mouseoutButton = false
    },
    mouseoutButtonAction () {
      this.mouseoverButton = false
      this.mouseoutButton = true
    },
    launchAstronaut () {
      this.astronautLaunched = true
    }
  }
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
        font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
        font-weight: 300;
        font-size: 100px;
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
        width: 100px;
        height: 20px;
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

      &__circle-ripple {
        background-color: $color-white;
        width: 1em;
        height: 1em;
        margin-top: 100px;
        border-radius: 50%;
        animation: ripple 1.5s linear infinite;
      }

      &__circle-button {
        fill: $color-white;
        stroke: $color-white;
        transform: translate3d(-100px, -100px, 0);

        .circle-button__core {
          transition: all 0.6s ease-in-out;
          transform: translate3d(100px, 100px, 0);
        }

        .circle-button__text {
          font-family: "Helvetica Neue";
          font-weight: lighter;
          letter-spacing: 2px;
          transition: all 0.6s ease-in-out;
          transform: translate3d(10px, 10px, 0);
          text-anchor: middle;
          stroke: transparent;
          font-size: 0;
        }

        &--active {
          fill: $color-white;
          stroke: $color-white;

          .circle-button__core {
            transform: translate3d(27px, 27px, 0) scale(10);
          }

          .circle-button__text {
            font-size: 16px;
            transform: translate3d(5px, 10px, 0);
            stroke: $color-black;
          }
        }
      }
    }
  }
}
</style>
