<template>
    <main>
        <h2>Movies</h2>
        <ul v-for="movie of moviesFound" :key="movie.id">
            <li>
                <img v-if="movie.poster_path !== null" :src="movie.poster" alt="Poster Movie">
                <img v-if="movie.poster_path === null" :src="movie.poster_default" alt="No poster" width="342px">
                <h4>Title: {{movie.title}} </h4>
                <h4>Original Title: {{movie.originalTitle}}</h4>
                <h4> Language:
                    <img :src="movie.flag" width="20" @error="errorLoadImage">
                </h4>
                <h4>Vote: 
                    <i v-for="(fullStarMovie) in movie.vote" :key="fullStarMovie" class="fa-solid fa-star"></i>
                    <i v-for="(emptyStarMovie) in (maxOfStars - movie.vote)" :key="emptyStarMovie" class="fa-regular fa-star"></i>
                </h4>
                <br>
            </li>
        </ul>
        <h2>Series</h2>
        <ul v-for="serie of seriesFound" :key="serie.id">
            <li>
                <img v-if="serie.poster_path !== null" :src="serie.poster" alt="Poster Tv Show">
                <img v-if="serie.poster_path === null" :src="serie.poster_default" alt="No poster" width="342px">
                <h4>Title: {{serie.title}} </h4>
                <h4>Original Title: {{serie.originalTitle}}</h4>

                <!-- <h4 v-if="movie.flag.status == 404">Language: {{movie.lang}}</h4> -->
                <h4> Language:
                    <img :src="serie.flag" alt="flag of country's language" width="20">
                </h4>
                <!-- <img :src="movie.flag" alt="flag of country's language" width="20">  -->

                <!-- <h4>Vote (0/5): {{serie.vote}}</h4> -->

                <h4>Vote: 
                    <i v-for="(fullStarSerie) in serie.vote" :key="fullStarSerie" class="fa-solid fa-star"></i>
                    <i v-for="(emptyStarSerie) in (maxOfStars - serie.vote)" :key="emptyStarSerie" class="fa-regular fa-star"></i>
                </h4>
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
            flagBaseUri: 'https://flagcdn.com',
            posterBaseUri: 'https://image.tmdb.org/t/p',
            posterSize: 'w342',
            maxOfStars: 5,
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
                    poster_path: el.poster_path,
                    poster: `${this.posterBaseUri}/${this.posterSize}/${el.poster_path}`,
                    poster_default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png',
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
                    poster: `${this.posterBaseUri}/${this.posterSize}/${el.poster_path}`,
                    poster_path: el.poster_path,
                    poster_default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png',
                    vote: Math.round(el.vote_average / 2),
                }
                return newSerie;
            })
        }
    },

    methods: {
        errorLoadImage() {
            event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png'
        }
    }

}

</script>