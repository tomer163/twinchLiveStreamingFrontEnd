<template>
    <div class="overflow-y-auto" id="scroll">
        <div class="relative">
            <div class="absolute z-10 top-0 bottom-0 left-0 right-0 flex flex-col transition-all opacity-0 hover:opacity-100 shadow-[inset_0_0px_39px_23px_rgba(0,0,0,0.5)]">
                <div class="grow"></div>
                <div class="items-center mb-5 mx-3">
                    <button v-if="!isPaused" @click="player.pause(); isPaused = !isPaused" class="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                        </svg>
                    </button>
                    <button v-else @click="player.play(); isPaused = !isPaused" class="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                    </button>
                    <button v-if="!isMuted" @click="player.volume = 0; isMuted = !isMuted" class="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                        </svg>
                    </button>
                    <button v-else @click="player.volume = 1.0; isMuted = !isMuted" class="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="relative max-h-[calc(100vh-10rem)] aspect-video bg-black mx-auto">
                <StreamVideo @player="(p)=> player = p"></StreamVideo>
            </div>
        </div>
        <div class="w-full h-full bg-gray-900">
            <div class="h-[6rem] flex items-center px-6">
                <button class="w-16 h-16 bg-gray-500 rounded-full mr-3 transition-all hover:scale-105"></button>
                <div class="grow">
                    <div class="flex">
                        <h1 class="font-medium text-lg">{{ $route.params.username }}</h1>
                        <div class="grow"></div>
                        <button class="py-1 px-2 bg-violet-500 hover:bg-violet-600 rounded">Subscribe</button>
                    </div>
                    <div class="flex">
                        <p>description</p>
                    </div>
                    <div class="flex text-violet-500">
                        <h1>category</h1>
                    </div>

                </div>
            </div>
            <div class="flex mx-20 bg-gray-800 rounded px-10 py-8 mt-5">
                <div>
                    <h1 class="text-xl font-medium my-2">About {{ $route.params.username }}</h1>
                    <p class="text-sm my-2">171K followers</p>
                    <p class="text-sm mt-2 mb-10">about section</p>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import StreamVideo from '../components/StreamVideo.vue';


const route = useRoute()

const player= ref()

const isMuted = ref(true)
const isPaused = ref(false)


</script>



<style scoped>

#scroll::-webkit-scrollbar{
    display:none;
}

</style>