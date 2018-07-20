<template>
  <z-canvas style="background-color: #34495e!important;">
    <z-view-manager :list='$options.components' />
  </z-canvas>
</template>
<script>
import Home from '@/components/Home'
import Help from '@/components/Help'
import Tooling from '@/components/Tooling'

export default {
  components: {
    Home,
    Help,
    Tooling,

  },
  mounted () {
    this.$zircleStore.setView('Home')
  }
}
</script>

<style scoped>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
.z-content.label{
  border-radius: 0%;
  font-size: calc(12px + 1vmax);
  margin-top: calc(2vmax);
  pointer-events: none;
}
.main {
  background-color: #fff!important;
  color: #34495e!important;
}
.active {
  background-color: #fff!important;
  color: #42b983!important;
}
.inactive {
  background-color: #42b983!important;
  color: #fff!important;
}
</style>
