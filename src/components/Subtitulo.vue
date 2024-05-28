<script lang="ts">
export default {
    props: {
        subtitle: {type: String, required: true}
    }
}
</script>

<template>
     <p class="paragrafo-lg instrucoes">
       {{ subtitle }}
    </p>
</template>

<style scoped>
.instrucoes {
  margin-bottom: 0.75rem;
}
</style>-