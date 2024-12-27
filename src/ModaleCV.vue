<template>
    <ModaleBigCV :reveleBigCV="reveleBigCV" :toggleModaleBigCV="toggleModaleBigCV"/>
    <ModaleObjectifCV :reveleObjectifCV="reveleObjectifCV" :toggleModaleObjectifCV="toggleModaleObjectifCV"/>

    <div class="blockModale" v-if="reveleCV">

        <div class="overlay" @click="toggleModaleCV"></div>
        <div class="modale">
            <div class="tittle">Créer un CV</div>
            <button @click="toggleModaleObjectifCV">L'objectif</button>
            <button @click="toggleModaleBigCV"><img src="./assets/CV.png" alt="CV"></button>
            <a href="https://github.com/GuillaumeDebreuille/CV_Guillaume.git" target="_blank">Lien GitHub</a>
        </div>
    </div>
</template>


<script>
    import ModaleBigCV from './ModaleCVitems/BigCV.vue';
    import ModaleObjectifCV from './ModaleCVitems/objectifCV.vue';

    export default {
        name: 'ModaleCV',
        props: ['reveleCV', 'toggleModaleCV'],
        data() {
            return {
                reveleBigCV: false,
                reveleObjectifCV: false,
            }
        },
        components: {
            ModaleBigCV,
            ModaleObjectifCV,
        },
        methods: {
            toggleModaleBigCV: function() {
                this.reveleBigCV = !this.reveleBigCV
            },
            toggleModaleObjectifCV: function() {
                this.reveleObjectifCV = !this.reveleObjectifCV
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