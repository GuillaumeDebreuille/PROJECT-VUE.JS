<template>
    <div class="blockModale" v-if="revele">

        <div class="overlay" @click="toggleModale"></div>
        <div class="modale">Voici le CV que j'ai créé en respectant certains conditions 
            imposées par mon école : </div>
        <img src="./assets/CV.png" alt="CV">
    </div>
</template>


<script>
    export default {
        name: 'ModaleCV',
        props: ['revele', 'toggleModale']
    }
</script>


<style scoped>
.blockModale {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    text-align: center;
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
    position: fixed;
}
img {
    width: 40%;
    height: auto;
    position: fixed;
    top: 20px;
    
}
</style>