<template>
    <div>
        <Head>
            <Title>Project</Title>
        </Head>
        <NuxtPage />
    </div>
</template>
  
<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
})
</script>
  