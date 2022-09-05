<template>
    <Head>
        <Title>Dashboard</Title>
    </Head>
    <Avatar />
</template>

<script setup lang="ts">
    definePageMeta({
        middleware: ['auth'],
    })
  const client = useSupabaseClient()
  const user = useSupabaseUser()
  const router = useRouter()
  
  watchEffect(() => {
    if (!user.value) {
      router.push('/')
    }
  })
</script>