<script lang="ts">
export default {
    props: {
        texto: { type: String, required: true },
    }
}
</script>

<template>
    <div claa="box_button">
        <button class="btn_buscar_receitas">{{ texto }}</button>
    </div>
</template>

<style scoped>
.box_button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.btn_buscar_receitas {
    min-width: 250px;
    background-color: orangered;
    color: white;
    font-weight: bolder;
    border-radius: 50px;
    height: 52px;
    padding: 12px;
}

.btn_buscar_receitas {
    -webkit-box-shadow: 13px 17px 13px 0px rgba(209, 209, 209, 1);
    -moz-box-shadow: 13px 17px 13px 0px rgba(209, 209, 209, 1);
    box-shadow: 13px 17px 13px 0px rgba(209, 209, 209, 1);
}

.btn_buscar_receitas{
    cursor: pointer;
}
</style>