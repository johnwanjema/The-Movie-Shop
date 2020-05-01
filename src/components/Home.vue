<template>
    <section>
        <app-header></app-header>
        <div class="container-fluid">
            <!--movie-card-->
            <div class="row">
                <div v-for="(movie,i) in popularMovies.results" :key="i" class="col-md-3 movie">
                    <div class="card" style="width: 22rem;">
                        <img class="card-img-top" :src="'http://image.tmdb.org/t/p/w185//'+ movie.poster_path" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">{{movie.original_title}}</h5>
                            <p class="card-text">{{movie.overview.substring(1, 100)}} ...</p>
                             <div class="movie-info">
                                <div class="info-section">
                                    <label>Release Date</label>
                                    <span>{{movie.release_date}}</span>
                                </div>
                                <!--date,time-->
                                <div class="info-section">
                                    <label>Adult</label>
                                    <span>{{movie.adult}}</span>
                                </div>
                                <!--screen-->
                                <div class="info-section">
                                    <label>popularity</label>
                                    <span>{{movie.popularity}}</span>
                                </div>
                                <!--row-->
                                <div class="info-section">
                                    <label>Language</label>
                                    <span>{{movie.original_language}}</span>
                                </div>
                                <!--seat-->
                            </div>
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
import AppHeader from './appHeader'

export default {
    components: {
      'app-header': AppHeader,
    },
    name: "Home",
    computed: {
        ...mapGetters(['popularMovies'])
    },
    methods: {
        viewMovie(movie) {
            console.log(movie);
                this.$router.push({
                    name: "viewMovie",
                    params: { movie: movie, }
                })
        }
    },
    mounted() {
        this.$store.dispatch('getPopularMovies')
    }
};
</script>
