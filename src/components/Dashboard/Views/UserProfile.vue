<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <edit-profile-form>
          </edit-profile-form>
        </div>
        <!-- <div class="col-md-4">
          <user-card>
          </user-card>
        </div> -->
      </div>
    </div>

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
        <span v-if="props.column.field == 'edit'">
          <button type="button" class="fa fa-trash-o" style="font-size:1.5em;color:red;" @click="deleteUser(props.row.uid, props.row.mail)">
          </button>
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
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import UserCard from './UserProfile/UserCard.vue'

  import db from '../../firebaseInit'
  import admin from '../../firebaseInitAdmin'

  export default {
    components: {
      EditProfileForm,
      UserCard,
    },
    created() {
      db.firestore().collection('users').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          this.rows.push(doc.data());
        })
      })
    },
    methods: {
      deleteUser(uid, mail) {
        if(confirm("¿Esta seguro que desea borrar el usuario " + mail + " ?")){
          console.log('borramos el usuario');
          admin.auth().deleteUser(uid)
            .then(function() {
              console.log("Successfully deleted user");
              db.firestore().collection('users').doc(mail).delete()
              .then(function(){
                console.log("Usuario borrado de la BBDD");
                
                //Llamamos para volver a pintar la tabla
                db.firestore().collection('users').get().then((querySnapshot) => {
                  this.loading = false
                  querySnapshot.forEach((doc) => {
                    this.rows.push(doc.data());
                    console.log(doc.data());
                  })
                })
              })
              .catch(function(){
                console.log("Error al borrar usuario de la BBDD");
              })
            })
            .catch(function(error) {
              console.log("Error deleting user:", error);
            });
        } else {
          console.log('Usuario no borrado');
        }

      }
    },
    data(){
      return {
        columns: [
          {
            label: 'Nombre',
            field: 'name',
            thClass: 'text-center',
            tdClass: 'text-center',
            filterOptions: {
              enabled: true,
              placeholder: 'Buscar...',
            },
          },
          {
            label: 'Apellidos',
            field: 'surname',
            thClass: 'text-center',
            tdClass: 'text-center',
            filterOptions: {
              enabled: true,
              placeholder: 'Buscar...',
            },
          },
          {
            label: 'Mail',
            field: 'mail',
            thClass: 'text-center',
            tdClass: 'text-center',
            filterOptions: {
              enabled: true,
              placeholder: 'Buscar...',
            }
          },
          {
            label: 'Rol',
            field: 'role',
            thClass: 'text-center',
            tdClass: 'text-center',
            filterOptions: {
              enabled: true,
              placeholder: 'Buscar...',
            }
          },
          {
            label: 'Editar',
            field: 'edit',
            thClass: 'text-center',
            tdClass: 'text-center',
          },
        ],
        rows: [],
      };
    }
  }

</script>
<style>

  button{
    padding-bottom: 0;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 1px;
    text-align: center;
    border: 0px;
  }

</style>
