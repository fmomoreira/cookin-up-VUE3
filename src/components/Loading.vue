<template>
    <div class="loading-container">
      <div class="dots">
        <div class="dot" v-for="i in 3" :key="i"></div>
      </div>
      <div class="loading-text">Loading</div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Loading'
  }
  </script>
  
  <style scoped>
  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
  }
  
  .dots {
    display: flex;
    justify-content: space-between;
    width: 60px;
    margin-bottom: 10px;
  }
  
  .dot {
    width: 10px;
    height: 10px;
    background-color: blue;
    border-radius: 50%;
    animation: bounce 1.5s infinite;
  }
  
  .dot:nth-child(1) {
    animation-delay: 0s;
  }
  
  .dot:nth-child(2) {
    animation-delay: 0.3s;
  }
  
  .dot:nth-child(3) {
    animation-delay: 0.6s;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
      background-color: rgb(0, 47, 0);;
    }
    50% {
      transform: translateY(-20px);
      background-color: orangered;
    }
  }
  
  .loading-text {
    font-size: 16px;
    color: #333;
    animation: pulse 1s infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      color: rgb(0, 47, 0);
    }
    50% {
      transform: scale(1.2);
      color: orangered;
    }
  }
  </style>
  