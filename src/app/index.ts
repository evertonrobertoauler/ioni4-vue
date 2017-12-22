/// <reference path="./typings.d.ts" />

import Vue from 'vue'
import VueRouter from 'vue-router'

import '@ionic/core/dist/ionic';
import '@ionic/core/dist/types/components';

import { AppComponent } from './app'
import { HomeComponent } from './pages/home'
import { NotFoundComponent } from './pages/not-found'

Vue.use(VueRouter)

Vue.config.productionTip = false;

Vue.config.ignoredElements = [
  'ion-app',
  'ion-page',
  'ion-header',
  'ion-toolbar',
  'ion-title',
  'ion-button',
  'ion-alert-controller',
  'ion-content',
  'ion-list',
  'ion-list-header',
  'ion-item',
  'ion-label',
  'ion-input',
];

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

