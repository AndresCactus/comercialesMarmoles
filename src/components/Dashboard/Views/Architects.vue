<template>
  <div class="content">
    <div class="container-fluid">

      <table-data v-bind:rows="rows"></table-data>

    </div>
  </div>
</template>
 
<script>
  import TableData from './Tables/TableData.vue'
  import db from '../../firebaseInit'
  import moment from 'moment'

  export default {
    components: {
      TableData,
    },
    data(){
      return {
        rows: [],
      };
    },
    created () {
      db.firestore().collection('visits').where('role','==','architects').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          let aux = doc.data();
          console.log(aux);
          aux.createdAt = moment(String(aux.createdAt)).format('DD/MM/YY');
          this.rows.push(aux);
        })
      })
    }
    // mounted() {
    //   this.$http.headers.common.Authorization = localStorage.token;
    //   this.$http.get('http://www.mocky.io/v2/5ae2e5dc3100000e00083c16')
    //     .then(response => {
    //       if(response.status === 200) {
    //         this.rows = response.data;
    //       }
    //     })
    //     .catch(error => {
    //       console.console(error)
    //     })
    // },
  }

</script>