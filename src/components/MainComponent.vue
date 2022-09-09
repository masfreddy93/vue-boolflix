<template>
    <main>
        <ul v-for="(movie,i) of moviesFounded" :key="i">
            <li> {{ movie }} </li>
        </ul>
    </main>
</template>


<script>

    import state from '../store.js'

    export default {

        computed: {
            moviesFounded() {
                return state.moviesFounded;
            }
        },

        // data() {
        //     return {
                
        //     }
        // }
    }

</script>