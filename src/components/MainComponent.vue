<template>
    <main>
        <h2>Movies</h2>
        <ul v-for="movie of moviesFound" :key="movie.id">
            <li>
                <h4>Title: {{movie.title}} </h4>
                <h4>Original Title: {{movie.originalTitle}}</h4>

                <!-- <h4 v-if="movie.flag.status == 404">Language: {{movie.lang}}</h4> -->
                <h4> Language:
                    <img :src="movie.flag" alt="flag of country's language" width="20">
                </h4>
                <!-- <img :src="movie.flag" alt="flag of country's language" width="20">  -->


                <h4>Vote (0/5): {{movie.vote}}</h4>
                <br>
            </li>
        </ul>
        <h2>Series</h2>
        <ul v-for="serie of seriesFound" :key="serie.id">
            <li>
                <h4>Title: {{serie.title}} </h4>
                <h4>Original Title: {{serie.originalTitle}}</h4>

                <!-- <h4 v-if="movie.flag.status == 404">Language: {{movie.lang}}</h4> -->
                <h4> Language:
                    <img :src="serie.flag" alt="flag of country's language" width="20">
                </h4>
                <!-- <img :src="movie.flag" alt="flag of country's language" width="20">  -->


                <h4>Vote (0/5): {{serie.vote}}</h4>
                <br>
            </li>
        </ul>
    </main>
</template>


<script>

import state from '../store.js'

export default {

    data() {
        return {
            flagBaseUri: 'https://flagcdn.com'
        }
    },

    computed: {
        moviesFound() {
            // return state.moviesFound;
            return state.moviesFound.map((el) => {
                const newMovie = {
                    id: el.id,
                    title: el.title,
                    originalTitle: el.original_title,
                    lang: el.original_language,
                    flag: `${this.flagBaseUri}/${el.original_language}.svg`,
                    // flag: 'https://flagcdn.com/za.svg',
                    poster: '',
                    vote: Math.round(el.vote_average / 2),
                }
                return newMovie;
            })
        },
        seriesFound() {
            return state.seriesFound.map((el) => {
                const newSerie = {
                    id: el.id,
                    title: el.name,
                    originalTitle: el.original_name,
                    lang: el.original_language,
                    flag: `${this.flagBaseUri}/${el.original_language}.svg`,
                    poster: '',
                    vote: Math.round(el.vote_average / 2),
                }
                return newSerie;
            }) 
        }
    },

}

</script>