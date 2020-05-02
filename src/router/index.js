import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import viewMovie from "../components/viewMovieDetails";
import trendingMovies from "../components/trendingMovies";
import popularShows from "../components/popularShows";

Vue.use(VueRouter);

export default [
  {
    path: "/popularShows",
    name: "popularShows",
    component: popularShows
  },
  {
    path: "/popular",
    name: "Home",
    component: Home
  },
  {
    path: '/',
    redirect: '/popular'
  },
  {
    path: "/viewMovie",
    name: "viewMovie",
    component: viewMovie,
    props: true
  },
  {
    path: "/trending",
    name: "trendingMovies",
    component: trendingMovies
  },
]


