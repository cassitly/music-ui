<template>
    <div class="approval-container">
      <h3>Awaiting Approval</h3>
      <ul>
        <li v-for="(item, index) in approvals" :key="index">
          <span>{{ item.name }} - {{ item.timestamp }}</span>
          <button @click="viewApproval(item)">View</button>
          <button @click="deleteApproval(index)">Delete</button>
        </li>
      </ul>
      <p v-if="approvals.length === 0">No pending approvals.</p>
    </div>
  </template>
  
  <script setup>
  import { io } from 'socket.io-client';
  const socket = io('ws://localhost:3001');
  
  const approvals = ref([]);
  socket.on('approvals', (data) => (approvals.value = data));
  
  const deleteApproval = (index) => {
    socket.emit('delete-approval', index);
  };
  </script>
  