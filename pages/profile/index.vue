<template>
    <div>
        <Head>
            <Title>Profile</Title>
        </Head>        
        <div class="wrapper max-w-screen-lg mx-auto">
            <div class="page-title pb-6 flex justify-between">        
                <h2 class="text-teal-500 font-montserrat font-extrabold text-3xl">Profile</h2>
            </div>
            <ProfileCard :isProfileOwner="isProfileOwner" :avatarPath="avatar_path" :isAdmin="userData.isAdmin" :alias="alias" />

            <LogTodaySingle v-if="!userData.isAdmin" />

        </div>
    </div>
</template>
  
<script setup lang="ts">
import { Profile } from '~/types/profile'
const avatar_path = ref('')
const alias = ref('')
const client = useSupabaseClient()
const user = useSupabaseUser()
const isProfileOwner = ref(true)

const { userData } = useUserData()
avatar_path.value = userData.value.avatarPath
alias.value = userData.value.alias

/*
const { data: profile } = await client
  .from<Profile>('profiles')
  .select('avatar_url')
  .eq('id', user.value.id)
  .single()
if(profile) {
  avatar_path.value = profile.avatar_url
}
*/
definePageMeta({
    middleware: ["auth"]
})

</script>
  
<style scoped>
.edit-avatar {
    @apply absolute bg-primary rounded-full text-secondary-content p-2 flex flex-col;
    bottom: 0;
    right: 0;
}

.edit-avatar .text {
    display: none;
}

.avatar:hover .edit-avatar {
    @apply rounded-none w-full mask mask-squircle items-center justify-center bg-opacity-90;
}

.avatar:hover .edit-avatar .text {
    display: inline;
}

.avatar:hover .edit-avatar .material-symbols-outlined {
    font-size: 48px;
}
.tab {
    @apply h-auto px-4 py-2 rounded-tl rounded-tr
}

.tab-active {
    @apply bg-primary text-primary-content font-bold
}
</style>