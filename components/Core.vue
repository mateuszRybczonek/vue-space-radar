<template>
  <PlanetarySystem :planetarySystem=this.$store.getters.ecosystem[0] />
</template>

<script>
import PlanetarySystem from '@/components/PlanetarySystem'

export default {
  components: {
    PlanetarySystem
  },
}
</script>
