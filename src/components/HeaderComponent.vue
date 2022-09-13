<template>
  <header class="header" id="header">
    <div class="container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Logo Netflix">
      <div class="search-bar">
        <input type="text" placeholder="Search Movie" v-model="movieSearched" @keyup.enter="onClick">
        <button @click="onClick">Enter</button>
    </div>
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
      state.researchIsStarted = true
      console.log('ricerca: ', state.researchIsStarted)
    },

    // toggleCategoryVisibility() {
    //   let category = document.querySelector('category')
    //   console.log('hei', category)
    //   if(category.style.display === 'none')
    //     category.style.display = 'block'
    //   else 
    //     category.style.display = 'none'
    // }
  },

}
</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import '../style/general.scss';

  .container {

    @include my-flex;
    flex-wrap: nowrap;

    img {
      max-height: 25px;
    }

    .search-bar {
      margin-left: auto;
    }
  }

</style>
