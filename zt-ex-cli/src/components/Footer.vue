<template>
  <div class="footer">
    {{text}}
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'Footer',
  data() {
    return {
      text: 'Bleh',
    };
  },
  created() {
    // this.menu = menu
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
