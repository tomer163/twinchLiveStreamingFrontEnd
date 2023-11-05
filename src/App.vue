<template>
  <Navbar></Navbar>
  <div class="flex overflow-auto">
    <Sidebar></Sidebar>
    <RouterView class="grow h-[calc(100vh-4rem)]"></RouterView>
    <Chat v-if="$route.params.username"></Chat>
  </div>
</template>

<script setup>
import Chat from './components/Chat.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
</style>
