const app = Vue.createApp({           // We create a function inside our variable as an object with some properties
    data(){
        return{
            title: 'The Final Empire',      // these are properties that will be available as a variable inside the html doc, doesn't matter what we use here (string, int, arrays,..)
            author: 'Brandon Sanders',
            age: '54'
        }
    },
    methods: {                              // Here we make a method with a function
        changeTitle(){
            //console.log('You clicked me')
            this.title = 'Words of Radiance',       // To use the previous data, we can call them with this. just like in OOP programming.
            this.author = 'Ryan Collins',
            this.age = '26'
        }
    }
})

app.mount('#app') // Will be displayed as a component inside the #app div