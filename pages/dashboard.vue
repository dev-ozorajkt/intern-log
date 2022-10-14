<template>
  <div>    
    <Head>
        <Title>Dashboard</Title>
    </Head>
    <div class="wrapper pl-4 pr-1 flex justify-between">
      <div class="left-column w-[75%]">
        <div v-if="!isProfileComplete" class="alert alert-warning shadow-lg rounded mb-10">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span>Before you continue, please complete your profile <NuxtLink to="/profile" class="link hover:bg-warning-content hover:text-blue-200">here</NuxtLink></span>
          </div>
        </div>
        <DashboardWelcome :username="username" :isAdmin="isAdmin"/>
        
      </div>
      <div class="right-column w-[24%] p-4 bg-base-100 rounded">        
        <Calendar />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Profile } from '~/types/profile'

  definePageMeta({
    middleware: ['auth'],
  })
  const user = useSupabaseUser()
  const client = useSupabaseClient()
  
  const username = ref('')
  const email = ref('')
  const university = ref('')
  const avatar_path = ref('')
  const isAdmin = ref(false)

  const { data: profile } = await client
    .from<Profile>('profiles')
    .select('email, user_name, university, is_admin')
    .eq('id', user.value.id)
    .single()
  if (profile) {
    email.value = profile.email
    username.value = profile.user_name
    university.value = profile.university
    avatar_path.value = profile.avatar_url
    isAdmin.value = profile.is_admin
  }

  const isProfileComplete = computed<boolean>(() => {
    if(isAdmin.value) {
      if(!username.value) return false
      else return true
    }else{
      if(!username.value || !university.value) return false
      else return true
    }
  })
  watchEffect(() => {
    if (!user.value) {
      return navigateTo('/')
    }
  })
  
</script>