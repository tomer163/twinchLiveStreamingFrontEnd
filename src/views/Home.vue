<template>
    <div class="bg-gray-700">
        <div class="relative hidden md:block mx-5 h-[30rem]">
            <button @click="goRight" class="absolute top-0 bottom-0 right-0 z-40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <div v-for="(a,index) in array" :class="a" class="absolute top-0 bottom-0 left-0 right-0 m-auto h-[20rem] w-[48rem] transition-all duration-700 xl:shadow-[0_0px_50px_15px_rgb(0,0,0,0.7)]">
                <div v-if="index === 3" class="bg-red-500 w-full h-full"></div>
            </div>
            <button @click="goLeft" class="absolute top-0 bottom-0 left-0 z-40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
        </div>
        <div v-for="user in users" class="flex">
            {{ user.username }}
        </div>
    </div>
</template>

<script setup>
import axios from '../util/axios.js';
import { ref,onBeforeMount } from 'vue'


const array = ref([
    `xl:translate-x-[22rem] 2xl:translate-x-[32rem] z-[5] scale-50 bg-black opacity-0`,
    `xl:translate-x-[14rem] 2xl:translate-x-[22rem] z-10 scale-75 bg-gray-700`,
    `xl:translate-x-[8rem] 2xl:translate-x-[12rem] z-20 scale-90 bg-gray-600`,
    `z-30 bg-gray-500`,
    `xl:translate-x-[-8rem] 2xl:translate-x-[-12rem] z-20 scale-90 bg-gray-600`,
    `xl:translate-x-[-14rem] 2xl:translate-x-[-22rem] z-10 scale-75 bg-gray-700`,
    `xl:translate-x-[-22rem] 2xl:translate-x-[-32rem] z-[5] scale-50 bg-black opacity-0`
]);


function goLeft(){
    array.value.splice(0,0,array.value.pop())
}

function goRight(){
    array.value.push(array.value.splice(0,1))
}

setInterval(()=>{
    goRight()
},15000)


const users = ref()

onBeforeMount(async()=>{
    try{
        const res = await axios.get('/users')
        users.value = res.data
    } catch(err){

    }
})
</script>