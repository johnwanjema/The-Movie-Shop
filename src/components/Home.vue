<style scoped>
.container-fluid {
    padding-top: 10px;
}
.movie{
    padding-bottom: 10px;
}
img{
    height: 350px;
}
</style>

<template>
    <section>
        <div class="container-fluid">
            <div class="row">
                <div v-for="(movie,i) in popularMovies.results" :key="i" class="col-md-3 movie">
                    <div class="card" style="width: 22rem;">
                        <img class="card-img-top" :src="'http://image.tmdb.org/t/p/w185//'+ movie.poster_path" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">{{movie.original_title}}</h5>
                            <p class="card-text">{{movie.overview.substring(1, 100)}} ...</p>
                            <a style="color:white" @click="viewMovie(movie)" class="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'

export default {
    name: "Home",
    computed: {
        ...mapGetters(['popularMovies'])
    },
    methods:{
        viewMovie(movie){
            console.log(movie)
        }
    },
    mounted() {
        this.$store.dispatch('login')
    }
};
</script>
