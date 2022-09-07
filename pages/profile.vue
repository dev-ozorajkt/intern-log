<template>
  <div>
    <Head>
      <Title>Profile</Title>
    </Head>
    <p v-if="!username" class="mt-8 mb-16">Hello {{ user?.email }}</p>
    <p v-else class="mt-8 mb-16">Hello {{ username }}</p>
    <Avatar />
    <form
      @submit.prevent="updateProfile"
      class="flex flex-col gap-2"
    >
      <input
        type="email"
        placeholder="Email"
        :value="email"
        class="p-2 bg-gray-600 rounded"
      />
      <input
        type="text"
        placeholder="Name"
        v-model="username"
        class="p-2 bg-gray-600 rounded"
      />
      <input
        type="text"
        placeholder="Avatar URL"
        v-model="avatar_path"
        class="p-2 bg-gray-600 rounded"
      />
      <input
        v-if="!isAdmin"
        type="text"
        placeholder="University"
        v-model="university"
        class="p-2 bg-gray-600 rounded"
      />
      <button 
        type="submit" 
        class="p-2 text-white bg-green-500 rounded"
      >
        Update
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { Profile } from '~/types/profile'

  definePageMeta({
    middleware: ["auth"]
  })
  const client = useSupabaseClient()
  const user = useSupabaseUser()
  const router = useRouter()
         
  const username = ref('')
  const email = ref('')
  const university = ref('')
  const avatar_path = ref('')
  const isAdmin = ref(false)

    
  const { data } = await client
  .from('profiles')
  .select('email, user_name, university, avatar_url, is_admin')
  .eq('id', user.value.id)
  .single()    

  if (data) {
    email.value = data.email
    username.value = data.user_name
    university.value = data.university
    avatar_path.value = data.avatar_url
    isAdmin.value = data.is_admin
  }   
  
  const updateProfile = async () => {
    const { data, error } = await client.from('profiles').upsert({
      id: user.value.id,
      user_name: username.value,
      university: university.value,
      avatar_url: avatar_path.value,
      updated_at: new Date()
    })
    window.location.reload()
  }
  
    /*

    let { data } = await client
      .from('profiles')
      .select(`user_name, university, avatar_url`)
      .eq('id', user.value.id)
      .single()
      if (data) {
        username.value = data.user_name
        university.value = data.university
        avatar_path.value = data.avatar_url
      } 
    
    async function updateProfile() {
      try {
          const user = useUser();
          const updates = {
              id: user.value.id,
              user_name: username.value,
              university: university.value,
              avatar_url: avatar_path.value,
              updated_at: new Date(),
          }
          let { error } = await client.from('profiles').upsert(updates, {
              returning: 'minimal', // Don't return the value after inserting
          })
          if (error) throw error
      } catch (error) {
          alert(error.message)
      }
  }

  */
</script>