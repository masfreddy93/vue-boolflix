<template>
    <li>
        <div class="card-poster">
            <img v-if="el.poster_path !== null" :src="el.poster" alt="Poster">
            <img v-if="el.poster_path === null" :src="el.poster_default" alt="No poster" width="342px">
        </div>
        <div class="card-details">
            <h4>Title: {{el.title}} </h4>
            <h5>Original Title: {{el.originalTitle}}</h5>
            <p> Language:
                <img :src="el.flag" width="20" :alt="el.lang">
            </p>
            <p>Vote:
                <font-awesome-icon icon="fa-solid fa-star" v-for="n in el.vote" :key="n" />
                <font-awesome-icon icon="fa-regular fa-star" v-for="n in (maxOfStars - el.vote)" :key="(n + el.vote)" />
            </p>
            <p>Overview: {{ el.overview }}</p>
        </div>
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


<style lang="scss">
    @import '../style/general.scss';


    li {
        
        position: relative;

        .card-poster {

            z-index: 1;

            &:hover {
                opacity: 0.2;
            }

            img {
                width: 342px;
                height: 500px;
            }

        }

        .card-details {
            position: absolute;
            top: 0;
            left: 0;
            display: none;
            @include my-flex;
            flex-direction: column;
            gap: 0.5rem;
            align-items: baseline;
            padding: 2rem 0.5rem;
            z-index: -1;


                &:hover {
                    z-index: 1;
                }
        }

    }
</style>