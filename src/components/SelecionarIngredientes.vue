<script lang="ts">
import { obterCategorias } from '@/http/index'
import type ICategoria from '@/interfaces/ICategoria';
import CardCategoria from './CardCategoria.vue';
import BuscarReceitas from './BuscarReceitas.vue';
import Loading from  './Loading.vue'
import Titulo from  './Titulo.vue'
import Subtitulo from './Subtitulo.vue'

export default {
    data(){
        return {
            categorias: [] as ICategoria[],
            loading: true
        }
    },
    async created(){
        try {
            this.categorias = await obterCategorias();
        } catch (error) {
            console.error("Erro ao obter categorias:", error);
        } finally {
            this.loading = false;
        }
    },
    components: { CardCategoria, BuscarReceitas, Titulo, Subtitulo, Loading },
    emits: ['adicionarIngrediente', 'removerIngrediente', 'BuscarReceitas']
}
</script>

<template>
  <section class="selecionar-ingredientes">
    <Titulo :texto="'Ingredientes'"/>
    <Subtitulo :subtitle="'Selecione abaixo os ingredientes que você quer usar nesta receita:'"/>
    
    <ul class="categorias">
      <div v-if="loading">  
        <Loading/>
      </div>
    
      <li v-else v-for="categoria in categorias" :key="categoria.nome">
        <CardCategoria 
          :categoria="categoria"
          @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
          @remover-ingrediente="$emit('removerIngrediente', $event)"
        />  
      </li>
    </ul>
    
    <Subtitulo :subtitle="'*Atenção: consideramos que você tem em casa sal, pimenta e água.'"/>
    <BuscarReceitas :texto="'Buscar Receitas'" @click="$emit('BuscarReceitas')"/>
  </section>
</template>


<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}





.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}

</style>