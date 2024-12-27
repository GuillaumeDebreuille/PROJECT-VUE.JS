<template>
    <ModaleBigCHARGES :reveleBigCHARGES="reveleBigCHARGES" :toggleModaleBigCHARGES="toggleModaleBigCHARGES"/>
    <ModaleObjectifCHARGES :reveleObjectifCHARGES="reveleObjectifCHARGES" :toggleModaleObjectifCHARGES="toggleModaleObjectifCHARGES"/>

    <div class="blockModale" v-if="reveleCHARGES">

        <div class="overlay" @click="toggleModaleCHARGES"></div>
        <div class="modale">
            <div class="tittle">Créer un Cahier des charges </div>
            <button @click="toggleModaleObjectifCHARGES">L'objectif</button>
            <button @click="toggleModaleBigCHARGES"><img src="./assets/CV.png" alt=""></button>
            <a href="https://github.com/GuillaumeDebreuille/CV_Guillaume.git" target="_blank">Lien GitHub</a>
        </div>
    </div>
</template>


<script>
    import ModaleBigCHARGES from './ModaleCVitems/BigCHARGES.vue';
    import ModaleObjectifCHARGES from './ModaleCVitems/ObjectifCHARGES.vue';

    export default {
        name: 'ModaleCHARGES',
        props: ['reveleCHARGES', 'toggleModaleCHARGES'],
        data() {
            return {
                reveleBigCHARGES: false,
                reveleObjectifCHARGES: false,
            }
        },
        components: {
            ModaleBigCHARGES,
            ModaleObjectifCHARGES,
        },
        methods: {
            toggleModaleBigCHARGES: function() {
                this.reveleBigCHARGES = !this.reveleBigCHARGES
            },
            toggleModaleObjectifCHARGES: function() {
                this.reveleObjectifCHARGES = !this.reveleObjectifCHARGES
            },
        }
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

    z-index: 10;
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
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-top: 5%;
    align-items: center;
    justify-content: center;

    width: 40%;
    height: 60%;
    background-color: rgb(218, 144, 49);
    border-radius: 10%;
}
button {
    width: 100px;
    height: 100px;
    border: solid white;
    border-radius: 10px;
}
img {
    width: auto;
    height: 95px;
}
a {
    border: solid white;
    border-radius: 10px;
    color: white;
    width: 100px;
    height: 40px;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
}
button:hover, a:hover {
    cursor: pointer;
    opacity: 80%;
}
button:active, a:active {
    opacity: 60%;
}
.tittle {
    color: white;
    font-weight: bold;
    font-size: 30px;
}
</style>