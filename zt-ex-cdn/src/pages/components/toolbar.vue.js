var toolbar = Vue.component("Toolbar", {
  template: `<div>
</div>`,
  props: ["options"],
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
    changeOption(evt) {
      console.log(evt)
    }
  }
});