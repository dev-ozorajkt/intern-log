<template>
  <Head>
    <Title>Login</Title>
  </Head>
  <!-- <div v-if="user">
      Welcome {{ user?.email }}
  </div>   -->
  <div>    
    <Login />
  </div>
</template>

<script setup lang="ts">

  const client = useSupabaseClient()
  const user = useSupabaseUser()
  const router = useRouter()

  watchEffect(() => {
    if (user.value) {
      router.push('/profile')
    }
  })
</script>