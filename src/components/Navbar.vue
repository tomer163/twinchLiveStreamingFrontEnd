<template>
    <div class="h-16 flex w-full bg-gray-900 items-center text-white text-xl font-medium px-3">
        <RouterLink to="/"><img src="logo5.jpg" class="w-12 rounded-full hover:scale-110 transition-all"></RouterLink>
        <RouterLink v-for="route in routes.filter(route => route.path !== '/')" :to="route.path" class="mx-6">{{ route.name }}</RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import routes from '../assets/routes';
</script>