<template>
  <div id="app">
    <HeaderComponent msg="Boolflix"/>
    <MainComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
}
}
</script>


<style lang="scss">
  
  @import './style/general.scss';


</style>
