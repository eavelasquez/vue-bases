const quotes = [
  { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
  { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
  { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
  { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
  { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
  { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

// Create a component object
const Quotes = {
  data() {
    return {
      quotes,
      newQuote: '',
    }
  },
  methods: {
    addQuote() {
      this.quotes.unshift({
        quote: this.newQuote,
      })
    },
  },
  template: `
  <h1>New Batman Quotes</h1>
  
  <input
  type="text"
  v-model="newQuote"
  v-on:keypress.enter="addQuote"
  placeholder="New Batman Quote"
  >

  <hr />
  <!--- Conditionals and Loops -->
  <ul>
    <li v-for="({ quote, author }, index) in quotes">
      <span>{{ index + 1 }}. <strong>{{ quote }}</strong></span>
      <!-- <blockquote v-if="author">-{{ author }}</blockquote> -->
      <blockquote v-show="author">-{{ author }}</blockquote>
    </li>
  </ul>
  `
}

// Create Vue application
const app = Vue.createApp({
  components: {
    Quotes // Register a new component
  },
  data() {
    return {
      counter: 0,
      author: 'Bruce Wayne',
      message: 'Hello Vue.js!',
      quote: 'I\'m Batman',
    }
  },
  methods: {
    changeQuote(_) {
      this.quote = 'I\'m Ironman'
      this.author = 'Tony Stark'

      this.uppercaseQuote()
    },
    uppercaseQuote(_) {
      this.quote = this.quote.toUpperCase()
    },
    reverseMessage(_) {
      this.message = this.message.split('').reverse().join('')
    },
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  },
  // Other properties for the component
  // setup() {},
  // template: `
  //   <h1>Hello World from app.js!</h1>
  //   <p>{{ message }}</p>
  // `,
  // watch: {},
})

// Mount Vue application
app.mount('#app')
