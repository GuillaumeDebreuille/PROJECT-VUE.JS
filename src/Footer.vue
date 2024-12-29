<template>
    <footer>
        <div class="logo">
            <h1>Guillaume</h1>
            <a href="https://www.instagram.com/guillaume_debreuille/" target="_blank" class="logoButton">
                <img src="./assets/instagram.png">
            </a>
            <a href="https://www.linkedin.com/in/guillaume-debreuille-7b5a73203/" target="_blank" class="logoButton">
                <img src="./assets/linkedinn.png">
            </a>
            <a href="https://www.youtube.com/watch?v=L2cbT3elGl8" target="_blank" class="logoButton">
                <img src="./assets/youtube.png">
            </a>
        </div>
        <div>
            <p>Dernière mise à jour le <time datetime="2024-12-29">29 décembre 2024</time></p>
        </div>
    </footer>
</template>


<script>
    export default {
        name : 'Footer'
    }
</script>


<style>
    footer {
        background-color: rgb(218, 144, 49);
        color: white;
        width: 100%;

        display: flex;
        flex-direction: column;
        text-align: center;

        padding-top: 10px;
        padding-bottom: 10px;
    }
    .logoButton {
        background-color: rgb(218, 144, 49);
        border: none;
    }
    .logoButton:hover {
        opacity: 55%;
        cursor: pointer;
    }
    .logoButton:active {
        opacity: 33%;
        
    }
    .logo {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 5px;
    }
    img {
        width: 35px;
        height: 35px;
    }
</style>