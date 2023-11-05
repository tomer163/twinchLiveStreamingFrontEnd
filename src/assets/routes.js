import Home from '../views/Home.vue'
import Stream from '../views/Stream.vue'
import Following from '../views/Following.vue'

export default [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path:'/following',
        name:"Following",
        component:Following
    },
    {
        path: '/:username',
        component:Stream
    }
]