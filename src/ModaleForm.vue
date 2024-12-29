<!-- Modale Formulaire // Merci pour votre message !  -->

<template>
    <div class="blocModale" v-if="revele">

        <div class="overlay" @click="toggleModale"></div>
        
        <div class="modale">
            <button @click="toggleModale" class="buttonModale">x</button>
            <h2>Merci pour votre message !</h2>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'ModaleForm',
        props: ['revele', 'toggleModale']
    }
</script>

<style scoped>
    .blocModale {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        justify-content: center;
        align-items: center; 
    }
    .overlay {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .modale {
        background-color: #f1f1f1;
        color: #333;
        padding: 50px;
        position: fixed;
        top: 30%;
        border-radius: 10px;
    }
    .buttonModale {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        background-color: rgb(192, 105, 105);
        color: #f1f1f1;
        border-radius: 5px;
        border: none;
    }
    .buttonModale:hover {
        cursor: pointer;
        background-color: rgb(211, 66, 66);
    } 
    .buttonModale:active {
        background-color: rgb(221, 5, 5);
    }
</style>
