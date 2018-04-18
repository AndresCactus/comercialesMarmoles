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

          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'catalogue'">
              <span v-if="props.row.catalogue == true">
                <input type="checkbox" disabled checked="true">
              </span>
              <span v-else>
                <input type="checkbox" disabled>
              </span>
            </span>
            <span v-else-if="props.column.field == 'granite'">
              <span v-if="props.row.granite == true">
                <input type="checkbox" disabled checked="true">
              </span>
              <span v-else>
                <input type="checkbox" disabled>
              </span>
            </span>
            <span v-else-if="props.column.field == 'compac'">
              <span v-if="props.row.compac == true">
                <input type="checkbox" disabled checked="true">
              </span>
              <span v-else>
                <input type="checkbox" disabled>
              </span>
            </span>
            <span v-else-if="props.column.field == 'expositor'">
              <span v-if="props.row.expositor == true">
                <input type="checkbox" disabled checked="true">
              </span>
              <span v-else>
                <input type="checkbox" disabled>
              </span>
            </span>
            <span v-else-if="props.column.field == 'piece'">
              <span v-if="props.row.piece == true">
                <input type="checkbox" disabled checked="true">
              </span>
              <span v-else>
                <input type="checkbox" disabled>
              </span>
            </span>
            <span v-else-if="props.column.field == 'position'">
              <button type="button" class="nc-icon nc-square-pin" data-toggle="modal" data-target="#mapModal">
              </button>

              <!-- Modal Map-->
              <div class="modal fade" id="mapModal">
                <div class="modal-dialog">
                  <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                      <h4 class="modal-title">Posicion de la visita</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                      {{props.row.location}}
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                    </div>

                  </div>
                </div>
              </div>

            </span>
            <span v-else-if="props.column.field == 'notes'">
              <button type="button" class="nc-icon nc-paper-2" data-toggle="modal" data-target="#textModal">
              </button>

              <!-- Text Modal -->
              <div class="modal fade" id="textModal">
                <div class="modal-dialog">
                  <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                      <h4 class="modal-title">Notas</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                      {{props.row.notes}}
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                    </div>

                  </div>
                </div>
              </div>

            </span>
            <span v-else>
              {{props.formattedRow[props.column.field]}}
            </span>
          </template>

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
          filterOptions: {
            enabled: true,
            placeholder: 'Buscar...',
          },
        },
        {
          label: 'Cliente',
          field: 'client',
          thClass: 'text-center',
          filterOptions: {
            enabled: true,
            placeholder: 'Buscar...',
          },
        },
        {
          label: 'Dirección',
          field: 'direction',
          thClass: 'text-center',
          filterOptions: {
            enabled: true,
            placeholder: 'Buscar...',
          },
        },
        {
          label: 'Población',
          field: 'city',
          thClass: 'text-center',
          filterOptions: {
            enabled: true,
            placeholder: 'Buscar...',
          },
        },
        {
          label: 'Teléfono',
          field: 'phone',
          thClass: 'text-center',
          filterOptions: {
            enabled: true,
            placeholder: 'Buscar...',
          },
        },
        {
          label: 'Mail',
          field: 'mail',
          type: 'mail',
          thClass: 'text-center',
          filterOptions: {
            enabled: true,
            placeholder: 'Buscar...',
          },
        },
        {
          label: 'Contacto',
          field: 'contact',
          thClass: 'text-center',
          filterOptions: {
            enabled: true,
            placeholder: 'Buscar...',
          },
        },
        {
          label: 'Fecha',
          field: 'createdAt',
          thClass: 'text-center',
          filterOptions: {
            enabled: true,
            placeholder: 'Buscar...',
          },
        },
        {
          label: 'Catálogo',
          field: 'catalogue',
          thClass: 'text-center',
          tdClass: 'text-center',
          filterOptions: {
            enabled: true,
            placeholder: 'Todos',
            filterDropdownItems: [
              { value: 'true', text: 'Entregado' },  
              { value: 'false', text: 'No entregado' }
            ]
          },
        },
        {
          label: 'Granito',
          field: 'granite',
          thClass: 'text-center',
          tdClass: 'text-center',
          filterOptions: {
            enabled: true,
            placeholder: 'Todos',
            filterDropdownItems: [
              { value: 'true', text: 'Entregado' },  
              { value: 'false', text: 'No entregado' }
            ]
          },
        },
        {
          label: 'Compac',
          field: 'compac',
          thClass: 'text-center',
          tdClass: 'text-center',
          filterOptions: {
            enabled: true,
            placeholder: 'Todos',
            filterDropdownItems: [
              { value: 'true', text: 'Entregado' },  
              { value: 'false', text: 'No entregado' }
            ]
          },
        },
        {
          label: 'Expositor',
          field: 'expositor',
          thClass: 'text-center',
          tdClass: 'text-center',
          filterOptions: {
            enabled: true,
            placeholder: 'Todos',
            filterDropdownItems: [
              { value: 'true', text: 'Entregado' },  
              { value: 'false', text: 'No entregado' }
            ]
          },
        },
        {
          label: 'Muestras',
          field: 'piece',
          thClass: 'text-center',
          tdClass: 'text-center',
          filterOptions: {
            enabled: true,
            placeholder: 'Todos',
            filterDropdownItems: [
              { value: 'true', text: 'Entregado' },  
              { value: 'false', text: 'No entregado' }
            ]
          },
        },
        {
          label: 'Posición',
          field: 'position',
          thClass: 'text-center',
          tdClass: 'text-center',
          html: true,
          filterOptions: {
            enabled: true,
            placeholder: 'Buscar...',
          },
        },
        {
          label: 'Notas',
          field: 'notes',
          thClass: 'text-center',
          tdClass: 'text-center',
          filterOptions: {
            enabled: true,
            placeholder: 'Buscar...',
          },
        },
      ],
      rows: [
        { name:"Carmen Villalobos", client:"Teresa Restrepo", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"andres.fabregat@estudiocactus.com", contact:"Esteban Franco", createdAt:'30/04/18', catalogue: true, notes:'texto de prueba de las notas'},
        { name:"Paco Paquito", client:"Carlos Prado", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18', granite: true, notes:'algun otro texto de prueba de las notas'},
        { name:"Paco Paquito", client:"Teresa Restrepo", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18', compac: true, piece: true},
        { name:"Antonio Gonzalez", client:"Teresa Restrepo", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18', catalogue: true},
        { name:"Carmen Villalobos", client:"Teresa Restrepo", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18', granite: true, piece: true},
        { name:"Jorge Santos", client:"Carlos Prado", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18', catalogue:'false'},
        { name:"Paco Paquito", client:"Teresa Restrepo", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Carmen Villalobos", client:"Teresa Restrepo", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Carmen Villalobos", client:"Teresa Restrepo", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Antonio Gonzalez", client:"Helena Marin", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Carmen Villalobos", client:"Helena Marin", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Jorge Santos", client:"Carol Muñoz", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Carmen Villalobos", client:"Teresa Restrepo", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Carmen Villalobos", client:"Teresa Restrepo", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Paco Paquito", client:"Carlos Prado", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Paco Paquito", client:"Teresa Restrepo", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Antonio Gonzalez", client:"Teresa Restrepo", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Carmen Villalobos", client:"Teresa Restrepo", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Jorge Santos", client:"Carlos Prado", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Paco Paquito", client:"Teresa Restrepo", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Carmen Villalobos", client:"Teresa Restrepo", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Carmen Villalobos", client:"Teresa Restrepo", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Antonio Gonzalez", client:"Helena Marin", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Carmen Villalobos", client:"Helena Marin", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Jorge Santos", client:"Carol Muñoz", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
        { name:"Carmen Villalobos", client:"Teresa Restrepo", direction:"C/ En Medio", city:"Castellon", phone:"900 000 000", mail:"mail@mail.com", contact:"Esteban Franco", createdAt:'30/04/18'},
      ],
    };
  },
};
</script> 