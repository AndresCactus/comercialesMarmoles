<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/architects">
        <i class="nc-icon nc-ruler-pencil"></i>
        <p>Arquitectos</p>
      </sidebar-link>
      <sidebar-link to="/admin/decorators">
        <i class="nc-icon nc-palette"></i>
        <p>Decoradores</p>
      </sidebar-link>
      <sidebar-link to="/admin/marble-workers">
        <i class="nc-icon nc-layers-3"></i>
        <p>Marmolistas</p>
      </sidebar-link>
      <sidebar-link to="/admin/kitchen">
        <i class="nc-icon nc-cart-simple"></i>
        <p>Tiendas de cocina</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>Usuarios</p>
      </sidebar-link>
      <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Alertas</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
