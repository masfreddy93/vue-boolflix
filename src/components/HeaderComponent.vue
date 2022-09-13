<template>
  <header class="header">
    <h1>{{ msg }}</h1>
    <div class="search-bar">
      <input type="text" placeholder="Search Movie" v-model="movieSearched" @keyup.enter="onClick">
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
      apiKey: 'e99307154c6dfb0b4750f6603256716d',
      baseUri: 'https://api.themoviedb.org/3'
    }
  },

  methods: {
    axiosCallMovie() {
      axios
        // .get('https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno')
        .get(`${this.baseUri}/search/movie?api_key=${this.apiKey}&query=${this.movieSearched}&page=1`)
        .then((res) => {
          state.moviesFound = res.data.results
          // console.log(res.data.results)
          // console.log(res)
        })
        .catch((err) => {
          console.log('Error :', err)
        })
    },

    axiosCallSeries() {
      axios
        .get(`${this.baseUri}/search/tv?api_key=${this.apiKey}&query=${this.movieSearched}&page=1`)
        .then((res) => {
          state.seriesFound = res.data.results
        })
        .catch((err) => {
          console.log('Error :', err)
        })
    },

    onClick() {
      state.movieInput = this.movieSearched.toLocaleLowerCase();
      this.axiosCallMovie()
      this.axiosCallSeries()
      this.movieSearched = ''
    },
  },

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
