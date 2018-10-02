<template>
  <div>
    <div class="hello">
      <h2>{{title}}</h2>
    </div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group label="Nombre:"
                    label-for="Name"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="GMapsAutocomplete" 
                      ref="GMapsAutocomplete"
                      type="name"
                      v-model="form.name"
                      required
                      placeholder="Ingresar nombre">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Domicilio:" label-for="tags">
        <!-- <b-input-group prepend="search"> -->
        <vue-bootstrap-typeahead  :data="locationsSearched"
                                  v-model="searchTags"
                                  :serializer="s => s.lastname + ', ' + s.name"
                                  placeholder="Ingrese una dirección"
                                  @hit="selectLocation"
                                  @input="searchLocation" />
        <!-- </b-input-group> -->
        <!-- <div id="tagsSelectedId" class>
          <span v-for="value in tagsSelected" 
              :id="value.id"
              class="btn btn-primary btn-sm">
              {{value.name}} <a @click="deleteTag(value.id)" 
                            v-b-tooltip.hover 
                            title="No asociar la etiqueta a la propuesta">
                            <icon name="close" height="10"/>
                          </a>
          </span>
        </div> -->
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import _ from 'lodash';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';

export default {
  name: 'Layout',
  components: {
    'vue-bootstrap-typeahead': VueBootstrapTypeahead,
  },
  data() {
    return {
      title: 'Bleh',
      form: {
        name: '',
        location: '',
      },
      searchTags: '',
      locationsSearched: [],
    };
  },
  created() {
    // this.menu = menu
  },
  mounted() {
    // Mounted
  },
  methods: {
    onSubmit() {

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
</style>
