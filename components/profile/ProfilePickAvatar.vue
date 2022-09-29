<template>
    <div>
        <div class="avatar">
            <div class="w-48 mask mask-hexagon bg-base-300 p-1">
              <ProfileAvatar :path="avatarPath" class="mask mask-hexagon h-full"/>
            </div>
        </div>
        <div class="tabs w-full mt-10">
            <a class="tab tab-lg tab-lifted w-1/2" :class="{'tab-active': isAvatarPreset}" @click="isAvatarPreset = true">Default Preset</a> 
            <a class="tab tab-lg tab-lifted w-1/2" :class="{'tab-active': !isAvatarPreset}" @click="isAvatarPreset = false">Input URL</a>
        </div>
        <form class="py-4 px-2" @submit.prevent="updateAvatar">
            <div v-if="isAvatarPreset" class="flex flex-wrap justify-between gap-2">
                <div class="avatar-item w-[30%] h-24 overflow-hidden" v-for="avatar of avatars" :key="avatar.id">
                    <input type="radio" :id="avatar.id" :value="avatar.url" v-model="picked" class="fixed opacity-0 pointer-events-none"/>
                    <label :for="avatar.id" class="cursor-pointer w-full h-full">
                        <img :src="avatar.url" alt="Picked" class="object-cover w-full h-full">
                    </label>
                </div>           
            </div>
            <div v-else>
                <label for="newAvatarPath">Or add your picture's URL</label>
                <input
                type="text"
                placeholder="Avatar URL"
                v-model="newAvatarPath"
                class="p-2 bg-gray-600 rounded w-full my-2"
                />       
            </div>
            <div class="button-group mt-4 display flex justify-end">
               
                <label for="modal-change-avatar" class="btn btn-ghost text-primary rounded-full px-6 normal-case mr-4">Cancel</label>
                <button 
                    type="submit" 
                    class="btn btn-primary rounded-full px-6 normal-case"
                >
                    Save Change
                </button>
            </div> 
        </form>
    </div>
</template>
<script setup lang="ts">
    import { Profile } from '~/types/profile'
    
    const client = useSupabaseClient()
    const picked = ref('')
    const avatarPath = ref('')
    const newAvatarPath = ref('')
    const isAvatarPreset = ref(true)

    const { data: profile } = await client
    .from<Profile>('profiles')
    .select('avatar_url')
    .single() 
    if (profile) {
        avatarPath.value = profile.avatar_url
    }
    watchEffect(() => {
        if(!isAvatarPreset.value) {            
            picked.value = null
            avatarPath.value = newAvatarPath.value
        } else {
            newAvatarPath.value = null
            avatarPath.value = picked.value
        }
    })
   
    const { data: avatars } = await useFetch('/api/avatars')
    const updateAvatar = async () => {
            const { data, error } = await client.from('profiles').upsert({
            avatar_url: avatarPath.value,
            updated_at: new Date()
        })
    }

</script>
<style scoped>
    .avatar-item>input:focus+label {
        @apply border-2 border-accent flex
    }
</style>