<template>
  <z-panel view="home" class="main" color="transparent">
    <span>
      <img src="https://vuejs.org/images/logo.png" width="50%" height="50%" />
    </span>
    <br>
    <span>
      <strong> Netguru - Vue.js </strong>
      </span>
    <br>
    <span> Space radar </span>
    <section slot="circles">
      <z-scale 
        v-for="(element, index) in ecosystem"
        :angle="(360 / ecosystem.length * index) + animatedEcosystemAngle * 5"
        :distance="135"
        :gotoview="element.viewName"
        :key="element.viewName"
        color="transparent"
        class="inactive"
        size="medium"
        @mouseover.native="active"
        @touchstart.native="active"
        @mouseout.native="inactive"
        @touchend.native="inactive"
      >
        <span slot="label">
          {{element.name}}
          </span>
        <section slot="circles">
          <z-scale 
            v-for="(subelement, index) in element.elements.inUse"
            :angle="(360 / element.elements.inUse.length * index) - animatedChildAngle * 30"
            :distance="10"
            :key="index"
            class="planet-in-use"
            size="xxs"
          />
        </section>
        <section slot="circles">
          <z-scale 
            v-for="(subelement, index) in element.elements.bet"
            :angle="(360 / element.elements.inUse.length * index) - animatedChildAngle * 20"
            :distance="20"
            :key="index"
            class="planet-bet"
            size="xxs"
          />
        </section>
        <section slot="circles">
          <z-scale 
            v-for="(subelement, index) in element.elements.experiment"
            :angle="(360 / element.elements.inUse.length * index) - animatedChildAngle * 10"
            :distance="27"
            :key="index"
            class="planet-experiment"
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

<style scoped lang="scss">
.main {
	box-shadow: 0px 0px 40px 15px $color-white;
}

.planet-in-use {
  background-image: url("~/assets/earth.png");
  background-size: contain;
  box-shadow: 0px 0px 40px 10px $color-blueish;
  border: none;
}

.planet-bet {
  background-image: url("~/assets/mars.png");
  background-size: contain;
  box-shadow: 0px 0px 40px 5px $color-redish;
  border: none;
}

.planet-experiment {
  background-image: url("~/assets/jupiter.png");
  background-size: contain;
  box-shadow: 0px 0px 40px 5px $color-greenish;
  border: none;
}
</style>
