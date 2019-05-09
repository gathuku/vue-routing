<template>
    <div>
        <p>Some User {{id}} Details</p>

        <router-link 
        :to="{name:'userEdit', params:{id:this.$route.params.id}}"
        tag="button" class="btn ttn-primary"> Edit User</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
        }
    },

    beforeRouteEnter(to,from,next){
               if(true){
                   next()
               }else{
                   next(false)
               }
    }
}
</script>

