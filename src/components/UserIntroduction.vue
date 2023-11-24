<template>
    <div id="introduction">
      <div class="buttons"></div>
      <button
        v-for="(intro, idx) in intros"
        :key="idx"
        @click="contentChange(idx)"
        class="tab-link"
        :class="{ active: idx === index }"
      >
        {{ intro.tab }}
      </button>
      <br /><br />
      <component :is="intros[index].content"></component>
    </div>
  </template>
  
  <script>
  import intros from './Data/intros';
  
  export default {
    data() {
      return {
        index: 0,
        intros,
      };
    },
    methods: {
      contentChange(idx) {
        this.index = idx;
      },
    },
  };
  </script>
  
  <style>
    @import '../App.css';
</style>
  