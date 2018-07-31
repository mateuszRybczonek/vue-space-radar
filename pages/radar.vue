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
import { mapActions } from 'vuex'

export default {
  components: {
    Galaxy,
    Core,
    Tools,
    Libraries
  },

  methods: {
    ...mapActions([
      'deactivateAndFloatAstronaut'
    ])
  },

  mounted () {
    this.$zircleStore.setView('Galaxy')

    setTimeout(() => {
      this.deactivateAndFloatAstronaut()
    }, 1000);
  },
}
</script>
