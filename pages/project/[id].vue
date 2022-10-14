<template>
    <div>
        <Head>
            <Title>{{ project.title }}</Title>
        </Head>
        <div class="wrapper px-4">
            <div class="bg-base-100 rounded overflow-hidden">
                <div class="project-header p-6 overflow-hidden h-[250px] flex items-center bg-no-repeat bg-cover bg-center relative" :style="{ backgroundImage: `url(${project.featured_image})` }">
                    <div class="project-header-text relative z-10 text-secondary-content">                        
                        <h3 class="font-montserrat font-extrabold text-2xl">{{ project.title }}</h3>                                            
                        <p>{{ project.summary }}</p>
                    </div>
                </div>
                <div class="project-content h-[500px]">

                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Project } from '~/types/project'
    const route = useRoute()
    const client = useSupabaseClient()
    const test = ref('')

     const { data: project } = await client
    .from<Project>('projects')
    .select('*')
    .filter('id', 'eq', route.params.id)
    .single() 
</script>
<style scoped>
    .project-header::after {
        @apply w-full h-full bg-gradient-to-r from-secondary absolute block left-0;
        content: '';
    }
</style>