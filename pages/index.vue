<template>
  <section class="container">
    <div class="content">
      <div class="main-title">
        <span class="title">Explore uni</span>
        <span class="title-v">
          <img src="https://vuejs.org/images/logo.png" width="100px" height="100px" />
        </span>
        <span class="title">erse</span>
      </div>
      <div class="made-by">
        <span>made with</span>
        <span class="made-by__heart"><Heart/></span>
        <span>by</span>
        <span>
          <NetguruLogo class="made-by__netguru-logo" />
        </span>
      </div>

      <div class="links">
        <nuxt-link
          to="/radar"
        >
          <div class="circle-ripple">
            <svg
              :class="[{ active: mouseoverButton }, 'circleButton' ]"
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 200 200"
              @mouseover="mouseoverButton = true"
              @mouseout="mouseoverButton = false"
            >
              <transition-group name="layout" tag="g">
                <circle
                  class="items circ"
                  key="circ"
                  id="profile"
                  cx="8"
                  cy="8"
                  r="8"
                >
                </circle>
              </transition-group>
              <text
                class="items text"
                x="50%"
                y="50%" 
                text-anchor="middle" 
                stroke="transparent"
                font-size="0"
                font-family="Helvetica Neue"
              >
                <tspan
                  font-weight="lighter"
                  letter-spacing="2px"
                >
                  Start your journey
                  </tspan>
              </text>
            </svg>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Heart from '@/components/SVG/Heart.vue'
import NetguruLogo from '@/components/SVG/NetguruLogo.vue'

export default {
  components: {
    Heart,
    NetguruLogo,
  },

  data() {
    return {
      changed: false,
      mouseoverButton: false,
    }
  },
  computed: mapState(['page'])
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
}

.title {
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 300;
  font-size: 100px;
  color: $color-white;
  letter-spacing: 1px;
}

.title-v {
  position: relative;
  top: 30px;
}

.content {
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.made-by {
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

.links {
  padding-top: 15px;
  display: flex;
  justify-content: center;
}

.circle-ripple {
  background-color: $color-white;
  width: 1em;
  height: 1em;
  margin-top: 100px;
  border-radius: 50%;
  animation: ripple 1.5s linear infinite;

  .items {
    transition: all 0.6s ease-in-out;
  }

  .circleButton {
    fill: $color-white;
    stroke: $color-white;
    transform: translate3d(-100px, -100px, 0);

    .circ {
      transform: translate3d(100px, 100px, 0);
    }

    .text {
      transform: translate3d(10px, 10px, 0);
    }
  }

  .active {
    fill: $color-white;
    stroke: $color-white;

    .circ {
      transform: translate3d(27px, 27px, 0) scale(10);
    }

    .text {
      font-size: 16px;
      transform: translate3d(5px, 10px, 0);
      stroke: $color-black;
    }
  }
}

@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba($color-green, 0.3),
      0 0 0 1em rgba($color-green, 0.3),
      0 0 0 3em rgba($color-green, 0.3),
      0 0 0 5em rgba($color-green, 0.3);
  }
  100% {
    box-shadow: 0 0 0 1em rgba($color-green, 0.3),
      0 0 0 3em rgba($color-green, 0.3),
      0 0 0 5em rgba($color-green, 0.3),
      0 0 0 8em rgba($color-green, 0);
  }
}
</style>
