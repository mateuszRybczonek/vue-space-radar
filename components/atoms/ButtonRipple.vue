<template>
  <div class="button-ripple">
    <svg
      :class="[
        {
          'circle-button--active': mouseoverButton
        },
        'circle-button'
      ]"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200"
      @mouseover="mouseoverButtonAction"
      @mouseout="mouseoutButtonAction"
      @click="clickAction"
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
        @click="clickAction"
        class="circle-button__text"
        x="50%"
        y="50%"
      >
        Start your journey
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  data () {
    return { 
      mouseoverButton: false,
      mouseoutButton: true,
    }
  },
  methods: {
    mouseoverButtonAction () {
      this.mouseoverButton = true
      this.mouseoutButton = false
      this.$emit('mouseoverButton')
    },
    mouseoutButtonAction () {
      this.mouseoverButton = false
      this.mouseoutButton = true
      this.$emit('mouseoutButton')
    },
    clickAction () {
      this.$emit('clickButton')
    }
  }
}
</script>

<style lang="scss" scoped>
.button-ripple {
  background-color: $color-white;
  width: 1em;
  height: 1em;
  margin-top: 100px;
  border-radius: 50%;
  animation: ripple 1.5s linear infinite;
}

.circle-button {
  fill: $color-white;
  stroke: $color-white;
  transform: translate3d(-100px, -100px, 0);

  &__core {
    transition: all 0.6s ease-in-out;
    transform: translate3d(100px, 100px, 0);
  }

  &__text {
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
</style>
