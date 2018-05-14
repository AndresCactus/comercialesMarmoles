<template>
  <card>
    <h4 slot="header" class="card-title">Crear usuario</h4>
    <form id="userForm">
      <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="Nombre"
                    placeholder="Nombre del comercial"
                    v-model="user.name">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Apelidos"
                    placeholder="Apellidos del comercial"
                    v-model="user.surname">
          </fg-input>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <div class="row">
              <label class="control-label">
                Rol
              </label>
            </div>
            <div class="row-select">
              <select class="selectRol" v-model="user.role">
                <option disabled value="">Selecciona un role</option>
                <option value="architects">Arquitecto</option>
                <option value="decorators">Decorador</option>
                <option value="marbleWorkers">Marmolista</option>
                <option value="kitchen">Tiendas de cocina</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <fg-input type="mail"
                    label="Mail"
                    placeholder="Mail del usuario"
                    v-model="user.mail">
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="password"
                    label="Contraseña"
                    placeholder="Contraseña del usuario"
                    v-model="user.pass">
          </fg-input>
        </div>
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="createUser">
          Crear usuario
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import db from '../../../firebaseInit'
  import admin from '../../../firebaseInitAdmin'

  export default {
    components: {
      Card
    },
    data () {
      return {
        user: {
          username: '',
          name: '',
          surname: '',
          mail: '',
          pass: '',
          role: ''
        }
      }
    },
    methods: {
      createUser () {
        var that = this;

        // Creamos un usuario con los datos del formulario
        admin.auth().createUser({
          email: that.user.mail,
          password: that.user.pass
        })
          .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log("Successfully created new user:", userRecord.uid);

            console.log('paco');
            // Guardamos los datos del usuario en la tabla users.
            db.firestore().collection("users").doc(that.user.mail).set({
              name: that.user.name,
              surname: that.user.surname,
              mail: that.user.mail,
              role: that.user.role,
              uid: userRecord.uid
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
                alert('Error al dar de alta el usuario');
            });

            alert('Se ha creado el usuario ' + JSON.stringify(that.user.name, that.user.surname) + 
            ' con el correo ' + JSON.stringify(that.user.mail));

          })
          .catch(function(error) {
            console.log("Error creating new user:", error);
            alert('Error al dar de alta el usuario');
          });

        document.getElementById("userForm").reset();

      },
    }
  }

</script>
<style>

  .row{
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 4px;
  }

  .row-select{
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
  }

  .selectRol{
    height: 40px;
  }

</style>
