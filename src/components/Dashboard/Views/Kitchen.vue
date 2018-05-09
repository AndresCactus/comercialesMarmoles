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
      db.firestore().collection('visits').where('role','==','kitchen').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          let aux = doc.data();
          aux.createdAt = moment(String(aux.createdAt)).format('DD/MM/YY');
          this.rows.push(aux);
        })
      })
    }
  }

</script>