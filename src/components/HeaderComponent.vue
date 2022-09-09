<template>
  <header class="header">
    <h1>{{ msg }}</h1>
    <div class="search-bar">
      <input type="text" placeholder="Search Movie" v-model="movieSearched">
      <button @click="onClick">Enter</button>
    </div>
  </header>
</template>

<script>

import state from '../store.js'
import axios from 'axios'

export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  },

  data() {
    return {
      movieSearched: '',
    }
  },

  methods: {
    onClick() {
      state.movieInput = this.movieSearched;
      this.movieSearched = '';
      // console.log('click')
      console.log(state.movieInput)
    }
  },

  created() {
    axios
      .get('https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno')
      .then((res) => {
        console.log(res.data.results[0].title)
      })
      .catch((err) => {
        console.log('Error :', err)
      });

  }
}
</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
