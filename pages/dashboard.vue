<template>
  <div>    
    <Head>
        <Title>Dashboard</Title>
    </Head>
    <div v-if="!profile.university">
      Hello {{user.email}}!
      Let's complete your profile
    </div>
    <div v-else>
      Hello {{profile.user_name}}!
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Profile } from '~/types/profile'

  definePageMeta({
    middleware: ['auth'],
  })
  const user = useSupabaseUser()
  const client = useSupabaseClient()

  const { data: profile } = await client
    .from<Profile>('profiles')
    .select('email, user_name, university')
    .eq('id', user.value.id)
    .single()
   
  watchEffect(() => {
    if (!user.value) {
      return navigateTo('/')
    }
  })
  
</script>