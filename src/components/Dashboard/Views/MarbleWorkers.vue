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
      TableData
    },
    data(){
    return {
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
  }

</script>