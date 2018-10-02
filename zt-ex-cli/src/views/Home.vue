<template>
  <div class="home">
  	<Menu/>
    <b-container class="bv-example-row">
      <b-row class="parts">
        <b-col>
          <div class="title">
            <h2>{{title}}</h2>
          </div>
          <b-form @submit="addPerson" @reset="onReset" inline>
            <b-input  id="name" 
                      class="mb-2 mr-sm-2 mb-sm-0"
                      type="name"
                      v-model="form.name"
                      required
                      placeholder="Ingresar nombre">
            </b-input>
            <b-input  id="lastname" 
                      class="mb-2 mr-sm-2 mb-sm-0"
                      type="lastname"
                      v-model="form.lastname"
                      required
                      placeholder="Ingresar nombre">
            </b-input>
    <!--         <b-form-group label="Nombre:"
                          label-for="Name"
                          description="We'll never share your email with anyone else."> -->
            <!-- </b-form-group> -->
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
      </b-row>
      <b-row class="parts">
        <b-col>
          <!-- <b-form-group label="Domicilio:" label-for="tags"> -->
            <vue-bootstrap-typeahead  :data="item"
                                      v-model="searchTags"
                                      :serializer="s => s.lastname + ', ' + s.name"
                                      placeholder="Ingrese una dirección"
                                      @hit="selectLocation"
                                      @input="searchLocation" />
          <!-- </b-form-group> -->
        </b-col>
      </b-row>
      <b-row class="parts">
        <b-col>
          <b-table hover :items="items"></b-table>
        </b-col>
      </b-row>
    </b-container>
  	<Footer/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <Home msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from '@/components/Layout.vue';
import Menu from '@/components/Menu.vue';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';

export default {
  name: 'home',
  components: {
    Menu,
    Layout,
    'vue-bootstrap-typeahead': VueBootstrapTypeahead,
  },
  data() {
    return {
      title: 'Ejemplo de PSA',
      form: {
        name: '',
        lastname: '',
      },
      searchTags: '',
      items: [],
    };
  },
  created() {
    // this.menu = menu
  },
  mounted() {
    // Mounted
  },
  methods: {
    addPerson() {
      this.items.push(this.form)
    },
    onReset() {

    },
    searchLocation() {

    },
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
.parts {
  margin: 10px;
}
</style>
