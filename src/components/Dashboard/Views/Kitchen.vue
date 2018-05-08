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
      db.firestore().collection('kitchen').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          this.rows.push(doc.data());
        })
      })
    }
  }

</script>