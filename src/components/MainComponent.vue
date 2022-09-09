<template>
    <main>
        <!-- <ul v-for="(movie,i) of moviesFounded" :key="i">
            <li> {{ movie }} </li>
        </ul> -->
        <ul v-for="(movie, i) of moviesFound" :key="i">
            <li>
                <h4>Title: {{movie.title}} </h4>
                <h4>Original Title: {{movie.original_title}}</h4>
                <h4>Language: {{movie.original_language}}</h4>
                <h4>Vote: {{movie.vote_average}}</h4>
            </li>
        </ul>
    </main>
</template>


<script>

    import state from '../store.js'

    export default {

        computed: {
            moviesFound() {
                return state.moviesFound;
            },
            // arrayProva() {
            //     return state.arrayProva;
            // }
        },

        // data() {
        //     return {
                
        //     }
        // }
    }

</script>