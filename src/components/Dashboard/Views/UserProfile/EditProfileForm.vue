<template>
  <card>
    <h4 slot="header" class="card-title">Crear usuario</h4>
    <form>
      <div class="row">
        <!-- <div class="col-md-4">
          <fg-input type="text"
                    label="Usuario"
                    placeholder="Nombre de usuario"
                    v-model="user.username">
          </fg-input>
        </div> -->
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
            <div class="row">
              <select class="selectRol" v-model="user.rol">
                <option disabled value="">Selecciona un rol</option>
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
          <fg-input type="text"
                    label="Contraseña"
                    placeholder="Contraseña del usuario"
                    v-model="user.pass">
          </fg-input>
        </div>
      </div>

      <!-- <div class="row">
        <div class="col-md-12">
          <fg-input type="text"
                    label="Address"
                    placeholder="Home Address"
                    v-model="user.address">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="City"
                    placeholder="City"
                    v-model="user.city">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Country"
                    placeholder="Country"
                    v-model="user.country">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="number"
                    label="Postal Code"
                    placeholder="ZIP Code"
                    v-model="user.postalCode">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>About Me</label>
            <textarea rows="5" class="form-control border-input"
                      placeholder="Here can be your description"
                      v-model="user.aboutMe">
              </textarea>
          </div>
        </div>
      </div> -->

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
          rol: ''
        }
      }
    },
    methods: {
      createUser () {
        alert('Datos del usuario creado: ' + JSON.stringify(this.user));
        
        // db.auth().createUser({
        //   email: this.user.mail,
        //   password: this.user.pass
        // })
        //   .then(function(userRecord) {
        //     // See the UserRecord reference doc for the contents of userRecord.
        //     console.log("Successfully created new user:", userRecord.uid);
        //   })
        //   .catch(function(error) {
        //     console.log("Error creating new user:", error);
        //   });


        db.auth().createUserWithEmailAndPassword(this.user.mail, this.user.pass).catch(function(error) {
          // Handle Errors here.
          console.log(error);
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });

        db.firestore().collection("users").doc(this.user.mail).set({
          name: this.user.name,
          surname: this.user.surname,
          mail: this.user.mail,
          rol: this.user.rol,
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
      },
    }
  }

</script>
<style>

.row{
  margin-left: 0px;
  margin-right: 0px;
}

.selectRol{
  height: 40px;
  margin-top: 4px;
}

</style>
