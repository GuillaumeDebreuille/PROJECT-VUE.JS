<template>
  
        <div class="modale">
            <div class="number">404</div>
            <div class="texte">NOT FOUND</div>
        </div>

</template>


<script>
    export default {
        name: 'Modale404',
    }
</script>


<style scoped>
    .modale {
        background-color: #f1f1f1;
        padding: 50px;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .number {
        font-size: 400%;
    }
    .texte {
        font-size: 200%;
    }
</style>