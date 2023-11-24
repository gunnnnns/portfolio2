<template>
    <div id="technique">
      <div class="buttons"></div>
      <button
        v-for="(tech, idx) in techniques"
        :key="idx"
        @click="contentChange(idx)"
        class="tab-link"
        :class="{ active: idx === index }"
      >
        {{ tech.tab }}
      </button>
      <br /><br />
      <component :is="techniques[index].content"></component>
    </div>
  </template>
  
  <script>

  import techniques from './Data/technique';
  
  export default {
    data() {
      return {
        index: 0,
        techniques,
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
  