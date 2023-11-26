<template>
    <div>
        <h1 v-for="a in hi">{{ a.username }}</h1>
    </div>
</template>

<script setup>
import { ref,onBeforeMount } from 'vue'
import axios from '../util/axios.js'


const hi = ref('')

onBeforeMount(async() => {
    try{
        const follows = await axios.get('/myfollows')
        hi.value=follows.data
    } catch(err){
        alert(err)
    }
})

</script>