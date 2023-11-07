<template>
    <div class="w-[21rem] hidden md:flex md:flex-col bg-gray-800 h-[calc(100vh-4rem)] p-2">
        <div class="overflow-x-auto h-full" id="scroll2">
            <h1 v-for="message in arr">curuser: {{ message.message }}</h1>
            <div class="grow"></div>
        </div>
        <input type="text" v-model="input" @keyup.enter="sendmessage" class="bg-gray-800 outline-none border hover:border-gray-300 ring-violet-500 focus:ring-2 focus:ring focus:border-violet-500 rounded py-1.5 px-6 border-gray-400 my-2 transition-all">
        <div class="flex">
            <div class="grow"></div>
            <button @click="sendmessage" class="px-3 py-1 rounded bg-violet-500 hover:bg-violet-600">chat</button>
        </div>
    </div>
</template>

<script setup>
import { ref,watch } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute()

const arr = ref([])
const input = ref('')


watch(route,()=>{
    arr.value = []
})



const socket = new WebSocket("ws://localhost:3000")

socket.addEventListener('open', (e)=>{
    console.log('connected')
})

socket.addEventListener('message',(e)=>{
    const data = JSON.parse(e.data);
    if(data.stream === route.params.username){
        arr.value.push(data)
        const scroll = document.getElementById('scroll2')
        if(scroll.scrollHeight - scroll.clientHeight !== 0){
            scroll.scrollTo(0,scroll.scrollHeight)
        }
    }
})



function sendmessage(){
    if(input.value !== ''){
        socket.send(JSON.stringify({message:input.value, stream:route.params.username}))
        input.value = '';
    }
}

</script>

<style scoped>

#scroll2::-webkit-scrollbar{
    display:none;
}


</style>