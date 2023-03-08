import { createApp } from "nuxt/dist/app/compat/capi"
import App from "./app.vue"

const app = createApp(App)

app.mount('#app')
