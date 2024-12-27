<template>
  
    <div class="error">
        <div class="number">404</div>
        <div class="texte">NOT FOUND</div>
    </div>

    <div class="autreSpacer"></div>

</template>


<script>
export default {
    name: 'Modale404',
}
</script>


<style scoped>
.error {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
}
.number {
    font-size: 400%;
}
.texte {
    font-size: 200%;
}
.autreSpacer {
    height: 800px;
}
</style>