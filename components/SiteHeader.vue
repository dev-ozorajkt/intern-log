<template>
  <header class="flex items-center justify-between w-full py-8 text-black dark:text-slate-50">
    <NuxtLink to="/">Untitled Demo</NuxtLink>
    <div v-if="user">
      Hello {{ user?.email }}
    </div>
    <!-- <h1>Color mode: {{ $colorMode.value }}</h1> -->
    <select v-model="colorMode.preference" class="p-2 bg-white dark:bg-gray-600 rounded">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    <button
      v-if="user"
      @click="logout"
      class="px-4 py-2 rounded hover:bg-gray-800"
    >
      Log out
    </button>
  </header>
</template>

<script setup lang="ts">
  const router = useRouter()  
  const client = useSupabaseClient()
  const user = useSupabaseUser()
  const colorMode = useColorMode()
  const logout = async () => {
    await client.auth.signOut()
    router.push('/')
  }
  console.log(colorMode.preference)
</script>
    