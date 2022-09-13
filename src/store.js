import Vue from 'vue'

const state = Vue.observable({
    movieInput: '',
    moviesFound: [],
    seriesFound: [],
    researchIsStarted: false,
})

export default state;