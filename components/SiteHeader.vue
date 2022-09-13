<template>
  <div>
    <header class="flex items-center justify-between w-full px-4 py-2 bg-base-100 backdrop-blur-xl">
      <!-- LEFT -->
      <div>
        <NuxtLink to="/dashboard">
          <span class="font-montserrat font-extrabold text-teal-500 text-3xl">&#123;daily-log&#125;</span>
        </NuxtLink>
        <span class="bg-slate-300 dark:bg-slate-800 rounded-full text-neutral-50 text-xs font-normal ml-3 py-1 px-3">v1.0.0-alpha</span>
      </div>
      <!-- RIGHT -->
      <div class="flex items-center">
        <div class="dropdown dropdown-end">
          <label class="profile-info hover:bg-neutral hover:cursor-pointer flex flex-nowrap items-center px-5 py-2 rounded-full" tabindex="0">                  
            <div class="avatar order-last">
              <div class="w-10 mask mask-hexagon">
                <Avatar />
              </div>
            </div>          
            <div class="mr-2 text-right flex flex-col">
              <div class="text-base">                
                <span v-if="!profile.user_name">
                  {{ user?.email }}
                </span>
                <span v-else>
                  {{ profile.user_name }}
                </span>
              </div>
              <div class="text-xs">
                Test University             
                <span v-if="profile.university">
                  {{ profile.university }}
                </span>
              </div>
            </div>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><NuxtLink to="/profile">Profile</NuxtLink></li>
            <li>
              <button
                v-if="user"
                @click="logout"
                class="px-4 py-2 rounded hover:bg-gray-800"
              >
                Log out
              </button>
            </li>          
          </ul>
        </div>      
        <ThemeToggler />
      </div>
    <!-- <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="colorMode.preference" class="p-2 bg-white dark:bg-gray-600 rounded">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select> -->
    </header>
  </div>  
</template>

<script setup lang="ts"> 
  import { Profile } from '~/types/profile'
  const router = useRouter()  
  const client = useSupabaseClient()
  const user = useSupabaseUser()
 
  const logout = async () => {
    await client.auth.signOut()
    router.push('/')
  }

  const { data: profile } = await useAsyncData(
  'profile',
    async () => {
      const { data } = await client
      .from<Profile>('profiles')
      .select('email, user_name, university, avatar_url, is_admin')
      .eq('id', user.value.id)
      .single()
      
      return data
  })
</script>
    