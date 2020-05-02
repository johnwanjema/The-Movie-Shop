<style scoped>
.nav-link{
    color:white !important
}
</style>
</style>

<template>
  <section>
    
    <router-view />
</section>
</template>
<script>
export default {
    data(){
        return{
            search:'',
            searching:true
        }
    },
    watch:{
        search() {
            this.searchMovie();
        }
    },
    methods:{
        searchMovie(){
            console.log('qwqw')
        }
    }
}
</script>