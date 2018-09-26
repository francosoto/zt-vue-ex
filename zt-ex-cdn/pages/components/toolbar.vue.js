var spahome = Vue.component("Toolbar", {
  template: `<div>
</div>`,
  props: ["title"],
  $_veeValidate: {
    validator: "new"
  },
  data() {
    return {
      showProgress: false
    };
  },
  created() {
    this.GetDelays();
  },
  methods: {
    GetDelays() {
    }
  }
});