<template>
    <div id="certificate">
      <div class="buttons">
        <button
          v-for="(certificate, idx) in certificates"
          :key="idx"
          @click="contentChange(idx)"
          class="tab-link"
        >
          {{ certificate.tab }}
        </button>
      </div>
      <br /><br />
      <component :is="certificates[index].content" />
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import certificates from "./Data/certificate";
  
  export default {
    name: "UserCertificate",
    setup() {
      const index = ref(0);
  
      const contentChange = (idx) => {
        index.value = idx;
      };
  
      return {
        certificates,
        index,
        contentChange,
      };
    },
  };
  </script>
  
  <style scoped>
  @import '../App.css';
  </style>
  