/// <reference path="./typings.d.ts" />

import Vue from 'vue'
import VueRouter from 'vue-router'

import '@ionic/core/dist/ionic';

import { AppComponent } from './app'
import { HomeComponent } from './pages/home'
import { NotFoundComponent } from './pages/not-found'

Vue.use(VueRouter)

Vue.config.productionTip = false;

Vue.config.ignoredElements = [/^ion-/];

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: HomeComponent },
    { path: '*', name: 'not-found', component: NotFoundComponent }
  ]
})

const App = new Vue({
  router,
  template: '<AppComponent />',
  components: { AppComponent }
});

App.$mount('#app')

