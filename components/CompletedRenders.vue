<template>
    <div class="completed-renders">
      <h3>Completed Renders</h3>
      <!-- <ul v-if="renders.length">
        <li v-for="render in renders" :key="render.id">
          <span class="name">{{ render.name }}</span>
          <span class="duration">{{ render.duration }}</span>
          <span class="timestamp">{{ render.timestamp }}</span>
        </li>
      </ul> -->
      <!-- <p v-else>No renders completed yet.</p> -->
    </div>
  </template>
  
  <script setup>
//   import { ref, onMounted } from 'vue';
//   import useWebSocket from '~/composables/useWebSocket';
  
//   // WebSocket setup
//   const { data } = useWebSocket('ws://localhost:3001');
  
//   // Renders list
//   const renders = ref([]);
  
//   onMounted(() => {
//     data.value = (update) => {
//       if (update.type === 'completed-renders') {
//         renders.value = update.renders;
//       }
//     };
//   });
  </script>
  
  <style scoped>
  .completed-renders {
    background: #222;
    padding: 10px;
    border-radius: 8px;
    color: white;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #333;
  }
  
  .name {
    flex: 2;
  }
  
  .duration {
    flex: 1;
    text-align: center;
  }
  
  .timestamp {
    flex: 1;
    text-align: right;
    font-size: 12px;
    color: #aaa;
  }
  </style>
  