<template>
  <div>
    <Head>
    <Title>Login</Title>
  </Head>
  <!-- <div v-if="user">
      Welcome {{ user?.email }}
  </div>   -->
  <div>    
    <Login />
  </div>
  </div>  
</template>

<script setup lang="ts">

  const client = useSupabaseClient()
  const user = useSupabaseUser()

  watchEffect(() => {
    if (user.value) {
      navigateTo('/profile')
    }
  })
</script>