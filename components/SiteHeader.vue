<template>
  <div>
    <header class="flex items-center justify-between w-full px-4 py-2 bg-base-100/50 backdrop-blur-xl border-b border-blue-100 dark:border-slate-800 sticky top-0 z-50">
      <!-- LEFT -->
      <div>
        <button class="btn btn-square btn-ghost" @click="toggleExpand">
          <span class="material-symbols-outlined">
          menu
          </span>
        </button>
        <NuxtLink to="/dashboard">
          <span class="font-montserrat font-extrabold text-teal-500 text-3xl">&#123;daily-log&#125;</span>
        </NuxtLink>
        <span class="bg-slate-300 dark:bg-slate-800 rounded-full text-neutral-50 text-xs font-normal ml-3 py-1 px-3">pre-alpha</span>
      </div>
      <!-- RIGHT -->
      <div class="flex items-center">
        <div class="dropdown dropdown-end">
          <label class="profile-info hover:bg-neutral hover:text-neutral-content hover:cursor-pointer flex flex-nowrap items-center px-5 py-2 rounded-full" tabindex="0">                  
            <div class="avatar order-last">
              <div class="w-10 mask mask-hexagon">
                <ProfileAvatar :path="userData.avatarPath" class="h-full"/>
              </div>
            </div>          
            <div class="mr-2 text-right flex flex-col">
              <div class="text-base">                
                <span v-if="!userData.name">
                  {{ user?.email }}
                </span>
                <span v-else>
                  {{ userData.name }}
                </span>
              </div>
              <div v-if="userData.isAdmin == true" class="text-xs">
                Admin
              </div>
              <div v-else class="text-xs">
                <span v-if="userData.university">
                  {{ userData.university }}
                </span>
                Intern
              </div>
            </div>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-neutral text-neutral-content rounded w-52">
            <li><NuxtLink to="/profile">Profile</NuxtLink></li>
            <li>
              <button
                v-if="user"
                @click="logout"
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
  const isExpand = useExpand()
  const { userData } = useUserData()
  /*
  const username = ref('')
  const email = ref('')
  const university = ref('')
  const avatar_path = ref('')
  const isAdmin = ref(false)
  */
  const logout = async () => {
    await client.auth.signOut()
    router.push('/')
  }

  /*
  const { data: profile } = await client
    .from<Profile>('profiles')
    .select('email, user_name, avatar_url, university, is_admin')
    .eq('id', user.value.id)
    .single() 
  if (profile) {
    email.value = profile.email
    username.value = profile.user_name
    university.value = profile.university
    avatar_path.value = profile.avatar_url
    isAdmin.value = profile.is_admin
  }
  */
  const toggleExpand = () => {
    isExpand.value = !isExpand.value    
    //console.log(useExpand().value)
  }
</script>
    