<template>
  <b-modal :id="idModal" v-model="showDetailsComp" :title="titleHeader">
    <ul>
      <li v-for="(value, key) in dataToDisplay" :key="key"><b>{{ key }}</b>: {{ value}}</li>
    </ul>
    <div slot="modal-footer" class="w-100 text-right">
     <b-btn size="sm" variant="primary" @click="dataToDisplay={}">
       Aceptar
     </b-btn>
   </div>
  </b-modal>
</template>

<script>
export default {
  name: 'Details',
  props: {
    titleHeader: String,
    dataToDisplay: Object,
    idModal: String
  },
  data () {
    return {}
  },
  computed: {
    showDetailsComp: function () {
      return !this.dataToDisplay
    }
  }
}
</script>