<template>
    <body>
        <div class="sidebar">
            <div class="logo">
                <img src="../assets/LOGO1.png" alt="" class="lou-geh" />
            </div>

        </div>
    </body>
</template>
<script>
export default {
    name:'NavBAR'
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 260px;
    background: #11101d;
}
</style>