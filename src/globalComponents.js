import fgInput from './components/UIComponents/Inputs/formGroupInput.vue'
import DropDown from './components/UIComponents/Dropdown.vue'

import modal from './components/UIComponents/modal.vue'

import VueGoodTable from 'vue-good-table';
// import the styles 
import 'vue-good-table/dist/vue-good-table.css'
 

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('fg-input', fgInput)
    Vue.component('drop-down', DropDown)
    Vue.component('modal', modal)
    Vue.use(VueGoodTable);
  }
}

export default GlobalComponents
