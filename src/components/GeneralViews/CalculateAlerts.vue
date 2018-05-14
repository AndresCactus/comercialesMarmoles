<template>
  
</template>

<script>
  import db from '../firebaseInit'

export default {
    created() {

      // Variable date contiene dia actual
      var date = new Date();

      // Variable today y todayAux tiene la fecha actual formateada
      var today = new Date(date.getFullYear() + '-' + (date.getMonth()+1) + '-' + (date.getDate()));

      db.firestore().collection('visits').where('createdAt', '<', d).get()
        .then(snapshot => {
          console.log('Todas las visitas desde ayer ',snapshot);
        })
        .catch(err => {
        console.log('Error getting documents', err);
        });
    },
}

</script>

<style>

</style>

