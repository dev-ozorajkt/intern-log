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
  const colorMode = useColorMode()
  onMounted(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
       colorMode.value = 'dark'
    } else {
       colorMode.value = 'light'
    }
  })

  const theme = computed(() => colorMode.value === 'light' ? 'winter' : 'night')
  const isExpand = useExpand()
  const sideExpand = computed(() => isExpand.value === true ? 'pl-72'  : 'pl-20')
  

  const myState = useState('me', () => ({
    email: 'test@email',
    isAdmin: true,
    username: 'test',
  }));
</script>