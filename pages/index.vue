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

      <div :class="[{ active: mouseoverButton, deactivated: mouseoutButton }, 'astronaut-container']">
        <Astronaut
          :active="mouseoverButton"
          :class="[{ active: mouseoverButton }, 'astronaut']"
        />
        <div :class="[{ active: mouseoverButton }, 'exhaust-flame']"/>
        <ul :class="[{ active: mouseoverButton }, 'exhaust-fumes']">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
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
              @mouseover="mouseoverButtonAction"
              @mouseout="mouseoutButtonAction"
            >
              <transition-group name="layout" tag="g">
                <circle
                  class="items circ"
                  key="circ"
                  id="profile"
                  cx="8"
                  cy="8"
                  r="8"
                />
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
import Astronaut from '@/components/SVG/Astronaut.vue'
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
  margin-top: 180px;
  padding-top: 15px;
  display: flex;
  justify-content: center;
}

.astronaut-container {
  position: absolute;
  top: 45%;
  left: 50%;
  margin-left: -60px;
  animation: landAstronaut 3s;

  &.active {
    transition: all 1s;
    transform: translateY(-100px);
    transition-delay: 1.5s;
    transition-duration: 3s;
  }

  &.deactivated {
    transition: all 1s;
    transform: translateY(0);
    transition-duration: 15s;
  }
}

.astronaut {
  align-self: center;
  animation: float 15s ease-in-out infinite;

  &.active {
    animation: shake 0.1s linear infinite;
    animation-delay: 500ms;
    animation-fill-mode: forwards;
    transition: all 1s;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
}

.exhaust-flame {
  position: relative;
  height: 0;
  width: 28px;
  background: linear-gradient(to bottom, transparent 10%, $color-white 100%);
  left: calc(50% - 14px);
  top: -20px;
  animation: exhaust 0.2s infinite;
  transition: all 1s;

  &.active {
    animation: activateExhaust 1s;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
  }
}

.exhaust-fumes {
  position: relative;
  opacity: 0;

  &.active {
    animation: activateFumes 1s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }
}

.exhaust-fumes li {
  position: absolute;
  display: flex;
  width: 60px;
  height: 60px;
  background-color: $color-white;
  list-style: none;
  border-radius: 100%;

  &:first-child {
    width: 70px;
    height: 70px;
    top: -20px;
    left: 52%;
    animation: fumes 5s infinite;
  }

  &:nth-child(2) {
    width: 80px;
    height: 80px;
    left: 50%;
    top: -40px;
    animation: fumes 3.2s infinite;
  }

  &:nth-child(3) {
    width: 60px;
    height: 60px;
    left: 42%;
    top: -60px;
    animation: fumes 3s 1s infinite;
  }

  &:nth-child(4) {
    width: 90px;
    height: 90px;
    left: 42%;
    top: -30px;
    animation: fumes 4s 2s infinite;
  }

  &:nth-child(5) {
    width: 100px;
    height: 100px;
    left: 50%;
    top: 0px;
    margin-top: -50px;
    margin-left: -50px;
    animation: fumes2 10s infinite;
  }

  &:nth-child(6) {
    width: 50px;
    height: 50px;
    left: 52%;
    top: -10px;
  }

  &:nth-child(7) {
    width: 50px;
    height: 50px;
    left: -5%;
    top: -30px;
  }

  &:nth-child(8) {
    width: 90px;
    height: 90px;
    left: -5%;
    top: -30px;
    animation: fumes 3s 2s infinite;
  }

  &:nth-child(9) {
    width: 90px;
    height: 90px;
    left: -6%;
    top: -50px;
    animation: fumes 4s 3s infinite;
  }

  &:nth-child(10) {
    width: 90px;
    height: 90px;
    left: -8%;
    top: -20px;
    animation: fumes 4s 4s infinite;
  }
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

@keyframes smoke {
  0% { transform: scale(1) }
  50% { transform: scale(1.2) }
  100% { transform: scale(1) }
}

@keyframes shake {
  10%, 90% { transform: translate3d(0, -2px, 0) }
  20%, 80% { transform: translate3d(0, 2px, 0) }
  30%, 50%, 70% { transform: translate3d(0, -4px, 0) }
  40%, 60% { transform: translate3d(0, 4px, 0) }
}

@keyframes float {
  from { transform: rotateX(0) }
  33%  { transform: rotateZ(5deg) }
  65%  { transform: rotateZ(-5deg) }
  to   { transform: rotateX(0) }    
}

@keyframes exhaust {
  0% {
    background: linear-gradient(to bottom, transparent 10%, $color-white 100%);
  }
  50% {
    background: linear-gradient(to bottom, transparent 8%, $color-white 100%);
  }
  75% {
    background: linear-gradient(to bottom, transparent 12%, $color-white 100%);
  }
}

@keyframes activateExhaust {
  from {
    height: 0;
    opacity: 0;
    }
  to {
    height: 150px;
    opacity: 1;
  }
}

@keyframes fumes {
  50% {
    transform: scale(1.5);
    background-color: transparent;
  }
  51% {
    transform: scale(0.8);
  }
  100% {
    background-color: $color-white;
    transform: scale(1)
  }
}

@keyframes fumes2 {
  50% {
    transform: scale(1.1);
  }
}

@keyframes activateFumes {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    top: -50px;
  }
}
</style>
