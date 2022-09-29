<template>
  <div>
    <Head>
      <Title>Profile</Title>
    </Head>
    <div class="wrapper px-4">
      <div class="page-title pb-6">        
        <h2 class="text-teal-500 font-montserrat font-extrabold text-3xl">Profile</h2>
      </div>
      <div class="flex rounded-sm p-10 bg-gradient-to-r from-neutral to-neutral-focus text-neutral-content justify-center max-w-screen-lg mx-auto">
        <div class="column-left flex w-1/3 justify-center items-start">
          <label for="modal-change-avatar" class="modal-button">                         
            <div class="avatar cursor-pointer relative">
              <div class="w-48 mask mask-squircle bg-base-300 p-1">
                <ProfileAvatar :path="avatar_path" class="mask mask-squircle"/>
              </div>
              <div class="edit-avatar">
                <span class="material-symbols-outlined">edit</span>
                <span class="text">Change Picture</span>
              </div>
          </div> 
          </label>
        </div>
        <div class="column-right w-2/3 text-neutral-content">          
          <ProfileForm />
        </div>
      </div>
      <!-- Modal -->
      <input type="checkbox" id="modal-change-avatar" class="modal-toggle" />
      <div class="modal">
        <ProfilePickAvatar class="modal-box max-w-md glass flex flex-col justify-center items-center p-8"/>
      </div>
    </div>    
  </div>
</template>

<script setup lang="ts">
  import { Profile } from '~/types/profile'
  const avatar_path = ref('')
  const client = useSupabaseClient()

  const { data: profile } = await client
    .from<Profile>('profiles')
    .select('avatar_url')
    .single()
  if(profile) {
    avatar_path.value = profile.avatar_url
  }
  definePageMeta({
    middleware: ["auth"]
  })
  
</script>

<style scoped>
  .edit-avatar {
    @apply absolute bg-primary rounded-full text-secondary-content p-2 flex flex-col;
    bottom: 0;
    right: 0;
  }
  .edit-avatar .text {
    display: none;
  }
  .avatar:hover .edit-avatar {
    @apply rounded-none w-full mask mask-squircle items-center justify-center bg-opacity-90;
  }
  .avatar:hover .edit-avatar .text {
    display: inline;
  }
  .avatar:hover .edit-avatar .material-symbols-outlined {
    font-size: 48px;
  }
</style>