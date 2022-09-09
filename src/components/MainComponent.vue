<template>
    <main>
        <ul>
            <li>1st movie</li>
            <li>2nd movie</li>
            <li> {{movieFounded}}</li>
        </ul>
    </main>
</template>


<script>

    import state from '../store.js'

    export default {

        computed: {
            movieFounded() {
                return state.movieInput;
            }
        },

        // data() {
        //     return {
                
        //     }
        // }
    }

</script>