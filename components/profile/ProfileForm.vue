<template>
    <div>             
      <form v-if="isEditMode"
        @submit.prevent="updateProfile"
        class="flex flex-col gap-2"
        >        
        <label for="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          v-model="username"
          class="p-2 bg-gray-600 rounded"
        />
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          :value="email"
          class="p-2 bg-gray-600 rounded"
        />
        <label for="university" v-if="!isAdmin">University</label>
        <input
          v-if="!isAdmin"
          type="text"
          placeholder="University"
          v-model="university"
          class="p-2 bg-gray-600 rounded"
        />
        <div class="button-group my-4">
          <button 
          @click="isEditMode = !isEditMode"
          class="btn btn-ghost text-primary rounded-full px-6 normal-case mr-4">
            Cancel
          </button>
          <button 
            type="submit" 
            class="btn btn-primary rounded-full px-6 normal-case"
          >
            Save Change
          </button>
        </div>        
      </form>
      <div v-if="!isEditMode" class="profile-info">        
        <table class="table-fixed w-full mb-6">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{{ username }}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{{ email }}</td>
            </tr>
            <tr v-if="!isAdmin">
              <td>University</td>
              <td>{{ university }}</td>
            </tr>
          </tbody>
        </table>
        <button 
        @click="isEditMode = !isEditMode"
        class="btn btn-outline btn-primary rounded-full px-6 normal-case">
          Edit Profile
        </button>
      </div>
    </div>

</template>
<script setup lang="ts">
    import { Profile } from '~/types/profile'
    const client = useSupabaseClient()
    const user = useSupabaseUser()
    const isEditMode = ref(false)            
    const username = ref('')
    const email = ref('')
    const university = ref('')
    const isAdmin = ref(false)
        
    const { data: profile } = await client
    .from<Profile>('profiles')
    .select('email, user_name, university, is_admin')
    .eq('id', user.value.id)
    .single()    

    if (profile) {
        email.value = profile.email
        username.value = profile.user_name
        university.value = profile.university
        isAdmin.value = profile.is_admin
    }
    const updateProfile = async () => {
        const { data, error } = await client.from('profiles').upsert({
        id: user.value.id,
        user_name: username.value,
        university: university.value,
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
<style scoped>
  .profile-info table tr td{
    @apply w-1/2 border-b border-neutral-content py-4;
  }
</style>