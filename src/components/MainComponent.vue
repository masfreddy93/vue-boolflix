<template>
    <main>
        <div class="container">
            <h2 :class="researchIsStarted ? 'categoryVisible' : 'categoryNotVisible'" >Movies</h2>
            <ul>
                <CardComponent v-for="movie of moviesFound" :key="movie.id" :el="movie" />
            </ul>

            <h2 :class="researchIsStarted ? 'categoryVisible' : 'categoryNotVisible'">TV Shows</h2>
            <ul>
                <CardComponent v-for="serie of seriesFound" :key="serie.id" :el="serie" />
            </ul>
        </div>
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
                    poster_default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png',
                    vote: Math.round(el.vote_average / 2),
                    overview: el.overview,
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
                    poster_default: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png",
                    vote: Math.round(el.vote_average / 2),
                    overview: el.overview,
                };
                return newSerie;
            });
        },
        researchIsStarted() {
            console.log(state.researchIsStarted)
            return state.researchIsStarted;
        }
    },
    components: { CardComponent }
}

</script>

<style lang="scss">

    @import '../style/general.scss';

    main {

        color: white;

        h2 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
            
        .categoryVisible {
            display: block;
        }

        .categoryNotVisible {
                display: none;
            }

        ul {
            
            @include my-flex;
            align-items: flex-start;
            gap: 1rem;
            margin-bottom: 5rem;
            overflow-y: hidden;
            overflow-x: auto;

            img {

                height: 100%;
            }
        }
    }

</style>