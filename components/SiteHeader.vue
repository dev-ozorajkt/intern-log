<template>
  <header class="flex items-center justify-between w-full py-8 text-black dark:text-slate-50">
    <NuxtLink to="/">Untitled Demo</NuxtLink>
    <button
      @click="toggleDark"
    >
      <span class="material-symbols-outlined">{{ colorModeIcon }}</span>
    </button>    
    <div v-if="user">
      Hello {{ user?.email }}
    </div>
   <!-- <h1>Color mode: {{ $colorMode.value }}</h1>
     <select v-model="colorMode.preference" class="p-2 bg-white dark:bg-gray-600 rounded">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select> -->
    <button
      v-if="user"
      @click="logout"
      class="px-4 py-2 rounded hover:bg-gray-800"
    >
      Log out
    </button>
  </header>
</template>

<script setup lang="ts"> 

  onMounted(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      colorMode.value = 'dark'
    } else {
      colorMode.value = 'light'
    }
  })
  const router = useRouter()  
  const client = useSupabaseClient()
  const user = useSupabaseUser()
  const colorMode = useColorMode()
  const toggleDark = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
  const colorModeIcon = computed(() => colorMode.preference === 'light' ? 'dark_mode' : 'light_mode')
  const logout = async () => {
    await client.auth.signOut()
    router.push('/')
  }
    
  useHead({
    link: [
      { 
        rel: 'preconnect', 
        href: 'https://fonts.googleapis.com'
      },
      { 
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,0', 
        crossorigin: '' 
      }
    ]
  })

</script>
    