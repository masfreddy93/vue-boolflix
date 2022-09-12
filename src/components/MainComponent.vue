<template>
    <main>
        <ul v-for="(movie, i) of moviesFound" :key="i">
            <li>
                <h4>Title: {{movie.title}} </h4>
                <h4>Original Title: {{movie.originalTitle}}</h4>
                <h4>Language: {{movie.lang}}</h4>
                <h4>Vote (0/5): {{movie.vote}}</h4>
                <br>
            </li>
        </ul>
    </main>
</template>


<script>

    import state from '../store.js'

    export default {
        computed: {
            moviesFound() {
                // return state.moviesFound;
                return  state.moviesFound.map((el) => {
                    const newMovie = {
                        id: el.id,
                        title: el.title,
                        originalTitle: el.original_title,
                        lang: el.original_language,
                        flag: '',
                        poster: '',
                        vote: Math.round(el.vote_average / 2),
                    }
                    return newMovie;
                })
            },
        },
    }

</script>