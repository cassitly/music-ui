<template>
    <div class="music-container">
      <h3>Music Instances</h3>
      <ul>
        <li v-for="instance in musicInstances" :key="instance.id">
          <strong>{{ instance.name }}</strong> ({{ instance.status }})
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const musicInstances = ref([]);
  
  const { data } = useWebSocket('ws://localhost:3001/music');
  watch(data, (newData) => {
    if (newData) musicInstances.value = newData;
  });
  </script>
  
  <style scoped>
  .music-container {
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 8px;
  }
  </style>
  