import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const animateDirective = {
  mounted: (el) => {
    el.classList.add('transition-all', 'duration-1000', 'ease-out')

    
    const hideElement = () => {
      el.classList.remove('opacity-100', 'translate-y-0') 
      el.classList.add('opacity-0', 'translate-y-12')    
    }

    
    const showElement = () => {
      el.classList.remove('opacity-0', 'translate-y-12')  
      el.classList.add('opacity-100', 'translate-y-0')    
    }

    hideElement()

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showElement()
        } else {
          hideElement()
        }
      })
    }, {
      threshold: 0.1
    })

    observer.observe(el)
  }
}

app.directive('animate', animateDirective)

app.use(router)
app.mount('#app')