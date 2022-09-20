# Vue.js-Learning-Curve
Learning Vue.js Udemy Course By The Net Ninja

![Vue](https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTZfMjY2/MDAxNTcxMTgyMjIyODQ0.xSg5-1hPPEdwZlg_05HAL2aMZWM6BpFyHpksi9OHpbwg.xQoxPMZ4SQPCtpe6-UyCcYWAoZo43uZnGuIiUvSEwusg.JPEG.jhc9639/Vue.js-cta-main.jpg?type=w800)

What is Vue?
- Front-end, Javascript / Typescript Framework.
- Used to create dynamic & data-driven websites.
- Can also be used to create stand-alone widgets or components.

### Chapter 1: Learning the Basics

- Creating a Vue app.
- Data and templates. 
- Click events (methods, function and inline).
- Conditional rendering in Vue.

### Chapter 2: Learning the Basics

- Other mouse events.
- Outputting lists v-for.
- attribute binding.
- Computed Properties.

### Chapter 3: The Vue CLI & Bigger Projects

#### Let's install the CLI and let get ready to make some fun projects!
- First you need to have Node installed - To check your version of node (node-v).<br>
- After this lets run the command npm install -g @vue/cli.
- Then we navigate to our project folder and: vue create (projectname).
- It will now ask you for some features ( Babel, ESlint) Select the features you would like to have.
- To run your project simple do: npm run serve - It will open the localhost on port 8080.
- Understanding the layout structure from Vue (components, templates, ...)

####  * Show me some structure in VUE *
![Structure](https://user-images.githubusercontent.com/103993166/191212452-5937158c-bd2a-4d5f-b89f-9fff3331301d.JPG)

#### * What Terminology? *
![Terminology](https://user-images.githubusercontent.com/103993166/191213032-9e3fa6da-c278-4284-94a3-6b22d72cf442.JPG)

#### Lets make our first component! 
Inside the new component we make a template and some styling. 
To add this component to the view we need to do 3 things:
- first we import our component in our App.Vue inside the script tag
- then we need to add components: { Modal } 
- Now we can actually use this in our template inside the App.vue as <Modal /> same as in React.

### Chapter 4: The Vue CLI & Bigger Projects ( Part2 )

- Scoped and Global CSS
- Learned by passing through Props and handling props on classes.<br> Example: Whenever this modal === Sale it will color red/white
  ![Modal](https://user-images.githubusercontent.com/103993166/191255233-d5a97be3-0221-4b6d-b511-e10544265d7e.JPG)