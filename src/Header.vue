<template>
    <div>
    <header>
        <h1>Guillaume Debreuille</h1>
        <div class="buttons">
            <button @click="goToHome">Accueil</button>
            <button @click="goToForm">Formulaire de contact</button>
            <button @click="goToProject1">Projet 1</button>
            <button @click="goToProject2">Projet 2</button>
            <button @click="goToProject3">Projet 3</button>
        </div>
    </header>
    </div>
</template>



<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    function goToHome() {
        router.push({name:'App'}) 
    }
    function goToForm() {
        router.push('/form')
    }
    function goToProject1() {
        router.push('/project1')
    }
    function goToProject2() {
        router.push('/project2')
    }
    function goToProject3() {
        router.push('/project3')
    }
</script>



<style scoped>
    header {
        position: fixed;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
        
        background-color: rgb(218, 144, 49);
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    h1 {
        padding-bottom: 10px;
        color: white;
    }
    .buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
        
    }
    header button {
        background-color: rgb(218, 144, 49);
        color: white;

        border: solid 1px rgb(218, 144, 49);
        border-radius: 50px;
        padding-left: 12px;
        padding-right: 12px;
        padding-bottom: 5px;
        padding-top: 5px;
    }
    header button:hover {
        cursor: pointer;
        background-color: white;
        color: rgb(218, 144, 49);
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }
    header button:active {
        background-color: rgb(218, 144, 49);
        border-color: white;
        color: white;
        transition: 0s;
    }
</style>