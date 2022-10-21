<template>
    <div>
      <Head>
        <Title>Archive</Title>
      </Head>
      <NuxtPage />
    </div>
  </template>
  
  <script setup lang="ts">
  definePageMeta({
    middleware: ["auth"]
  })
  </script>
  