<!-- PAGE D'ACCUEIL -->

<template>
    <ModaleCV :reveleCV="reveleCV" :toggleModaleCV="toggleModaleCV"/>
    <ModaleCHARGES :reveleCHARGES="reveleCHARGES" :toggleModaleCHARGES="toggleModaleCHARGES"/>
    <ModaleCOM :reveleCOM="reveleCOM" :toggleModaleCOM="toggleModaleCOM"/>

    <div class="text">
        <h2>Je m'appelle Guillaume Debreuille et je suis en formation pour devenir développeur web</h2>
        <div>Après avoir obtenu une licence « Responsable de développement commercial option assurance », je me suis vite rendu compte que ce type de métiers ne m’étaient pas destinées.</div>
        <div>Tout commence avec une formation gratuite d’un site tiers. Il proposait d’apprendre les bases de la création d’un site web en utilisant HTML et CSS. Après plusieurs semaines d’amusement, je me suis dit, « et pourquoi pas ? ». C’est donc comme ça que je me suis lancé dans cette aventure.</div>
        <div>Mon objectif est de passer 15h par semaines sur ma formation, en parallèle de mes 37h en CDI. J’espère pouvoir la terminer Juin-Juillet et ainsi commencer un nouveau chapitre de ma vie professionnelle.</div>
    </div>    
    
    <div class="projects">
        <h2>Mes projets :</h2>
        <div class="containers">

            <div class="container">
                <p>Créer un CV</p>
                <button @click="toggleModaleCV" class="modaleCV">
                    <img src="./assets/CV.png" alt="CV" title="CV">
                </button>
            </div>
            
            <div class="container">
                <p>Cahier des charges</p>
                <button @click="toggleModaleCHARGES" class="modaleCHARGES">
                    <img src="./assets/Socketterie.png" alt="Cahier des charges">
                </button>

            </div>

            <div class="container">
                <p>Dynamiser un espace commentaires </p>
                <button @click="toggleModaleCOM" class="modaleCOM">
                    <img src="./assets/COM.png" alt="Dynamiser un espace commentaire">
                </button>
            </div>
        </div>
    </div>
    <div class="spacer"></div>
    
    
</template>



<script>
    import ModaleCHARGES from './ModaleCHARGES.vue';
    import ModaleCOM from './ModaleCOM.vue';
    import ModaleCV from './ModaleCV.vue';

    export default {
        name: 'Home',
        data() {
            return {
                reveleCV: false,
                reveleCHARGES: false,
                reveleCOM: false,
            }
        },
        components: {
            ModaleCV,
            ModaleCHARGES,
            ModaleCOM,
        },


        methods: {
            toggleModaleCV: function() {
                this.reveleCV = !this.reveleCV
            },
            toggleModaleCHARGES: function() {
                this.reveleCHARGES = !this.reveleCHARGES       
            },
            toggleModaleCOM: function() {
                this.reveleCOM = !this.reveleCOM
            },
        }
    }
</script>



<style scoped>
    .containers {
        display: flex;
        padding: 5px;
    }
    .container {
        background-color: rgb(218, 144, 49);
        gap: 5px;
        width: 33%;
        height: 250px;
        padding: 5px;
        margin: 5px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        color: white;
        border-radius: 10px;
    }
    .spacer {
        height: 250px;
    }
    .text {
        background-color: rgb(201, 201, 201);
        width: 92%;
        margin: auto;
        margin-top: 10px;
        padding: 2%;
        border: solid black 1px;
        border-radius: 10px;
    }
    .text div {
        padding-top: 10px;
    }
    .projects {
        background-color: rgb(201, 201, 201);
        width: 92%;
        margin: auto;
        margin-top: 10px;
        padding: 2%;
        border: solid black 1px;
        border-radius: 10px;
        
        display: flex;
        flex-direction: column;
        text-align: center;
    }



    .modaleCV img {
        height: 200px;
        width: auto;
    }
    .modaleCV img:hover {
        cursor: pointer;
        opacity: 80%;
    }
    .modaleCV img:active {
        opacity: 60%;
    }
    .modaleCV {
        background-color: rgb(218, 144, 49);
        border: none;
    }



    .modaleCHARGES img {
        height: 120px;
        width: auto;
    }
    .modaleCHARGES img:hover {
        cursor: pointer;
        opacity: 80%;
    }
    .modaleCHARGES img:active {
        opacity: 60%;
    }
    .modaleCHARGES {
        background-color: rgb(218, 144, 49);
        border: none;
    }



    .modaleCOM img {
        height: 120px;
        width: auto;
    }
    .modaleCOM img:hover {
        cursor: pointer;
        opacity: 80%;
    }
    .modaleCOM img:active {
        opacity: 60%;
    }
    .modaleCOM {
        background-color: rgb(218, 144, 49);
        border: none;
    }

   
</style>

