<template>
    <div>        
            <img 
                v-if="!path"
                :src="avatar_default"
                class="w-full"
                alt="Avatar"
            >
            <img 
                v-else
                :src="path"
                alt="Avatar"
            >
    </div>
</template>

<script setup lang="ts">
    const props = defineProps(['path'])
    const { path } = toRefs(props)    
    const avatar_default = ref('https://res.cloudinary.com/ozrcloud/image/upload/v1661933551/temporary/default.png')
</script>