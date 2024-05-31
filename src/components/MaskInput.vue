
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const formattedValue = ref<string>('');
  
  const addDash = (char: string) => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
            resolve(char + '-');
        
      }, 0);
    });
  };
  
  const removeLastDash = (value: string) => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        const newValue = value.slice(0, -2);
        resolve(newValue);
      }, 0);
    });
  };
  
  const handleKeyDown = async (event: KeyboardEvent) => {
    if (event.key === 'Backspace') {
      if (formattedValue.value.length > 0) {
        formattedValue.value = await removeLastDash(formattedValue.value);
      }
    } else if (event.key.length === 1 && event.key !== '-') {
      event.preventDefault();
      formattedValue.value += await addDash(event.key);
    }
  };
  </script>

<template>
    <div>
      <input v-model="formattedValue" @keydown="handleKeyDown" />
    </div>
  </template>
  
  <style scoped>
  input {
    padding: 0.5rem;
    font-size: 1rem;
  }
  </style>
  