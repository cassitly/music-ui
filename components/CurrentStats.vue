<template>
  <div class="stats-box">
    <h3>Current Stats</h3>
    <!-- <p><b>Uptime:</b> {{ uptime }}%</p>
    <p><b>Lifetime:</b> {{ lifetime }}</p>
    <p><b>Version:</b> v{{ version }}</p> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// import useWebSocket from '@/composables/useWebSocket';

// const { data } = useWebSocket('ws://localhost:3001');

// const uptime = ref(0);
// const lifetime = ref('0 hrs');
// const version = ref('0.0.0');

// onMounted(() => {
//   data.value = (stats) => {
//     uptime.value = stats.uptime;
//     lifetime.value = stats.lifetime;
//     version.value = stats.version;
//   };
// });
</script>

<style scoped>
.stats-box {
  background: #222;
  padding: 10px;
  border-radius: 8px;
  color: white;
}
</style>
