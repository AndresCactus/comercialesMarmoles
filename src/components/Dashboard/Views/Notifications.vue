<template>
  <div class="content">
    <div class="container-fluid">
      <div>
        <vue-good-table
          :columns="columns"
          :rows="rows"
          :pagination-options="{
            enabled: true,
            perPage: 10,
            nextLabel: 'Siguiente',
            prevLabel: 'Anterior',
            rowsPerPageLabel: 'Lineas por pagina',
          }"
          styleClass="vgt-table striped bordered">
          <div slot="emptystate">
            No hay datos para la busqueda realizada.
          </div>
        </vue-good-table>
      </div>
    </div>
  </div>
</template>
 
<script>
import db from '../../firebaseInit'
import moment from 'moment'

export default {
  name: 'my-component',
  created() {
    db.firestore().collection('alerts').get().then((querySnapshot) => {
      this.loading = false
      querySnapshot.forEach((doc) => {
        let aux = doc.data();
        aux.date = moment(String(aux.date)).format('DD/MM/YY');
        this.rows.push(aux);
      })
    })
  },
  data(){
    return {
      columns: [
        {
          label: 'Comercial',
          field: 'name',
          thClass: 'text-center',
          tdClass: 'text-center',
          filterOptions: {
            enabled: true,
            placeholder: 'Buscar...',
          },
        },
        {
          label: 'Fecha',
          field: 'date',
          thClass: 'text-center',
          tdClass: 'text-center',
          filterOptions: {
            enabled: true,
            placeholder: 'Buscar...',
          },
        },
        {
          label: 'Alerta',
          field: 'alert',
          thClass: 'text-center',
          tdClass: 'text-center',
          filterOptions: {
            enabled: true,
            placeholder: 'Buscar...',
          }
        },
      ],
      rows: [],
    };
  },
};
</script> 