<template>
    <div>
      <h1 class="text-4xl mb-5 text-center font-montserrat font-extrabold text-teal-500">&#123;daily-log&#125;</h1>
      <form
        @submit.prevent="() => (isSignUp ? signUp() : login())"
        class="flex flex-col gap-2"
      >
      <div class="form-control w-full">
        <div v-if="isError" class="alert alert-error rounded-sm">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Invalid email or password!</span>
          </div>
        </div>
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="email" placeholder="e.g user@example.com" v-model="email" class="input bg-slate-300 dark:bg-slate-800 hover:border-primary focus:border-primary rounded-sm invalid:border-error invalid:text-error
      focus:invalid:border-error focus:invalid:ring-error" />
      </div>

      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input type="password" placeholder="Input Password" v-model="password" class="input bg-slate-300 dark:bg-slate-800 hover:border-primary focus:border-primary rounded-sm" />
      </div>
        <button type="submit" class="p-2 text-white btn-primary rounded-full mt-5" :class="{ 'btn-disabled': isEmpty }">
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
    const isError = ref(false)
    const isEmpty = ref(true)
    const client = useSupabaseClient()

    watchEffect(() => {
    if (email.value && password.value) {
        isEmpty.value = false
    } else {
      isEmpty.value = true
    }
    })
    const signUp = async () => {
      const { user, error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
      })
      console.log('error', error)
    }
    const login = async () => {
      try {
        const { error } = await client.auth.signIn({
          email: email.value,
          password: password.value,
        })
        if (error) throw error
      } catch (error) {
        isError.value = true
      }
    }
  </script>