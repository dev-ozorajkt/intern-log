<template>
  <div>
    <Head>
      <Title>Profile</Title>
    </Head>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
})
</script>
