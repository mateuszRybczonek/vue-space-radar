<template>
  <z-panel :view="planetarySystem.viewName" class="star" color="transparent">
    <section slot="circles">
      <z-scale 
        v-for="(element, index) in planetarySystem.elements.inUse"
        :angle="(360 / planetarySystem.elements.inUse.length * index) - animatedChildAngle * 15"
        :distance="50"
        :key= "element.name"
        class="inactive planet planet--in-use"
        size="small"
        @mouseover.native="active"
        @touchstart.native="active"
        @mouseout.native="inactive"
        @touchend.native="inactive"
        @click.native.prevent="this.window.open(element.url, '_blank')"
      >
        <span slot="label" class="planet__label">
          {{element.name}}
        </span>
      </z-scale>
      <z-scale 
        v-for="(element, index) in planetarySystem.elements.bet"
        :angle="(360 / planetarySystem.elements.bet.length * index) - animatedChildAngle * 12"
        :distance="90"
        :key= "element.name"
        class="inactive planet planet--bet"
        size="small"
        @mouseover.native="active"
        @touchstart.native="active"
        @mouseout.native="inactive"
        @touchend.native="inactive"
        @click.native.prevent="this.window.open(element.url, '_blank')"
      >
        <span slot="label" class="planet__label">
          {{element.name}}
        </span>
      </z-scale>
      <z-scale 
        v-for="(element, index) in planetarySystem.elements.experiment"
        :angle="(360 / planetarySystem.elements.experiment.length * index) - animatedChildAngle * 10"
        :distance="140"
        :key= "element.name"
        class="inactive planet planet--experiment"
        size="small"
        @mouseover.native="active"
        @touchstart.native="active"
        @mouseout.native="inactive"
        @touchend.native="inactive"
        @click.native.prevent="this.window.open(element.url, '_blank')"
      >
        <span slot="label" class="planet__label">
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
  props: {
    planetarySystem: {
      type: Object,
      requireD: true
    }
  },
  data () {
    return {
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
  destroyed() {
    this.$store.commit('SET_CHILD_ANGLE', 365)
  },
}
</script>

 <style scoped lang="scss">
.star {
  width: 70px!important;
  height: 70px!important;
  margin: -50px 0px 0px -30px!important; 
	border-radius: 50%;	
	background-image: url("~/assets/sun.png");
  background-size: contain;
	box-shadow: 0px 0px 40px 15px $color-white;  
	opacity: 0.9;			
}


.planet {
  width: 30px!important;
  height: 30px!important;
  margin: -15px 0 0 -20px!important;
  transition: width .2s ease-in-out, height .2s ease-in-out, margin .2s ease-in-out;

  &--in-use {
    @include planet($color-blueish, "~/assets/earth.png")
  }

  &--bet {
    @include planet($color-redish, "~/assets/mars.png")
  }

  &--experiment {
    @include planet($color-greenish, "~/assets/jupiter.png")
  }

  &__label {
    top: 10px!important ;
    font-size: 16px;
  }

  &:hover {
    width: 40px!important;
    height: 40px!important;
    margin: -20px 0 0 -24px!important;
  }
}
</style>
