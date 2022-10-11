<template>
    <div>
        <a href="/#update" @click.prevent="show" >Update</a>

        <modal name="modalupdate">Update</modal>
    </div>
</template>
<script>


    export default{
      name: "ModalUp",
    methods:{
        show(){
            this.$modal.show('modalupdate');
        },
        hide(){
            this.$modal.hide('modalupdate');
        }
    }
}
</script>
