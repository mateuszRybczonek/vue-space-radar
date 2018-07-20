<template>
  <z-panel view="home" class="main">
    <span>
      <img src="https://vuejs.org/images/logo.png" width="50%" height="50%" />
    </span>
    <br>
    <span>
      <strong> Vue.js </strong>
      </span>
    <br>
    <span> Ecosystem </span>
    <section slot="circles">
      <z-scale 
        v-for="(element, index) in ecosystem"
        :angle="(360 / ecosystem.length * index) + animatedEcosystemAngle * 5"
        :distance="135"
        :gotoview="element.viewName"
        :key="index"
        class="inactive"
        size="medium"
        @mouseover.native="active"
        @touchstart.native="active"
        @mouseout.native="inactive"
        @touchend.native="inactive"
      >
        <i
          class="fa"
          :class="element.icon"
        />
        <span slot="label">
          {{element.name}}
          </span>
        <section slot="circles">
          <z-scale 
            v-for="(subelement, index) in element.elements"
            :angle="(360 / element.elements.length * index) - animatedChildAngle * 11"
            :distance="32"
            :key="index"
            style="background-color: #42b983; border: none; "
            size="xxs"
          />
        </section>
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
      childAnimation: '',
      ecosystem: this.$store.getters.ecosystem,
      tweenedEcosystemAngle: this.$store.getters.ecosystemAngle,
      tweenedChildAngle: this.$store.getters.childAngle
    }
  },

  computed: {
    ...mapGetters([
      'ecosystemAngle',
      'childAngle',
      'ecosystemAnimation'
    ]),

    animatedEcosystemAngle () {
      return this.tweenedEcosystemAngle
    },

    animatedChildAngle () {
      return this.tweenedChildAngle
    },
  },

  watch: {
    ecosystemAngle (newValue) {
      this.$store.commit(
        'SET_ECOSYSTEM_ANIMATION',
        TweenMax.to(this.$data, 700, { tweenedEcosystemAngle: newValue })
      )
    },
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
        this.ecosystemAnimation.pause()
      }
    },

    inactive (event) {
      const target = event.target.parentElement
      if (target.classList.contains('active')) {
        target.classList.remove('active')
        target.classList.add('inactive')
        this.ecosystemAnimation.resume()
      }
    }
  },
  mounted() {
    this.$store.commit('SET_ECOSYSTEM_ANGLE', 365)
    this.$store.commit('SET_CHILD_ANGLE', 365)
  },
}
</script>
