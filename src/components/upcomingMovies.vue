<style scoped>
.pagination {
    list-style-type: none;
    margin: auto;
    width: 60%;
    padding: 10px;
}

.pagination-item {
    display: inline-block;
}

.active {
    background-color: #4AAE9B;
    color: #ffffff;
}



/* * {
    -webkit-transition: 300ms;
    transition: 300ms;
} */

.intro {
    text-align: center;
}

ul {
    list-style-type: none;
}

h1,
h2,
h3,
h4,
h5,
p {
    font-weight: 400;
}

a {
    text-decoration: none;
    color: inherit;
}

a:hover {
    color: #6ABCEA;
}

.container-fluid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    max-width: 95%;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.movie-card {
    background: #ffffff;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 315px;
    margin: 2em;
    border-radius: 10px;
    display: inline-block;
}

.movie-header {
    padding: 0;
    margin: 0;
    height: 367px;
    width: 100%;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
     background-size: cover;
}



.header-icon-container {
    position: relative;
}

.header-icon {
    width: 100%;
    height: 367px;
    line-height: 367px;
    text-align: center;
    vertical-align: middle;
    margin: 0 auto;
    color: #ffffff;
    font-size: 54px;
    text-shadow: 0px 0px 20px #6abcea, 0px 5px 20px #6ABCEA;
    opacity: .85;
}

.header-icon:hover {
    background: rgba(0, 0, 0, 0.15);
    font-size: 74px;
    text-shadow: 0px 0px 20px #6abcea, 0px 5px 30px #6ABCEA;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    opacity: 1;
}

.movie-card:hover {
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
}

.movie-content {
    padding: 18px 18px 24px 18px;
    margin: 0;
}

.movie-content-header,
.movie-info {
    display: table;
    width: 100%;
}

.movie-title {
    font-size: 24px;
    margin: 0;
    display: table-cell;
}

.imax-logo {
    width: 50px;
    height: 15px;
    background: url("https://6a25bbd04bd33b8a843e-9626a8b6c7858057941524bfdad5f5b0.ssl.cf5.rackcdn.com/media_kit/3e27ede823afbf139c57f1c78a03c870.jpg") no-repeat;
    background-size: contain;
    display: table-cell;
    float: right;
    position: relative;
    margin-top: 5px;
}

.movie-info {
    margin-top: 1em;
}

.info-section {
    display: table-cell;
    text-transform: uppercase;
    text-align: center;
}

.info-section:first-of-type {
    text-align: left;
}

.info-section:last-of-type {
    text-align: right;
}

.info-section label {
    display: block;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: .5em;
    font-size: 9px;
}

.info-section span {
    font-weight: 700;
    font-size: 11px;
}

.nav-link{
    color:white !important
}

@media screen and (max-width: 500px) {
  .movie-card {
    width: 95%;
    max-width: 95%;
    margin: 1em;
    display: block;
  }

  .container-fluid {
    padding: 0;
    margin: 0;
  }
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
                <b-nav-form>
                    <b-form-input size="sm" v-model="search" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

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
            <!--movie-card-->
            <div class="row">
                <div v-for="(movie,i) in trendingMovies.results" :key="i" class="col-md-3 movie">
                    <div class="movie-card">
                        <div class="movie-header" v-bind:style="{ backgroundImage: 'url(' + 'http://image.tmdb.org/t/p/w185///' + movie.poster_path + ')' }">
                            <div class="header-icon-container">
                                <a href="#">
        					<i class="material-icons header-icon"></i>
        				</a>
                            </div>
                        </div>
                        <!--movie-header-->
                        <div class="movie-content">
                            <div class="movie-content-header">
                                <router-link :to="{ name: 'viewMovie', params: {movie: movie} }">
                                    <h3 class="movie-title">{{movie.original_title}}</h3>
                                </router-link>
                                <div class="imax-logo"></div>
                            </div>
                            <div class="movie-info">
                               <div class="info-section">
                                    <label>Release Date</label>
                                    <span>{{movie.release_date}}</span>
                                </div>
    
                                <div class="info-section">
                                    <label>Adult</label>
                                    <span>{{movie.adult}}</span>
                                </div>
    
                                <div class="info-section">
                                    <label>popularity</label>
                                    <span>{{movie.popularity}}</span>
                                </div>
    
                                <div class="info-section">
                                    <label>Language</label>
                                    <span>{{movie.original_language}}</span>
                                </div>
                                <!--seat-->
                            </div>
                        </div>
                        <!--movie-content-->
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
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['trendingMovies']),
    },
    methods: {
    },
    mounted() {
        this.$store.dispatch('getTrendingMovies');
    }
};
</script>
