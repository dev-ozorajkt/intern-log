<template>
    <div>

        <Head>
            <Title>{{ profile.user_name }}</Title>
        </Head>
        <div class="wrapper max-w-screen-lg mx-auto">
            <div class="page-title pb-6 flex justify-between">
                <h2 class="text-teal-500 font-montserrat font-extrabold text-3xl">Profile</h2>
            </div>
            <ProfileCard :isProfileOwner="isProfileOwner" :avatarPath="profile.avatar_url" :isAdmin="profile.is_admin" :alias="alias" />

            <LogTodaySingle v-if="!profile.is_admin" />
        </div>

    </div>
</template>
<script setup lang="ts">
import { Profile } from '~/types/profile'
const route = useRoute()
const client = useSupabaseClient()
const { userData } = useUserData()
const isProfileOwner = ref(false)
const alias = ref('')
const isToday = ref(true)

const { data: profile } = await client
    .from<Profile>('profiles')
    .select('*')
    .filter('alias', 'eq', route.params.id)
    .single()
alias.value = profile.alias

if (userData.value.alias === alias.value) {
    isProfileOwner.value = true
    await navigateTo('/profile')
}
</script>
<style scoped>

</style>