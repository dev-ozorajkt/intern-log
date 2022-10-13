<template>
    <div>
        <p>{{ project.title }}</p>
        <p>{{ project.summary }}</p>
    </div>
</template>
<script setup lang="ts">
import { Project } from '~/types/project'
    const route = useRoute()
    const client = useSupabaseClient()
    const test = ref('')
     console.log(route.params.id)

     const { data: project } = await client
    .from<Project>('projects')
    .select('*')
    .filter('id', 'eq', route.params.id)
    .single() 
</script>