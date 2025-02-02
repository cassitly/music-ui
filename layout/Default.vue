<template>
    <div class="main-container">
      <!-- Header with Current Stats -->
      <header class="top-bar">
        <CurrentStats />
      </header>
  
      <!-- Main Content Sections -->
      <div class="content-grid">
        <!-- Left Column: Completed Renders -->
        <div class="left-column">
          <CompletedRenders />
        </div>
  
        <!-- Center Column: Render View -->
        <div class="center-column">
          <RenderView />
        </div>
  
        <!-- Right Column: Music Instances -->
        <div class="right-column">
          <MusicInstances />
        </div>
      </div>
  
      <!-- Bottom Section: Developer Terminal & Awaiting Approval -->
      <div class="bottom-section">
        <DeveloperTerminal />
        <AwaitingApproval />
      </div>
    </div>
  </template>
  
  <script setup>
  import CurrentStats from '../components/CurrentStats.vue';
  import RenderView from '../components/RenderView.vue';
  import CompletedRenders from '../components/CompletedRenders.vue';
  import MusicInstances from '../components/MusicInstances.vue';
  import AwaitingApproval from '../components/AwaitingApproval.vue';
  import DeveloperTerminal from '../components/DeveloperTerminal.vue';
  </script>
  
  <style scoped>
  .main-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 10px;
    background: #1a1a1a;
    color: white;
  }
  
  /* Top bar with Current Stats */
  .top-bar {
    background: #222;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  
  /* Content Grid Layout */
  .content-grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 10px;
    flex-grow: 1;
  }
  
  /* Left, Center, and Right Column Styles */
  .left-column, .center-column, .right-column {
    background: #222;
    padding: 10px;
    border-radius: 8px;
  }
  
  /* Bottom Section for Terminal and Approvals */
  .bottom-section {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
  
  .bottom-section > * {
    flex: 1;
    background: #222;
    padding: 10px;
    border-radius: 8px;
  }
  </style>
  