<template>
    <div class="stats-container">
      <h3>Current Stats</h3>
      <ul>
        <li><strong>Uptime:</strong> {{ stats.uptime }}%</li>
        <li><strong>Lifetime:</strong> {{ stats.lifetime }}</li>
        <li><strong>Version:</strong> {{ stats.version }}</li>
        <li><strong>Errors:</strong> {{ stats.errors }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const stats = ref({ uptime: 90, lifetime: '701:22:01 WS', version: 'v2.78.18-9', errors: 'None' });
  
  const { data } = useWebSocket('ws://localhost:3001/stats');
  watch(data, (newData) => {
    if (newData) stats.value = newData;
  });
  </script>
  
  <style scoped>
  .stats-container {
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 8px;
  }
  </style>
  