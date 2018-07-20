<template>
  <z-panel :view="ecosystem.viewName" class="star">
    <span>
      <strong>{{ ecosystem.name }}</strong>
    </span>
    <br>
    <span> Ecosystem </span>
    <section slot="circles">
      <z-scale 
        v-for="(element, index) in ecosystem.elements.inUse"
        :angle="(360 / ecosystem.elements.inUse.length * index) - animatedChildAngle * 15"
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
        v-for="(element, index) in ecosystem.elements.bet"
        :angle="(360 / ecosystem.elements.bet.length * index) - animatedChildAngle * 12"
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
        v-for="(element, index) in ecosystem.elements.experiment"
        :angle="(360 / ecosystem.elements.experiment.length * index) - animatedChildAngle * 10"
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
	background: white;
	opacity: 0.9;			
	box-shadow: 0px 0px 40px 15px white;  
}

.z-contentbox.dashed {
  border: none!important;
}

.planet {
  width: 30px!important;
  height: 30px!important;
  margin: -15px 0 0 -20px!important;

  &--in-use {
    box-shadow: 0px 0px 40px 10px rgba(137, 207, 240, 0.5);
    background: rgba(137, 207, 240, 0.6);
    border: none;
  }

  &--bet {
    box-shadow: 0px 0px 40px 5px rgba(240, 83, 99, 0.7);
    background: rgba(237, 41, 57, 0.7);
    border: none;
  }

  &--experiment {
    box-shadow: 0px 0px 40px 5px rgba(116, 195, 101, 0.5);
    background: rgba(116, 195, 101, 0.5);
    border: none;
  }

  &__label {
    top: 10px!important ;
    font-size: 16px;
  }
}
</style>
