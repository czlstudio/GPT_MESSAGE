import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'uno.css'
import 'vfonts/Lato.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/tokyo-night-dark.css'

const app = createApp(App)

app.directive('highlight', function () {
  const blocks = document.querySelectorAll('pre code')
  blocks.forEach((block: any) => {
    hljs.highlightBlock(block)
  })
})
app.mount('#app')
