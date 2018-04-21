import Http from './pages/http.vue';
import Home from './pages/Home.vue';
import User from './pages/User/User.vue';
import UserStart from './pages/User/UserStart.vue';
import UserDetail from './pages/User/UserDetail.vue';
import UserEdit from './pages/User/UserEdit.vue';

export const routes = [
    { path: '/', component: Home},
    { path: '/http', component: Http},
    { path: '/user/', component: User, children: [
        {path: '', component: UserStart},
        {path: ':id', component: UserDetail},
        {path: ':id/edit', component: UserEdit}
    ]}
];
