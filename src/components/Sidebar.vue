<template>
    <div class="w-60 bg-gray-800 h-[calc(100vh-4rem)] text-white flex flex-col overflow-y-auto">
        <div class="flex p-2 text-xl font-medium">
            <h1>For You</h1>
            <div class="grow"></div>
            <button class="hover:bg-gray-700 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 m-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
            </button>
        </div>
        <button class="flex p-2 items-center hover:bg-gray-700">
            <div>
                <h1 class="text-sm font-medium">FOLLOWED CHANNELS</h1>
                <h1 class="font-thin text-gray-400">Viewers (high to Low)</h1>
            </div>
            <div class="grow"></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
            </svg>
        </button>
        <RouterLink v-for="i in 10" :to="'/stremer'+i" class="flex hover:bg-gray-700 px-2 py-2 items-center">
            <div class="h-8 w-8 bg-gray-500 rounded-full"></div>
            <div class="text-left ml-2 leading-4">
                <span class="block">Streamer {{ i }}</span>
                <span class="block text-gray-400">CATEGORY</span>
            </div>
            <div class="grow"></div>
            <div class="mb-auto">
                <div class="flex items-center mb-auto">
                    <div class="h-2 w-2 bg-red-500 rounded-full mr-1"></div>
                    <span class="text-sm">7.8K</span>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>