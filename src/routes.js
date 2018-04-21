import Http from './http.vue';
import Home from './Home.vue';
import User from './User.vue';

export const routes = [
    { path: '/', component: Home},
    { path: '/http', component: Http},
    { path: '/user/:id', component: User}
];
