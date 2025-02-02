<template>
  <div class="render-box">
    <h3>Render View</h3>
    <!-- <video v-if="streamAvailable" :src="streamUrl" autoplay controls></video>
    <p v-else>Unknown host - Error 3456</p> -->
  </div>
</template>

<script setup>
// import { ref } from 'vue';
// import axios from 'axios';

// const streamUrl = ref('');
// const streamAvailable = ref(false);

// const loadStream = async () => {
//   try {
//     const res = await axios.get('@/server/api/obs-render');
//     streamUrl.value = res.data.url;
//     streamAvailable.value = true;
//   } catch {
//     streamAvailable.value = false;
//   }
// };

// loadStream();
</script>

<style scoped>
.render-box {
  background: #222;
  padding: 10px;
  border-radius: 8px;
  color: white;
}
</style>
