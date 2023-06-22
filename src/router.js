import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import ProjectsList from './pages/ProjectsList.vue';
import AboutUs from './pages/AboutUs.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs
        }
    ]

});
export { router };