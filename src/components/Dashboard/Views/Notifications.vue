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
export default {
  name: 'my-component',
  mounted() {
  this.$http.headers.common.Authorization = localStorage.token;
  this.$http.get('http://www.mocky.io/v2/5ae6def92f00001000f05892')
    .then(response => {
      if(response.status === 200) {
        this.rows = response.data;
      }
    })
    .catch(error => {
      console.console(error)
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
          field: 'createdAt',
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