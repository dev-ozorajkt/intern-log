<template>
    <div>
        <Head>
            <Title>{{ project.title }}</Title>
        </Head>
        <div class="wrapper px-4">
            <div class="bg-base-100 rounded overflow-hidden">
                <div 
                    class="project-header p-6 h-[220px] flex items-center bg-no-repeat bg-cover bg-center relative" 
                    :style="{ backgroundImage: `url(${project.featured_image})` }"
                    >
                    <div class="project-header-text relative z-10 text-secondary">                        
                        <h3 class="font-montserrat font-extrabold text-3xl">{{ project.title }}</h3>                                            
                        <p>{{ project.summary }}</p>
                        <span class="mt-10 bg-warning text-warning-content p-2 rounded inline-block text-sm font-bold">
                            Duration: {{ dateStart }} - {{ dateEnd }}
                        </span>
                    </div>
                    <div class="absolute right-2 top-2 z-10">
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-circle btn-ghost m-1 bg-primary hover:bg-primary-focus text-primary-content">
                                <i class="ri-more-2-line"></i> 
                            </label>
                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded w-52">
                                <li><a>Edit</a></li>
                                <li><a>Set to completed</a></li>
                                <li><a class="bg-error text-error-content">
                                    <i class="ri-delete-bin-line"></i>  Delete
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="project-content p-6">
                    
                    <div class="project-participant my-2">
                        <span class="text-sm text-primary font-bold">Participant</span>
                        <div class="avatar-group -space-x-4 mt-2">
                            <div class="avatar">
                                <div class="w-8">
                                    <img src="https://i.pravatar.cc/150?img=10" />
                                </div>
                            </div>
                            <div class="avatar">
                                <div class="w-8">
                                    <img src="https://i.pravatar.cc/150?img=22" />
                                </div>
                            </div>
                            <div class="avatar">
                                <div class="w-8">
                                    <img src="https://i.pravatar.cc/150?img=39" />
                                </div>
                            </div>
                             <div class="avatar">
                                <div class="w-8">
                                    <img src="https://i.pravatar.cc/150?img=4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'
import { Project } from '~/types/project'
    const route = useRoute()
    const client = useSupabaseClient()

     const { data: project } = await client
    .from<Project>('projects')
    .select('*')
    .filter('id', 'eq', route.params.id)
    .single() 

    const dateStart = dayjs(project.date_start).format('MMM D, YYYY')
    const dateEnd = dayjs(project.date_end).format('MMM D, YYYY')
</script>
<style scoped>
    .project-header::after {
        @apply w-full h-full bg-base-200/90 absolute block left-0;
        content: '';
    }
</style>