import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
import Login from '../components/GeneralViews/Login.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'

import Architects from 'src/components/Dashboard/Views/Architects.vue'
import Decorators from 'src/components/Dashboard/Views/Decorators.vue'
import MarbleWorkers from 'src/components/Dashboard/Views/MarbleWorkers.vue'
import Kitchen from 'src/components/Dashboard/Views/Kitchen.vue'

const routes = [
  {
    path: '/',
    component: Login,
    redirect: '/login'
  },
  { 
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
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
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Alertas',
        component: Notifications
      }
    ]
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
