<template>
  <div>
    <NuxtLayout name="login">        
    <div class="bg-index min-h-full py-10">
      <Head>
        <Title>Login</Title>
      </Head>
      <div class="max-w-md mx-auto p-5 bg-gray-200/20 dark:bg-gray-700/70 rounded backdrop-blur-sm drop-shadow-lg" >    
        <Login />
      </div>
    </div>  
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

  const client = useSupabaseClient()
  const user = useSupabaseUser()
  definePageMeta({
    layout: false,
  });
  watchEffect(() => {
    if (user.value) {
      navigateTo('/dashboard')
    }
  })
</script>
