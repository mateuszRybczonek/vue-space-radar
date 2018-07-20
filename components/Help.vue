<template>
  <z-panel :view="ecosystem.viewName" class="main">
    <span>
      <strong>{{ ecosystem.name }}</strong>
    </span>
    <br>
    <span> Ecosystem </span>
    <section slot="circles">
      <z-scale 
        v-for="(element, index) in ecosystem.elements"
        :angle="(360 / ecosystem.elements.length * index) - animatedChildAngle * 11"
        :distance="130"
        :key= "index"
        class="inactive"
        size="medium"
        @mouseover.native="active"
        @touchstart.native="active"
        @mouseout.native="inactive"
        @touchend.native="inactive"
        @click.native.prevent="this.window.open(element.url, '_blank')"
      >
        <i class="fa" :class="element.icon"/>
        <span slot="label">
          {{element.name}}
        </span>
      </z-scale>
    </section>
  </z-panel>
</template>

<script>
import { TweenMax } from 'gsap'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      ecosystem: this.$store.getters.ecosystem[0],
      tweenedChildAngle: this.$store.getters.childAngle,
      childAnimation: '',
    }
  },
  computed: {
    ...mapGetters([
      'childAngle'
    ]),

    animatedChildAngle () {
      return this.tweenedChildAngle
    },
  },

  watch: {
    childAngle (newValue) {
      this.childAnimation = TweenMax.to(this.$data, 700, { tweenedChildAngle: newValue })
    }
  },

  methods: {
    active (event) {
      const target = event.target.parentElement
      if (target.classList.contains('inactive')) {
        target.classList.remove('inactive')
        target.classList.add('active')
        this.childAnimation.pause()

      }
    },

    inactive (event) {
      const target = event.target.parentElement
      if (target.classList.contains('active')) {
        target.classList.remove('active')
        target.classList.add('inactive')
        this.childAnimation.resume()
      }
    },
  },
  mounted() {
    this.$store.commit('SET_CHILD_ANGLE', 0)
  },
}
</script>
