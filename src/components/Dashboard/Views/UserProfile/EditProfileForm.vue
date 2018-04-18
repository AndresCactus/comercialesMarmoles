<template>
  <card>
    <h4 slot="header" class="card-title">Crear usuario</h4>
    <form>
      <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="Usuario"
                    placeholder="Nombre de usuario"
                    v-model="user.username">
          </fg-input>
        </div>
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

  export default {
    components: {
      Card
    },
    data () {
      return {
        user: {
          // company: 'Paper Dashboard',
          // username: 'michael23',
          // email: '',
          // firstName: 'Mike',
          // lastName: 'Andrew',
          // address: 'Melbourne, Australia',
          // city: 'melbourne',
          // country: 'Australia',
          // postalCode: '',
          // aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
          username: '',
          name: '',
          surname: '',
          mail: '',
          pass: '',
        }
      }
    },
    methods: {
      createUser () {
        alert('Datos del usuario creado: ' + JSON.stringify(this.user))
      }
    }
  }

</script>
<style>

</style>
