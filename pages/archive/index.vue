<template>
    <div>
        <Head>
            <Title>Archive</Title>
        </Head>
        <div class="wrapper px-4">
            <div class="page-title pb-6 flex justify-between">        
                <h2 class="text-teal-500 font-montserrat font-extrabold text-3xl">Archive</h2>
            </div>
            <div class="project-list flex gap-8">                
                <div v-for="project in projects" :key="project.shortkey" class="w-[30%]">
                    <NuxtLink :to="`/project/${project.shortkey}`">                    
                        <ProjectCard />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Project } from '~/types/project'
import dayjs from 'dayjs'

const client = useSupabaseClient()

const { data: projects } = await client
    .from<Project>('projects')
    .select('*')
    .filter('is_complete', 'eq', true)

</script>