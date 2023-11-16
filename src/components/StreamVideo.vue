<template>
    <video ref="video" class="absolute w-full h-full" autoplay muted="muted"></video>
</template>

<script setup>
// import videojs from 'video.js';
import Hls from 'hls.js';
import { ref, onMounted, onBeforeUnmount,watch } from 'vue';
import { useRoute } from'vue-router'

const route = useRoute()


const emit = defineEmits(['player'])



const video = ref(null)

let hls;

const config = {
    liveSyncDurationCount:2,
}

onMounted(()=>{
    if(Hls.isSupported()){
        hls = new Hls(config)
        hls.loadSource(`http://localhost:8000/live/${route.params.username}/index.m3u8`)
        hls.attachMedia(video.value)
    }
    emit('player', video)
})

onBeforeUnmount(()=>{
    hls.destroy()
})

watch(route,()=>{
    hls.loadSource(`http://localhost:8000/live/${route.params.username}/index.m3u8`)
    hls.attachMedia(video.value)
})

</script>


<style scoped>

/*@import url('https://vjs.zencdn.net/8.6.1/video-js.css');*/

</style>