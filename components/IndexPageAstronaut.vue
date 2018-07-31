<template>
  <div 
    :class="[
      {
        'astronaut-container--active': mouseoverButton,
        'astronaut-container--deactivated': mouseoutButton,
        'astronaut-container--launched': astronautLaunched,
        'astronaut-container--floating': astronautFloating,
      },
      'astronaut-container'
    ]"
  >
    <Astronaut
      :active="mouseoverButton"
      :class="[
        { 'astronaut-container__astronaut--active': mouseoverButton },
        'astronaut-container__astronaut'
      ]"
    />
    <div
      :class="[
        { 'astronaut-container__exhaust-flame--active': mouseoverButton },
        'astronaut-container__exhaust-flame'
      ]"
    />
    <ul
      :class="[
        { 'astronaut-container__exhaust-fumes--active': mouseoverButton },
        'astronaut-container__exhaust-fumes'
      ]"
    >
      <li v-for="n in 10" :key="n"></li>
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
    astronautFloating: {
      type: Boolean,
      required: false,
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
    transition: all 3s;
    transform: translateY(-100px);
    transition-delay: 1.5s;
  }

  &--deactivated {
    transition: all 15s;
    transform: translateY(0);
  }

  &--launched {
    transition: all 3s ease-in-out;
    transform: translateY(300px);
  }

  &--floating {
    transition: all 20s ease-in-out;
    position: absolute;
    top: calc(100vh - 200px);
    left: calc(100% - 200px);
    margin-left: 0;
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
    @include sizing(28px 0);
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
    @include sizing(60px);
    background-color: $color-white;
    list-style: none;
    border-radius: 100%;

    &:first-child {
      @include sizing(70px);
      top: -20px;
      left: 52%;
      animation: fumes 5s infinite;
    }

    &:nth-child(2) {
      @include sizing(80px);
      left: 50%;
      top: -40px;
      animation: fumes 3.2s infinite;
    }

    &:nth-child(3) {
      @include sizing(60px);
      left: 42%;
      top: -60px;
      animation: fumes 3s 1s infinite;
    }

    &:nth-child(4) {
      @include sizing(90px);
      left: 42%;
      top: -30px;
      animation: fumes 4s 2s infinite;
    }

    &:nth-child(5) {
      @include sizing(100px);
      left: 50%;
      top: 0px;
      margin-top: -50px;
      margin-left: -50px;
      animation: fumes2 10s infinite;
    }

    &:nth-child(6) {
       @include sizing(50px);
      left: 52%;
      top: -10px;
    }

    &:nth-child(7) {
      @include sizing(50px);
      left: -5%;
      top: -30px;
    }

    &:nth-child(8) {
      @include sizing(90px);
      left: -5%;
      top: -30px;
      animation: fumes 3s 2s infinite;
    }

    &:nth-child(9) {
      @include sizing(90px);
      left: -6%;
      top: -50px;
      animation: fumes 4s 3s infinite;
    }

    &:nth-child(10) {
      @include sizing(90px);
      left: -8%;
      top: -20px;
      animation: fumes 4s 4s infinite;
    }
  }
}
</style>

