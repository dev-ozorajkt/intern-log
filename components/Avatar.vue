<template>
    <div>
        <img 
            v-if="!avatar_path"
            :src="avatar_default"
            alt="Avatar"
        >
        <img 
            v-else
            :src="avatar_path"
            alt="Avatar"
        >

    </div>
</template>

<script setup lang="ts">
    const client = useSupabaseClient()
    const user = useSupabaseUser()
    
    const avatar_path = ref('')
    const avatar_default = ref('https://res.cloudinary.com/ozrcloud/image/upload/v1661933551/temporary/default.png')
    const { data } = await client
    .from('profiles')
    .select('avatar_url')
    .eq('id', user.value.id)
    .single()
    if (data) {
        avatar_path.value = data.avatar_url    
    }
</script>