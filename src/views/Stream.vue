<template>
    <div class="overflow-y-auto" id="scroll">
        <div class="max-h-[calc(100vh-10rem)] aspect-video bg-gray-500 mx-auto select-none">
            <h1>{{ $route.params.username }} content</h1>
        </div>
        <div class="w-full h-full bg-gray-900">
            <div class="h-[6rem] flex items-center px-10">
                <h1>yo</h1>
                <div class="grow"></div>
                <h1>yo</h1>
            </div>
            <h1>f</h1>
            <h1>f</h1>
            <h1>f</h1>
            <h1>f</h1>
            <h1>f</h1>
            <h1>f</h1>
            <h1>f</h1>
        </div>
    </div>
</template>

<script setup>
//import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

</script>

<style scoped>

#scroll::-webkit-scrollbar{
    display:none;
}

</style>