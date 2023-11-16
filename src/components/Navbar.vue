<template>
    <div class="h-16 flex w-full bg-gray-900 items-center px-3">
        <div class="text-xl font-medium flex items-center">
            <RouterLink to="/"><img src="/logo5.jpg" class="w-12 rounded-full hover:scale-110 transition-all"></RouterLink>
            <RouterLink v-for="route in routes.filter(route => route.path !== '/')" :to="route.path" class="mx-6">{{ route.name }}</RouterLink>
        </div>
        <div class="grow"></div>
        <div v-if="currentLoggedUser === ''" class="flex items-center">
            <button @click="focusLogin" class="bg-violet-500 px-3 py-0.5 rounded-l text-base hover:bg-violet-600 outline-none">Log In</button>
            <button @click="focusSignup" class="bg-gray-700 px-3 py-0.5 rounded-r text-base hover:bg-gray-800 outline-none">Sign Up</button>
        </div>
        <div v-else class="flex items-center">
            <p>{{ currentLoggedUser }}</p>
            <button @click="logOut">Log Out</button>
        </div>
        <!-- modals -->
        <div v-if="logshow !== 0" @click="logshow = 0" class="absolute inset-0 bg-[rgb(0,0,0,0.5)] z-[999] flex items-center justify-center">
            <!-- login modal -->
            <div v-if="logshow === 1" @click.stop class="bg-gray-800 flex flex-col gap-y-5 p-10 rounded text-center">
                <div class="text-5xl mb-10">Log In</div>
                <input type="text" placeholder="Username" v-model="username" class="px-2 py-1 rounded-full bg-gray-600 placeholder:text-gray-300 outline-none ring-gray-900 focus:ring-4 text-base">
                <input type="password" placeholder="Password" v-model="password" class="px-2 py-1 rounded-full bg-gray-600 placeholder:text-gray-300 outline-none ring-gray-900 focus:ring-4 text-base">
                <button @click="submitLogin" class="bg-gray-700 px-3 py-0.5 rounded text-base hover:bg-gray-900 mx-auto">Log In</button>
            </div>
            <!-- signup modal -->
            <div v-if="logshow === 2" @click.stop class="bg-gray-800 flex flex-col gap-y-5 p-10 rounded text-center">
                <div class="text-5xl mb-10">Sign Up</div>
                <input type="text" placeholder="Username" v-model="username" class="px-2 py-1 rounded-full bg-gray-600 placeholder:text-gray-300 outline-none ring-gray-900 focus:ring-4 text-base">
                <input type="password" placeholder="Password" v-model="password" class="px-2 py-1 rounded-full bg-gray-600 placeholder:text-gray-300 outline-none ring-gray-900 focus:ring-4 text-base">
                <button @click="submitSignup" class="bg-gray-700 px-3 py-0.5 rounded text-base hover:bg-gray-900 mx-auto">Log In</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,onBeforeMount } from 'vue'
import { RouterLink } from 'vue-router'
import routes from '../assets/routes';
import axios from '../util/axios.js';


const logshow = ref(0)

const username = ref('')
const password = ref('')

const currentLoggedUser = ref('')

function focusLogin(){
    logshow.value = 1
}

function focusSignup(){
    logshow.value = 2
}

window.addEventListener('keyup',(e)=>{
    if(e.key === 'Escape'){
        logshow.value = 0
        username.value = ''
        password.value = ''
    }
})

onBeforeMount(async()=>{
    if(!localStorage.getItem('token')){
        document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }
    else if(document.cookie.includes('name')){
        const name = document.cookie.split('name=')[1].split(';')[0]
        currentLoggedUser.value = name
    }
    else{
        const info = await axios.get('/myuser')
        document.cookie = `name=${info.data.username}`
        currentLoggedUser.value = info.data.username
    }
})

async function submitLogin(){
    try{
        const res = await axios.post('/login',{
            username:username.value,
            password:password.value
        })
        const token = res.data.token
        localStorage.setItem('token',token)
        const info = await axios.get('/myuser')
        document.cookie = `name=${info.data.username};`
        currentLoggedUser.value = info.data.username
        logshow.value = 0
        username.value = ''
        password.value = ''
    }
    catch(error){
        alert('username or password are incorrect... :(')
    }
}

async function submitSignup(){
    try{
        const res = await axios.post('/signup',{
            username:username.value,
            password:password.value
        })
        username.value = ''
        password.value = ''
    } catch(error){

    }
}

function logOut(){
    localStorage.removeItem('token')
    document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    location.reload()
}

</script>