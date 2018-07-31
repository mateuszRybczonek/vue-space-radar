<template>
  <z-canvas class="radar">
    <z-view-manager :list='$options.components' />
  </z-canvas>
</template>
<script>
import Galaxy from '@/components/Galaxy'
import Core from '@/components/Core'
import Tools from '@/components/Tools'
import Libraries from '@/components/Libraries'

export default {
  components: {
    Galaxy,
    Core,
    Tools,
    Libraries
  },

  mounted () {
    this.$zircleStore.setView('Galaxy')

    setTimeout(() => {
      this.$store.commit('SET_LAUNCHED', false)
      this.$store.commit('SET_ACTIVATED', false)
      this.$store.commit('SET_DEACTIVATED', true)
      this.$store.commit('SET_FLOATING', true)
    }, 1000);
  }
}
</script>
