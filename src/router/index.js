import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import viewMovie from "../components/viewMovieDetails";

Vue.use(VueRouter);

export default [ 
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/viewMovie",
    name: "viewMovie",
    component: viewMovie,
    props:true
  },
]


