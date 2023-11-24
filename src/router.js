import { createRouter, createWebHistory } from 'vue-router';
import Introduction from './components/UserIntroduction.vue';
import Technique from './components/UserTechnique.vue';
import Certificate from './components/UserCertificate.vue';
import Vision from './components/UserVision.vue';
import Login from './components/UserLogin.vue';
import MainPage from './components/MainPage.vue';

const routes = [
  { path: '/introduction', component: Introduction },
  { path: '/technique', component: Technique },
  { path: '/certificate', component: Certificate },
  { path: '/vision', component: Vision },
  { path: '/login', component: Login },
  { path: '/', component: MainPage}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
