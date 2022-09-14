<template>
    <li>
        <div class="card-poster">
            <img v-if="el.poster_path !== null" :src="el.poster" alt="Poster">
            <img v-if="el.poster_path === null" :src="el.poster_default" alt="No poster" width="342px">

            <div class="card-details">
                <p> <b>Title: </b> {{el.title}} </p>
                <p :class="(isTheSame(el.title, el.originalTitle)) ? 'not-visible' : 'visible'"> <b>Original Title: </b>
                    {{el.originalTitle}}</p>
                <!-- <p> <b>Language:</b>
                <img :src="el.flag" width="20" :alt="el.lang">
                </p> -->
                <p> <b>Vote: </b>
                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in el.vote" :key="n" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="n in (maxOfStars - el.vote)" :key="(n + el.vote)" />
                </p>
                <p :class="(containText(el.overview)) ? 'not-visible' : 'visible'"> <b>Overview: </b> {{ el.overview }}
                </p>
            </div>
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

    methods: {
        isTheSame(title, originalTitle) {
            if (title === originalTitle)
                return true
            else
                return false
        },
        containText(string) {
            return string.length === 0;
        }
    },

}
</script>


<style lang="scss">
@import '../style/general.scss';


li {

    .card-poster {
        position: relative;

        &:hover .card-details {
            visibility: visible;
        }

        img {
            width: 342px;
            height: 500px;
        }

        .card-details {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: none;
            @include my-flex;
            flex-direction: column;
            gap: 0.5rem;
            align-items: baseline;
            padding: 2rem 0.5rem;
            // z-index: -1;
            overflow-y: scroll;
            visibility: hidden;
            background-color: rgba(0, 0, 0, 0.4);

            .fa-star {
                color: yellow;
            }

            .not-visible {
                display: none;
            }
        }
    }

}
</style>