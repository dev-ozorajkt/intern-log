<template>
  <div class="bg-index min-h-full py-10">
  <Head>
    <Title>Login</Title>
  </Head>
  <!-- <div v-if="user">
      Welcome {{ user?.email }}
  </div>   -->
  <div class="max-w-md mx-auto p-5 bg-gray-200/20 dark:bg-gray-700/70 rounded backdrop-blur-sm drop-shadow-lg" >    
    <Login />
  </div>
  </div>  
</template>

<script setup lang="ts">

  const client = useSupabaseClient()
  const user = useSupabaseUser()
  definePageMeta({
    layout: "login",
  });
  watchEffect(() => {
    if (user.value) {
      navigateTo('/profile')
    }
  })
</script>
