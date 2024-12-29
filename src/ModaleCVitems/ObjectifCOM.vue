<!-- Modale COM > Modale qui ouvre les objectifs du COM -->

<template>
    <div class="blocModale" v-if="reveleObjectifCOM">

        <div class="overlay" @click="toggleModaleObjectifCOM"></div>
        
        <div class="modale">
            <button @click="toggleModaleObjectifCOM" class="buttonModale">x</button>
            <div class="text"> 
                <h1>Les objectifs</h1>
                <h2>Un fichier HTML nous est déjà donné</h2>
                <h2>Lui apporter des modifications pour : </h2>

                <ul>
                    <li>Vérifier que tous les champs ne sont pas vides, si l'un est vide : afficher le message d'erreur déjà présent dans le HTML (caché par défaut)</li>
                    <li>Ajouter le contenu de ce formulaire dans un nouveau commentaire au sein de la liste déjà présente</li>
                    <li>Supprimer le contenu des champs du formulaire une fois le nouveau commentaire affiché dans la liste</li>
                </ul>

            </div>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'ModaleObjectifCOM',
        props: ['reveleObjectifCOM', 'toggleModaleObjectifCOM']
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