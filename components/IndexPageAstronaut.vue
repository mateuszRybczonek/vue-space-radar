<template>
  <div 
    :class="[
      {
        'astronaut-container--active': mouseoverButton,
        'astronaut-container--deactivated': mouseoutButton,
        'astronaut-container--launched': astronautLaunched,
      },
      'astronaut-container'
    ]"
  >
    <Astronaut
      :active="mouseoverButton"
      :class="[
        {
          'astronaut-container__astronaut--active': mouseoverButton
        },
        'astronaut-container__astronaut'
      ]"
    />
    <div
      :class="[
        {
          'astronaut-container__exhaust-flame--active': mouseoverButton
        },
        'astronaut-container__exhaust-flame'
      ]"
    />
    <ul
      :class="[
        {
          'astronaut-container__exhaust-fumes--active': mouseoverButton
        },
        'astronaut-container__exhaust-fumes'
      ]"
    >
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
</template>

<script>
import Astronaut from '@/components/SVG/Astronaut.vue'

export default {
  components: {
    Astronaut,
  },

  props: {
    mouseoverButton: {
      type: Boolean,
      required: true,
    },
    mouseoutButton: {
      type: Boolean,
      required: true,
    },
    astronautLaunched: {
      type: Boolean,
      required: true,
    },
  },
}
</script>


<style lang="scss" scoped>
.astronaut-container {
  position: absolute;
  top: 45%;
  left: 50%;
  margin-left: -60px;
  animation: landAstronaut 3s;

  &--active {
    transition: all 1s;
    transform: translateY(-100px);
    transition-delay: 1.5s;
    transition-duration: 3s;
  }

  &--deactivated {
    transition: all 1s;
    transform: translateY(0);
    transition-duration: 15s;
  }

  &--launched {
    transition: all 1s ease-in-out;
    transform: translateY(-1000px);
    transition-duration: 2s;
  }

  &__astronaut {
    align-self: center;
    animation: float 15s ease-in-out infinite;

    &--active {
      animation: shake 0.1s linear infinite;
      animation-delay: 500ms;
      animation-fill-mode: forwards;
      transition: all 1s;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    }
  }

  &__exhaust-flame {
    position: relative;
    height: 0;
    width: 28px;
    background: linear-gradient(to bottom, transparent 10%, $color-white 100%);
    left: calc(50% - 14px);
    top: -20px;
    animation: exhaust 0.2s infinite;
    transition: all 1s;

    &--active {
      animation: activateExhaust 1s;
      animation-delay: 1.5s;
      animation-fill-mode: forwards;
    }
  }

  &__exhaust-fumes {
    position: relative;
    opacity: 0;

    &--active {
      animation: activateFumes 1s;
      animation-delay: 2s;
      animation-fill-mode: forwards;
    }
  }

  &__exhaust-fumes li {
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
}
</style>

