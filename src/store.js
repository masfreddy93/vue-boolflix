import Vue from 'vue'

const state = Vue.observable({
    movieInput: '',
    moviesFounded: [
        {
            title: 'Lo chiamavano Trinità',
            originalTitle: 'they called him Trinità',
            language: 'it',
            mark: '4.7'
        },
        {
            title: 'Continuavano a chiamarlo Trinità',
            originalTitle: 'they follow call him Trinità',
            language: 'it',
            mark: '4.4'
        },
        {
            title: 'Trinità',
            originalTitle: 'Trinity',
            language: 'en',
            mark: '3.7'
        }
    ]
})

export default state;