<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn m-1 btn-ghost btn-sm rounded-full"><span class="material-symbols-outlined">{{ colorModeIcon }}</span></label>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <a :class="{ active: currOption === 'system' }" @click="pickTheme('system')">
        <span class="material-symbols-outlined">monitor</span>System
        </a>
      </li>
      <li>
        <a :class="{ active: currOption === 'light' }" @click="pickTheme('light')">
          <span class="material-symbols-outlined">light_mode</span>Light
        </a>
      </li>
      <li>
        <a :class="{ active: currOption === 'dark' }" @click="pickTheme('dark')">
          <span class="material-symbols-outlined">dark_mode</span>Dark
        </a>
      </li>
    </ul>
  </div>
    <!-- <button
      @click="toggleDark"
    >
      <span class="material-symbols-outlined">{{ colorModeIcon }}</span>
    </button>   -->
</template>

<script setup lang="ts">
    const currOption = ref('')
    currOption.value = 'system'
    onMounted(() => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        colorMode.value = 'dark'
      } else {
        colorMode.value = 'light'
      }
    })
    const colorMode = useColorMode()
    //const toggleDark = () => {
     // colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
   // }
   const pickTheme = (option: string) => {
      currOption.value = option
      colorMode.preference = option
      if (option === 'light') {
        localStorage.theme = 'light'
      } else if (option === 'dark') {
        localStorage.theme = 'dark'
      } else {
        localStorage.removeItem('theme')
      }
   }
    const colorModeIcon = computed(() => colorMode.value === 'light' ? 'light_mode' : 'dark_mode')
      
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