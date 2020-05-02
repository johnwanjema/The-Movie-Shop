<style scoped>
.container-fluid {
    padding-top: 10px;
}

.card-img-top {
    height: 500px;
    width: 500px;
}
.nav-link{
    color:white !important
}
</style>

<template>
    <section>
        <b-navbar toggleable="lg" fixed="top" type="dark" variant="dark">
            <b-navbar-brand href="/">The Movie Shop</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav style="color:white">
                    <b-nav-item to="/popular">Popular</b-nav-item>
                    <b-nav-item to="/trending">Trending</b-nav-item>
                    <b-nav-item to="/popularShows">Popular Shows</b-nav-item>
                </b-navbar-nav>
    
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <img class="card-img-top" :src="'http://image.tmdb.org/t/p/w185//'+ movie.poster_path" alt="Card image cap">
                    <!-- <img src="http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg" height="600px"> -->
                </div>
                <div class="col-md-6">
                    <h1>{{movieDetails.title}}</h1>
                    <h4>overview </h4>
                    <p>{{movieDetails.overview}}</p>
                    <p>Taggline : {{movieDetails.tagline}}</p>
                    <p>HomePage : {{movieDetails.homepage}}</p>
                    <p>popularity :{{movieDetails.popularity}}</p>
                    <p>Genres</p>
                    <p>Status :{{movieDetails.status}}</p>
                    <p>Release Date : {{movieDetails.release_date}}</p>
                    <p>Revenue : {{movieDetails.revenue}}</p>
                </div>
            </div>
        </div>
    </section>
</template>
// https://api.themoviedb.org/3/movie/419704?api_key=f16a94a392138ff37753fb6821113944&language=en-US

// https://api.themoviedb.org/3/movie/419704/reviews?api_key=f16a94a392138ff37753fb6821113944

<script>
export default {
    props: ['movie'],
    data() {
        return {
            movieDetails: ''
        }
    },
    methods: {
        getMoviewDetails() {
            axios
                .get('https://api.themoviedb.org/3/movie/' + this.movie.id + '?api_key=f16a94a392138ff37753fb6821113944&language=en-US')
                .then(({ data }) => {
                    // console.log(data)
                    this.movieDetails = data
                })
        }
    },
    mounted() {
        this.getMoviewDetails()
    }
}
</script>