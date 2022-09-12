import Vue from 'vue'

const state = Vue.observable({
    movieInput: '',
    moviesFound: [],
    seriesFound: [],
})

export default state;