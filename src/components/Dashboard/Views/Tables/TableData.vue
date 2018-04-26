<template>

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
          <button type="button" class="nc-icon nc-square-pin" @click="showModalMap('Posición de la visita', props.row.lat, props.row.long)">
          </button>
        </span>
        <span v-else-if="props.column.field == 'notes'">
          <button type="button" class="nc-icon nc-paper-2" @click="showModal('Notas', props.row.notes)">
          </button>

        </span>
        <span v-else>
          {{props.formattedRow[props.column.field]}}
        </span>
      </template>

    </vue-good-table>

    <modalMap
      :title = title
      :lat = lat
      :long = long
      v-show="isModalMapVisible"
      @close="closeModal"
    />

    <modalNotes
      :title = title
      :body = body
      v-show="isModalNotesVisible"
      @close="closeModal"
    />

  </div>

</template>

<script>

import ModalNotes from '../Modals/ModalNotes.vue'
import ModalMap from '../Modals/ModalMap.vue'

export default {
  name: 'my-component',
  components: {
    ModalNotes,
    ModalMap
  },
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
      isModalNotesVisible: false,
      isModalMapVisible: false,
      title: '',
      body: '',
      lat: '',
      long: ''
    };
  },
  props: ['rows'],
  methods: {
    showModal(tit, bod) {
      this.isModalNotesVisible = true;
      this.title = tit;
      this.body = bod;
    },
    showModalMap(tit, lat, long){
      this.isModalMapVisible = true;
      this.title = tit;
      this.lat = lat;
      this.long = long;
    },
    closeModal() {
      this.isModalNotesVisible = false;
      this.isModalMapVisible = false;
    }
  },
};
</script>

<style>

</style>
