<template>
    <div class="render-container">
      <h3>Render View</h3>
      <iframe :src="streamUrl" v-if="streamUrl"></iframe>
      <p v-else>Error: Unable to load stream.</p>
    </div>
  </template>
  
  <script setup>
  const streamUrl = ref('');
  
  const fetchOBSStream = async () => {
    try {
      const response = await fetch('/api/obs-render', {
        headers: { 'Authorization': 'Basic ' + btoa('admin:securepassword123') }
      });
      const data = await response.json();
      streamUrl.value = data.streamUrl;
    } catch (error) {
      console.error('OBS API Error:', error);
    }
  };
  
  onMounted(fetchOBSStream);
  </script>
  