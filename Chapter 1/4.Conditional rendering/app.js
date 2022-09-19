const app = Vue.createApp({           // We create a function inside our variable as an object with some properties
    data() {
        return {
            showBooks: true,                // conditional renders if true
            title: 'The Final Empire',      // these are properties that will be available as a variable inside the html doc, doesn't matter what we use here (string, int, arrays,..)
            author: 'Brandon Sanders',
            age: '54'
        }
    },
    methods: {
        toggleShowBooks (){
            this.showBooks = !this.showBooks          // Here we call the Boolean in the return.
        }
    }
})

app.mount('#app') // Will be displayed as a component inside the #app div