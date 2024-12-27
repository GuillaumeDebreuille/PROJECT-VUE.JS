<template>
    <div class="blockModale" v-if="reveleCOM">

        <div class="overlay" @click="toggleModaleCOM"></div>
        <div class="modale">
            <button>COMMENTAIRE</button>
            <button>hi hi</button>
            <button><img src="./assets/CV.png" alt=""></button>
            <button>Le code</button>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'ModaleCOM',
        props: ['reveleCOM', 'toggleModaleCOM']
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
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-top: 5%;
    align-items: center;

    width: 300px;
    background-color: rgb(218, 144, 49);
    border-radius: 20%;
}
button {
    width: 100px;
    height: 100px;
}
img {
    width: auto;
    height: 100px;
}

</style>