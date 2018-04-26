<template>
  <div class="content">
    <div class="container-fluid">

      <table-data v-bind:rows="rows"></table-data>

    </div>
  </div>
</template>
 
<script>
  import TableData from './Tables/TableData.vue'

  export default {
    components: {
      TableData,
    },
    data(){
      return {
        rows: [],
      };
    },
    mounted() {
      this.$http.headers.common.Authorization = localStorage.token;
      this.$http.get('http://www.mocky.io/v2/5ae1abfe2d00004d009d7d9f')
        .then(response => {
          if(response.status === 200) {
            this.rows = response.data;
          }
        })
        .catch(error => {
          console.console(error)
        })
    },
  }

</script>