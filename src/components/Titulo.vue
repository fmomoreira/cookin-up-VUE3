<script lang="ts">
export default {
  props: {
    texto: { type: String, required: true }
  }
}
</script>

<template>
     <h1 class="cabecalho titulo-ingredientes">{{ texto }}</h1>
</template>

<style scoped>
.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}
</style>