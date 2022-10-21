<template>
    <div>
        <Head>
            <Title>Logs</Title>
        </Head>
        <NuxtPage />
    </div>
</template>
  
<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
})
</script>
  