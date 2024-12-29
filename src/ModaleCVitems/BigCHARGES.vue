<!-- Modale CHARGES > Modale qui ouvre le cahier des CH en plus grand-->

<template>
    <div class="blocModale" v-if="reveleBigCHARGES">

        <div class="overlay" @click="toggleModaleBigCHARGES"></div>
        
        <div class="modale">
            <button @click="toggleModaleBigCHARGES" class="buttonModale">x</button>
            <img src="../assets/charges.png" alt="CV">
        </div>

    </div>
</template>


<script>
    export default {
        name: 'ModaleBigCHARGES',
        props: ['reveleBigCHARGES', 'toggleModaleBigCHARGES']
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

        z-index: 20;
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
        padding: 2%;
        
        position: fixed;
        top: 5%;
        border-radius: 10px;
        width: auto;
        height: 85%;

        display: flex;
        align-items: center;
    }
    img {
        width: auto;
        height: 90%;
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