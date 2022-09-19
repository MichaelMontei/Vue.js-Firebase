const app = Vue.createApp({           // We create a function inside our variable as an object with some properties
    data() {
        return {
            url: 'http://www.google.be',
            showBooks: true,                // conditional renders if true
            books: [
                {title: 'name of the wind', author: 'Patrick rothfuss'},
                {title: 'the way of kings', author: 'Brandon Sanders'},
                {title: 'the final empire', author: 'Patrick Sanderson'},
            ]
        }
    },
    methods: {
        toggleShowBooks (){
            this.showBooks = !this.showBooks          // Here we call the Boolean in the return.
        },
    }
})

app.mount('#app') // Will be displayed as a component inside the #app div