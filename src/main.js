import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import * as Core from './js/classes/_core.js'

Vue.config.productionTip = false
const firebaseConf = {
  apiKey: "AIzaSyDRh1SyEdY3T-U9ZT13m9169p6o4dxSNbs",
  authDomain: "intellegi-cea40.firebaseapp.com",
  databaseURL: "https://intellegi-cea40.firebaseio.com",
  projectId: "intellegi-cea40",
  storageBucket: "intellegi-cea40.appspot.com",
  messagingSenderId: "177155683566",
  appId: "1:177155683566:web:e0516ccfb0f69d8f"
}

firebase.initializeApp(firebaseConf);

new Vue({
  router,
  render: h => h(App),
  mounted() {
    // new Core();

  }
}).$mount('#app')
