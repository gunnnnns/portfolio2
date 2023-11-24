<template>
    <div id="vision">
      <div class="content">
        <component :is="visions[index].content"></component>
      </div>
    </div>
  </template>
  
  <script>
  import visions from './Data/vision';
  
  export default {
    data() {
      return {
        index: 0,
        visions,
      };
    },
  };
  </script>
  
  <style scoped>
    @import '../App.css';
</style>
  