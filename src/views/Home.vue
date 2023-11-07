<template>
    <div class="">
        <div class="relative xl:block hidden grow mx-10 h-[30rem]">
            <button @click="goRight" class="absolute top-0 bottom-0 right-0 z-40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <div v-for="(a,index) in array" :class="a" class="absolute top-0 bottom-0 left-0 right-0 m-auto h-[20rem] w-[48rem] transition-all duration-700">
            </div>
            <button @click="goLeft" class="absolute top-0 bottom-0 left-0 z-40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const array = ref([
    'bg-gray-700 scale-75 translate-x-[20rem] z-10',
    'bg-gray-600 scale-90 translate-x-[10rem] z-20',
    'bg-gray-500 z-30',
    'bg-gray-600 scale-90 -translate-x-[10rem] z-20',
    'bg-gray-700 scale-75 -translate-x-[20rem] z-10'
])

function goLeft(){
    array.value.splice(0,0,array.value.pop())
}

function goRight(){
    array.value.push(array.value.splice(0,1))
}

</script>