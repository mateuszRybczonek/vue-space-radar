<template>
  <PlanetarySystem :planetarySystem=this.$store.getters.ecosystem[1] />
</template>

<script>
import PlanetarySystem from '@/components/PlanetarySystem'

export default {
  components: {
    PlanetarySystem
  },
}
</script>
