import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './Home.vue';
import Form from './Form.vue';
import Autre from './Autre.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: App,
    },
    {
        path: '/homeTest',
        name: 'App',
        component: Home
    },
    {
        path: '/form',
        name: 'Form',
        component: Form 
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: Autre
    }

    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;