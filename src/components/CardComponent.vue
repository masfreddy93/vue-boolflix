<template>
    <li>
        <img v-if="el.poster_path !== null" :src="el.poster" alt="Poster Movie">
        <img v-if="el.poster_path === null" :src="el.poster_default" alt="No poster" width="342px">
        <h4>Title: {{el.title}} </h4>
        <h4>Original Title: {{el.originalTitle}}</h4>
        <h4> Language:
            <img :src="el.flag" width="20" :alt="el.lang">
        </h4>
        <h4>Vote:
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in el.vote" :key="n" />
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in (maxOfStars - el.vote)" :key="(n + el.vote)" />
        </h4>
        <br>
    </li>
</template>



<script>
    export default {

        props: {
            el: Object,
        },

        data() {
            return {
                maxOfStars: 5,
            };
        },

    }
</script>


<style>

</style>