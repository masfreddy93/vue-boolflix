<template>
    <main>
        <ul v-for="(movie, i) of moviesFound" :key="i">
            <li>
                <h4>Title: {{movie.title}} </h4>
                <h4>Original Title: {{movie.originalTitle}}</h4>
                <!-- <h4>Language: {{movie.lang}}</h4> -->
                <h4>Language: 
                    <img  :src="movie.flag" alt="flag of country's language" width="20"> 
                </h4> 
                <!-- <img :src="movie.flag" alt="" width=""> -->
                <h4>Vote (0/5): {{movie.vote}}</h4>
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
                return  state.moviesFound.map((el) => {
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
        },

    }

</script>