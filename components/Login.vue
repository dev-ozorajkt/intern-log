<template>
    <div>
      <h1 class="text-4xl mb-5 text-center font-montserrat font-extrabold text-teal-500">daily-log</h1>
      <form
        @submit.prevent="() => (isSignUp ? signUp() : login())"
        class="flex flex-col gap-2"
      >
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="email" placeholder="e.g user@example.com" v-model="email" class="input bg-slate-300 dark:bg-slate-800 hover:border-primary focus:border-primary" />
      </div>

      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input type="password" placeholder="Input Password" v-model="password" class="input bg-slate-300 dark:bg-slate-800 hover:border-primary focus:border-primary" />
      </div>
        <button type="submit" class="p-2 text-white btn-primary rounded mt-5">
          <span v-if="isSignUp"> Sign up </span>
          <span v-else> Login </span>
        </button>
      </form>
      <button
        @click="isSignUp = !isSignUp"
        class="w-full mt-8 text-sm text-center underline text-content"
      >
        <span v-if="isSignUp"> Have an account? Log in instead </span>
        <span v-else> Create a new account </span>
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
    definePageMeta({
      middleware: ['auth'],
    })
    const email = ref('')
    const password = ref('')
    const isSignUp = ref(false)
    const client = useSupabaseClient()
    const signUp = async () => {
      const { user, error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
      })
      console.log('error', error)
    }
    const login = async () => {
      const { user, error } = await client.auth.signIn({
        email: email.value,
        password: password.value,
      })
      console.log('error', error)
    }
  </script>