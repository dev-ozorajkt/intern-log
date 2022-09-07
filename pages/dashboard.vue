<template>
  <div>    
    <Head>
        <Title>Dashboard</Title>
    </Head>
    <Avatar 
      :path="profile.avatar_url"
      class="w-16 h-16"
    />
    <div>{{profile.user_name}}</div>
  </div>
</template>

<script setup lang="ts">
  import { Profile } from '~/types/profile'

  definePageMeta({
    middleware: ['auth'],
  })
  const user = useSupabaseUser()
  const client = useSupabaseClient()
  //https://v3.nuxtjs.org/api/composables/use-async-data
  const { data: profile } = await useAsyncData(
  'profile',
  async () => {
    const { data } = await client
    .from<Profile>('profiles')
    .select('email, user_name, university, avatar_url, is_admin')
    .eq('id', user.value.id)
    .single()
    
    return data
  })


  /*
  watchEffect(() => {
    if (!user.value) {
      return navigateTo('/')
    }
  })
  */
</script>