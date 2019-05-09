<template>
    <div>
        <h1>User page</h1>

         

        <br>
        <button class="btn btn-primary" @click="navigateHome">Go to home</button>

        <br>
        <router-view>

        </router-view>
    </div>

   
</template>
<script>
export default {
   
    methods:{
        navigateHome(){
            this.$router.push({name:'home'});
        }
    }
}
</script>

<style>

</style>


