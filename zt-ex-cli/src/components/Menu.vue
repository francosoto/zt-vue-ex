<template>
  <div class="hello">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">{{logoStr}}</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav v-for="item in menu" :key="item.id">
          <b-nav-item :to="item.url">{{item.label}}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>{{username}}</em>
            </template>
            <b-dropdown-item v-for="itemU in menuUser" :key="itemU.id" :to="itemU.url">
              {{itemU.label}}
            </b-dropdown-item>
            <!-- <b-dropdown-item @click="logout()">Salir</b-dropdown-item> -->
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import Vue from 'Vue'
// import _ from 'lodash'
// import Component from 'vue-class-component'
// import { Component } from 'vue-property-decorator'

const menuVars = [
  {label: 'Link 1', id: '', url: ''},
  {label: 'About', id: '', url: '/about'},
];

export default {
  name: 'Menu',
  data() {
    return {
      username: 'Pepito',
      menu: [],
      menuUser: [],
      logoStr: 'App EX',
    };
  },
  created() {
    this.menu = menuVars;
  },
  // methods: {
  //   logout () {
  //   },
  // },
};
// @Component
// export default class Menu extends Vue {
//   logoStr: string = 'App EX';
//   menu: string[];
//   menuUser: string[];
//   logoImg: string = '';
//   username: string = 'Pepito';
//   created () {
//     this.menu = menu;
//   }
// }
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
