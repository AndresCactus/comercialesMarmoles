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
      rows: [
        { name:"Carmen Villalobos", createdAt:'30/04/18', alert: "Número de visitas no realizado" },
      ],
    };
  },
};
</script> 