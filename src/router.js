import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './Components/Home.vue';
import Login from './Components/Login.vue';
import Profile from './Components/Profile.vue';

const routes = [
    {
        name : 'home',
        path : '/',
        component : Home
    },
    {
        name : 'profile',
        path : '/profile',
        component : Profile
    },
    {
        name : 'login',
        path : '/login',
        component : Login
    }
];

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

export default router