

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import naive from "naive-ui";

import App from './App.vue'
import router from './router'
import WebFontLoader from 'webfontloader';

const app = createApp(App)
// Carrega as fontes usando o createWebFontLoader
WebFontLoader.load({
    google: {
        families: [
            'Assistant:700',
            'Cormorant Infant:300,400,500,600,700',
            'Encode Sans:100..900',
            'Hind:300,500,700',
            'Paytone One:regular&display=swap',
        ]
    }
});



app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')
