<template>
  <Html :data-theme="theme">    
    <div class="min-h-screen">
      <div class="max-w-screen-xl mx-auto">
        <SiteHeader />
        <slot />
      </div>
    </div>
  </Html>
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