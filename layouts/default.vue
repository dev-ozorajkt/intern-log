<template>
  <div>    
    <Html :data-theme="theme">    
      <div class="min-h-screen bg-base-300">
        <div class="w-full">
          <SiteHeader class="sticky top-0 z-50"/>
          <div class="flex">
            <SideBar />
            <div class="slot-container pr-4 py-5 w-full" :class="sideExpand">              
              <slot />
            </div>
          </div>
        </div>
      </div>
    </Html>
  </div>
</template>

<script setup lang="ts">
import { Profile } from '~/types/profile'
  const colorMode = useColorMode()
  /*
  onMounted(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
       colorMode.value = 'dark'
    } else {
       colorMode.value = 'light'
    }
  })
  */
  const theme = computed(() => colorMode.value === 'light' ? 'winter' : 'night')
  const isExpand = useExpand()
  const sideExpand = computed(() => isExpand.value === true ? 'pl-72'  : 'pl-20')
  const { userData, setUserData } = useUserData()
  const user = useSupabaseUser()
  const client = useSupabaseClient()
  
  const username = ref('')
  const alias = ref('')
  const email = ref('')
  const university = ref('')
  const avatarPath = ref('')
  const isAdmin = ref(false)

  const { data: profile } = await client
    .from<Profile>('profiles')
    .select('email, user_name, university, is_admin, avatar_url, alias')
    .eq('id', user.value.id)
    .single()
  if (profile) {
    email.value = profile.email
    username.value = profile.user_name
    university.value = profile.university
    avatarPath.value = profile.avatar_url
    isAdmin.value = profile.is_admin  
    alias.value = profile.alias  
  }
  
  const response = {
    id: user.value.id,
    alias: alias.value,
    name: username.value,
    avatarPath: avatarPath.value,
    university: university.value,
    isAdmin: isAdmin.value,
    email: email.value
  }
  setUserData (response)
</script>