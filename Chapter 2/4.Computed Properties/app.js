const app = Vue.createApp({           // We create a function inside our variable as an object with some properties
    data() {
        return {
            url: 'http://www.google.be',
            showBooks: true,                // conditional renders if true
            books: [
                {title: 'name of the wind', author: 'Patrick rothfuss', isFav: true},
                {title: 'the way of kings', author: 'Brandon Sanders', isFav: false},
                {title: 'the final empire', author: 'Patrick Sanderson', isFav: true},
            ]
        }
    },
    methods: {
        toggleShowBooks (){
            this.showBooks = !this.showBooks          // Here we call the Boolean in the return.
        },
    computed: {
        filteredBooks: function () {
            return this.books.filter((book) => book.isFav)
        }
    }
    }
})

app.mount('#app') // Will be displayed as a component inside the #app div