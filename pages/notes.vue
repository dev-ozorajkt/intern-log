<template>
    <div>
        <p class="mt-8 mb-16">Hello {{ user?.email }}</p>
    
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
      middleware: ['auth'],
    })
    const user = useUser()
    onMounted(() => {
      watchEffect(() => {
        if (!user.value) {
          navigateTo('/')
        }
      })
    })
</script>