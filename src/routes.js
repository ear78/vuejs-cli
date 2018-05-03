import Counter from './pages/Counter/Counter.vue';
import Http from './pages/http.vue';
import Http2 from './pages/Http2/Http2.vue';
import Home from './pages/Home.vue';
import User from './pages/User/User.vue';
import UserStart from './pages/User/UserStart.vue';
import UserDetail from './pages/User/UserDetail.vue';
import UserEdit from './pages/User/UserEdit.vue';
import FourZeroFour from './components/404.vue';

export const routes = [
    { path: '/', component: Home},
    { path: '/http', component: Http},
    { path: '/user/', component: User, children: [
        {path: '', component: UserStart},
        {path: ':id', component: UserDetail},
        {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]},
    { path: '/counter', component: Counter },
    { path: '/http2', component: Http2 },
    { path: '/redirect-me', redirect: '/user'},
    { path: '/404', component: FourZeroFour },
    // * gives us the wildcard for any route we don't have
    { path: '*', redirect: '/404'}
];
