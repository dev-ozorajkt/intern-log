<template>
    <div>
        <div class="avatar">
            <div class="w-48 mask mask-hexagon bg-base-300 p-1">
              <ProfileAvatar :path="avatarPath" class="mask mask-hexagon h-full"/>
            </div>
        </div>
        <div class="tabs tabs-boxed w-full mt-10">
            <a class="tab tab-lg w-1/2" :class="{'tab-active': isAvatarPreset}" @click="isAvatarPreset = true">Default Preset</a> 
            <a class="tab tab-lg w-1/2" :class="{'tab-active': !isAvatarPreset}" @click="isAvatarPreset = false">Input URL</a>
        </div>
        <form class="py-4" @submit.prevent="updateAvatar">
            <div v-if="isAvatarPreset" class="flex flex-wrap justify-between gap-2">
                <div class="avatar-item w-[30%] h-24 overflow-hidden" v-for="avatar of avatars" :key="avatar.id">
                    <input type="radio" :id="avatar.id" :value="avatar.url" v-model="picked" class="fixed opacity-0 pointer-events-none"/>
                    <label :for="avatar.id" class="cursor-pointer w-full h-full">
                        <img :src="avatar.url" alt="Picked" class="object-cover w-full h-full">
                    </label>
                </div>           
            </div>
            <div v-else>
                <label for="AvatarPath">Or add your picture's URL</label>
                <input
                type="text"
                placeholder="Avatar URL"
                v-model="inputedUrl"
                class="input w-full bg-slate-300 dark:bg-slate-800 hover:border-primary focus:border-primary rounded-sm invalid:border-error invalid:text-error focus:invalid:border-error focus:invalid:ring-error"
                />       
            </div>
            <div class="button-group mt-4 display flex justify-end">               
                <button
                    @click="closeModal"
                    class="btn btn-ghost text-primary rounded-full px-6 normal-case mr-4"
                >
                    Cancel
                </button>
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
    const user = useSupabaseUser()
    const client = useSupabaseClient()
    const picked = ref('')
    const inputedUrl = ref('')
    const avatarPath = ref('')
    const newAvatarPath = ref('')
    const isAvatarPreset = ref(true)

    const emit = defineEmits(['modalStateChange'])
    const { data: profile } = await client
    .from<Profile>('profiles')
    .select('avatar_url')
    .single() 
    if (profile) {
        avatarPath.value = profile.avatar_url
    }
    
    watchEffect(() => {
        if(inputedUrl.value != '') {            
            picked.value = ''
            avatarPath.value = inputedUrl.value
            newAvatarPath.value = inputedUrl.value
        } else if(picked.value != '') {
            inputedUrl.value = ''
            avatarPath.value = picked.value
            newAvatarPath.value = picked.value
        } else {
            avatarPath.value = profile.avatar_url
            picked.value = ''
            inputedUrl.value = ''
        }
    })
   
    const { data: avatars } = await useFetch('/api/avatars')
    const closeModal = () => {
            emit('modalStateChange')
    }
    const updateAvatar = async () => {
            const { data, error } = await client.from('profiles').upsert({
            id: user.value.id,
            avatar_url: newAvatarPath.value,
            updated_at: new Date()
        })
        window.location.reload()
    }

</script>
<style scoped>
    .avatar-item>input:focus+label {
        @apply border-2 border-accent flex
    }
</style>