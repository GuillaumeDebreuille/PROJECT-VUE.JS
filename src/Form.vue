<!-- FORMULAIRE DE CONTACT -->
<template>
    <modaleForm v-bind:revele="revele" v-bind:toggleModale="toggleModale"/>

    
    <div class="form">
        <h1>Formulaire de contact</h1>
        <form id="contactForm" action="/send-email" method="post" @submit.prevent="handleSubmit">

            <div class="nameAsubject">
                <label for="name">Nom/Prénom :</label>
                <input type="text" name="name" id="name" required><br>
        
                <label for="subject">Objet :</label>
                <input type="text" name="subject" id="subject" required>
            </div>

            <div class="message">
                <label for="message">Message :</label>
                <textarea type="text" name="message" id="message"></textarea><br>
            </div>

            <button type="submit">Envoyer</button>
        </form>   
    </div>
    
 
</template>


<script>
    import ModaleForm from './ModaleForm.vue';

    export default {
        name: 'Form',
        data() {
            return {
                revele : false
            }
        },
        components: {
            'modaleForm': ModaleForm
        },
        methods: {
        toggleModale() {
            this.revele = !this.revele;
        },
        handleSubmit() {
            this.toggleModale();
        },
    },
    };
</script>


<style scoped>
/* ----- FORMULAIRE DE CONTACT - DEBUT ----- */
    .form {
        border: solid 1px rgb(218, 144, 49);
        width: 50%;
        height: 400px;
        display: flex;
        flex-direction: column;

        margin-top: 50px;
        margin-bottom: 300px;
        margin-left: auto;
        margin-right: auto;
    }
    .nameAsubject, .message, .form button {
        font-size: 15px;
    }
    .nameAsubject {
        display: flex;
        flex-direction: column;
        width: 35%;
        margin: 20px;
    }
    .form h1 {
        background-color: rgb(218, 144, 49);
        color: white;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .message {
        display: flex;
        flex-direction: column;
        padding-left: 20px;
    }
    .form textarea {
        resize: none;
        overflow-y: auto;
        width: 90%;
        height: 100px;
    }
    .form button {
        margin-left: 20px;
        background-color: white;
        color: rgb(218, 144, 49);
        font-weight: bold;
        border: solid 2px;
        width: 35%;
        height: 50px;
        border-radius: 100px;
    }
    .form button:hover {
        background-color: rgb(218, 144, 49);
        color: white;
        cursor: pointer;
    }
    .form button:active {
        background-color: rgb(219, 174, 115);
    }
/* ----- FORMULAIRE DE CONTACT - FIN ----- */    
</style>