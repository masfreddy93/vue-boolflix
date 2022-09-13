<template>
    <main>
        <h2>Movies</h2>
        <ul>
            <CardComponent v-for="movie of moviesFound" :key="movie.id" :el="movie" />
        </ul>
        <h2>TV Shows</h2>
        <ul>
            <CardComponent v-for="serie of seriesFound" :key="serie.id" :el="serie" />
        </ul>
    </main>
</template>


<script>

import state from '../store.js'
import CardComponent from './CardComponent.vue'

export default {
    data() {
        return {
            flagBaseUri: "https://flagcdn.com",
            posterBaseUri: "https://image.tmdb.org/t/p",
            posterSize: "w342",
        };
    },
    computed: {
        moviesFound() {
            return state.moviesFound.map((el) => {
                const newMovie = {
                    id: el.id,
                    title: el.title,
                    originalTitle: el.original_title,
                    lang: el.original_language,
                    flag: `${this.flagBaseUri}/${el.original_language}.svg`,
                    // flag: 'https://flagcdn.com/za.svg',
                    poster_path: el.poster_path,
                    poster: `${this.posterBaseUri}/${this.posterSize}/${el.poster_path}`,
                    poster_default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png',
                    vote: Math.round(el.vote_average / 2),
                };
                return newMovie;
            });
        },
        seriesFound() {
            return state.seriesFound.map((el) => {
                const newSerie = {
                    id: el.id,
                    title: el.name,
                    originalTitle: el.original_name,
                    lang: el.original_language,
                    flag: `${this.flagBaseUri}/${el.original_language}.svg`,
                    poster: `${this.posterBaseUri}/${this.posterSize}/${el.poster_path}`,
                    poster_path: el.poster_path,
                    poster_default: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png",
                    vote: Math.round(el.vote_average / 2),
                };
                return newSerie;
            });
        }
    },
    components: { CardComponent }
}

</script>