import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import viewMovie from "../components/viewMovieDetails";
import trendingMovies from "../components/trendingMovies";

Vue.use(VueRouter);

export default [
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


