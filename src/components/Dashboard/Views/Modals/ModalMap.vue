<script>
import Maps from '../Maps/Maps.vue'

  export default {
    components: {
        Maps
    },
    name: 'modal',
    props: ['title', 'lat', 'long'],
    methods: {
      close() {
        this.$emit('close');
      },
    },
    data(){
        return {
            lat2: '',
            long2: ''
        };
    },
  };
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            {{title}}

            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
          style="text-align:center;"
        >
        {{this.lat}}
        {{this.long}}
            <slot name="body">
                <maps
                    :lat2 = '39.9914896'
                    :long2 = Number(this.long)
                />
                <!-- <iframe :src="'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6114.069146983148!2d'+long+'!3d'+lat+'!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1524734748007'" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe> -->
            </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">

            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              Cerrar
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 35%;
    height: fit-content;
    margin: 0 auto;
    top: 25%;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
    align-items: center;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>