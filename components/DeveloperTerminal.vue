<template>
    <div class="terminal-container">
      <h3>Developer Terminal</h3>
      <textarea v-model="command" placeholder="Enter command..."></textarea>
      <button @click="runCommand">Run</button>
      <pre>{{ output }}</pre>
    </div>
  </template>
  
  <script setup>
  import { io } from 'socket.io-client';
  const socket = io('ws://localhost:3001');
  
  const command = ref('');
  const output = ref('');
  
  socket.on('terminal-output', (data) => (output.value += '\n' + data));
  
  const runCommand = () => {
    socket.emit('new-command', command.value);
    command.value = '';
  };
  </script>
  