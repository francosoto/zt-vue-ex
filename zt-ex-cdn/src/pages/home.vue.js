var home = Vue.component("Home", {
  template: `<div>
    Esto es una prueba de HOME
  </div>`,
  props: ["title"],
  $_veeValidate: {
    validator: "new"
  },
  data() {
    return {
      options: []
    };
  },
  created() {
    // this.GetDelays();
  },
  methods: {
    GetDelays() {
    }
  }
});