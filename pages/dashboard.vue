<template>
  <div>    
    <Head>
        <Title>Dashboard</Title>
    </Head>
    <div class="wrapper px-4">    
      <div v-if="!profile.university" class="alert alert-warning shadow-lg rounded">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span>Before you continue, please complete your profile <NuxtLink to="/profile" class="link hover:bg-warning-content hover:text-blue-200">here</NuxtLink></span>
        </div>
      </div>
      <div class="bg-gradient-to-tr from-secondary to-secondary-focus rounded mt-10">        
        <div class="rounded flex glass">
          <div class="w-56 flex flex-none ml-4 relative">
            <figure class="absolute w-full -bottom-5"><img src="/img/dash-main.svg" alt="Dashboard" /></figure>
          </div>         
          <div class="text-secondary-content flex flex-wrap items-center w-full ml-8 py-10">
            <div class="flex flex-col">              
              <h2 class="text-3xl">Hello<span v-if="profile.user_name">, {{profile.user_name}}</span>!</h2>
              <p class="flex-none">Currently you have no ongoing project.&#10024;</p>
            </div>
          </div>
        </div>
      </div>
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