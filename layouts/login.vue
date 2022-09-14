<template>
  <div>    
    <Html :data-theme="theme">    
      <div class="min-h-screen bg-base-100 bg-index">
        <div class="w-full">
          <slot />
        </div>
      </div>
    </Html>
  </div>
  </template>
  
  <script setup lang="ts">
    const colorMode = useColorMode()
    onMounted(() => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
         colorMode.value = 'dark'
      } else {
         colorMode.value = 'light'
      }
    })
  
    const theme = computed(() => colorMode.value === 'light' ? 'winter' : 'night')
  </script>
  
  <style scoped>
    .bg-index {
      background: url(/img/abstract.svg) no-repeat;
      background-size: cover;
      background-position: 0 -15px;
    }
  </style>