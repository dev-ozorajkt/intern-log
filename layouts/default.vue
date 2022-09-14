<template>
  <div>    
    <Html :data-theme="theme">    
      <div class="min-h-screen bg-base-100">
        <div class="w-full">
          <SiteHeader class="sticky top-0"/>
          <div class="px-4">
            <SideBar />
            <div class="slot-container pl-72 py-5">              
              <slot />
            </div>
          </div>
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