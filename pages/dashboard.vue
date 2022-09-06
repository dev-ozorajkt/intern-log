<template>
  <div>    
    <Head>
        <Title>Dashboard</Title>
    </Head>
    <Avatar />
    <div></div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: ['auth'],
  })
  const user = useSupabaseUser()
  
  watchEffect(() => {
    if (!user.value) {
      navigateTo('/')
    }
  })
</script>