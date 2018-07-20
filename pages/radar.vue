<template>
  <z-canvas style="background-color: #34495e!important;">
    <z-view-manager :list='$options.components' />
  </z-canvas>
</template>
<script>
import Home from '@/components/Home'
import Core from '@/components/Core'
import Tools from '@/components/Tools'
import Libraries from '@/components/Libraries'

export default {
  components: {
    Home,
    Core,
    Tools,
    Libraries
  },
  mounted () {
    this.$zircleStore.setView('Home')
  }
}
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
.z-content.label{
  border-radius: 0%;
  font-size: calc(12px + 1vmax);
  margin-top: calc(2vmax);
  pointer-events: none;
}
.main {
  background-color: #ffffff;
  color: #34495e;
}
.active {
  background-image: -webkit-gradient(radial, 50% 50%, 2, 50% 50%, 40, from(white), color-stop(0.1, rgba(248,255,128,.5)), to(transparent) );
  border: none;
  color: #42b983!important;
}
.inactive {
  background-image: -webkit-gradient(radial, 50% 50%, 2, 50% 50%, 40, from(white), color-stop(0.1, rgba(248,255,128,.5)), to(transparent) );
  border: none;
  color: #fff!important;
}
</style>
