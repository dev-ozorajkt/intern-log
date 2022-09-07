<template>
    <button
      @click="toggleDark"
    >
      <span class="material-symbols-outlined">{{ colorModeIcon }}</span>
    </button>  
</template>

<script setup lang="ts"> 

    onMounted(() => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        colorMode.value = 'dark'
      } else {
        colorMode.value = 'light'
      }
    })
    const colorMode = useColorMode()
    const toggleDark = () => {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
    const colorModeIcon = computed(() => colorMode.preference === 'light' ? 'dark_mode' : 'light_mode')
      
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