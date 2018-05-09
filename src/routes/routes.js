import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
import Login from '../components/GeneralViews/Login.vue'
import CalculateAlerts from '../components/GeneralViews/CalculateAlerts.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'

import Architects from 'src/components/Dashboard/Views/Architects.vue'
import Decorators from 'src/components/Dashboard/Views/Decorators.vue'
import MarbleWorkers from 'src/components/Dashboard/Views/MarbleWorkers.vue'
import Kitchen from 'src/components/Dashboard/Views/Kitchen.vue'

import db from '../components/firebaseInit'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin'
  },
  {
    path: '/login',
    component: Login,
    beforeEnter: (to, from, next) => {

      db.auth().onAuthStateChanged(function(user) {

        if (user) {
          var docRef = db.firestore().collection("users").doc(user.email);

          docRef.get().then(function(doc) {
              if (doc.exists) {
                let role = doc.data().role;
                  if (role == 'admin'){
                    next('/admin/overview');
                  }
                  else{
                    next();
                  }
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No existe el documento");
              }
          }).catch(function(error) {
              console.log("Error getting document:", error);
          });
          // User is signed in.
        } else {
          // No user is signed in.
          next();
        }
      });
    }
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    beforeEnter: (to, from, next) => {
      db.auth().onAuthStateChanged(function(user) {
        if (user) {

          var docRef = db.firestore().collection("users").doc(user.email);

          docRef.get().then(function(doc) {
              if (doc.exists) {
                let role = doc.data().role;
                  if (role == 'admin'){
                    next();
                  }
                  else{
                    next('/login');
                  }
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No existe el documento");
              }
          }).catch(function(error) {
              console.log("Error getting document:", error);
          });

          // User is signed in.
          next();
        } else {
          // No user is signed in.
          next('/login');
        }
      });
        
    },
    children: [
      {
        path: 'overview',
        name: 'Dashboard',
        component: Overview
      },
      {
        path: 'architects',
        name: 'Arquitectos',
        component: Architects
      },
      {
        path: 'decorators',
        name: 'Decoradores',
        component: Decorators
      },
      {
        path: 'marble-workers',
        name: 'Marmolistas',
        component: MarbleWorkers
      },
      {
        path: 'kitchen',
        name: 'Tiendas de cocina',
        component: Kitchen
      },
      {
        path: 'user',
        name: 'Usuarios',
        component: UserProfile
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'notifications',
        name: 'Alertas',
        component: Notifications
      }
    ]
  },
  { 
    path:'/api/calculate-alerts',
    component: CalculateAlerts 
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
