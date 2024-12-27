<template>
    <div class="blocModale" v-if="reveleObjectifCV">

        <div class="overlay" @click="toggleModaleObjectifCV"></div>
        
        <div class="modale">
            <button @click="toggleModaleObjectifCV" class="buttonModale">x</button>
            <div class="text"> 
                <h1>Les objectifs</h1>
                <h2>Créer un CV. Ce projet ne contiendra qu’une seule page HTML, plusieurs images et un ou plusieurs 
                    fichiers CSS. </h2>

                <ul>
                    <li>Structurer les pages selon les recommandations du W3C pour le web et le web mobile</li>
                    <li>Coder les pages web statiques et adaptables, y compris pour le web mobile, avec un 
                        langage de balise et feuilles de style, en suivant les principes de qualité et dans un style 
                        défensif en veillant à rendre l’application la plus résiliente possible </li>
                    <li>Utiliser un outil de gestion de version de code source</li>
                    <li>Planifier et suivre les tâches de développement</li>
                    <li>Rechercher une réponse pertinente à une difficulté technique de rendu et d’accessibilité</li>
                    <li>Utiliser un outil collaboratif de partage de fichiers</li>
                </ul>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'ModaleObjectifCV',
        props: ['reveleObjectifCV', 'toggleModaleObjectifCV']
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
        width: 80%;
        height: 85%;

        display: flex;
        align-items: center;
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
    .text {
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        max-width: 800px;
        margin: 0 auto;
      }
      
      .text h1 {
        font-size: 2em;
        color: #333;
        margin-bottom: 20px;
      }
      
      .text h2 {
        font-size: 1.5em;
        color: #555;
        margin-bottom: 20px;
      }
      
      .text ul {
        list-style-type: disc;
        padding-left: 20px;
        margin-bottom: 20px;
      }
      
      .text li {
        margin-bottom: 10px;
        font-size: 1em;
        color: #666;
      }
</style>