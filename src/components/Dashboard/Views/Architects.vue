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
      this.$http.get('http://www.mocky.io/v2/5ad9e84c2f00005e00cfe007')
      // ,{
      //   headers: {
      //     jwt: ''
      //   }
      // }
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