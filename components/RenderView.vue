<template>
  <div class="render-box">
    <h3>Render View</h3>
    <video v-if="streamAvailable" :src="streamUrl" autoplay controls></video>
    <p v-else>Unknown host - no stream available</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const streamUrl = ref('');
const streamAvailable = ref(false);

// const loadStream = async () => {
//   try {
//     const res = await fetch('http://localhost:3002/display/', { method: 'GET' });
//     if (!res.ok) throw new Error('Failed to fetch stream');
    
//     const data = await res.json(); // Ensure JSON parsing
//     streamUrl.value = data.url; // Corrected
//     streamAvailable.value = true;
//   } catch (error) {
//     console.error('Stream Error:', error);
//     streamAvailable.value = false;
//   }
// };

// // Load stream when component is mounted
// onMounted(loadStream);
</script>

<style scoped>
.render-box {
  background: #222;
  padding: 10px;
  border-radius: 8px;
  color: white;
}
</style>
