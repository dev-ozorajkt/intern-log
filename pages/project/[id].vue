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
                                    <i class="ri-delete-bin-line"></i>Delete
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="project-content p-6 lg:flex justify-between">
                    <div class="project-content-log lg:w-[79%]">
                        <div class="tabs border-b border-blue-100 dark:border-slate-800">
                            <a class="tab" :class="{ 'tab-active': isToday }" @click="isToday = true">Today's Log</a> 
                            <a class="tab" :class="{ 'tab-active': !isToday }" @click="isToday = false">Past Log</a> 
                        </div>
                        <div v-if="isToday" class="today">
                            <div class="project-note">
                                <h3 class="font-extrabold text-xl text-primary mt-5">Project's Note</h3>
                                <div class="note-content relative" v-if="!noteIsEditMode">
                                    <p class="bg-base-300 border-l-2 border-primary p-3 my-2">Add project's note...</p>
                                    <button v-if="userData.isAdmin" class="absolute btn btn-sm  p-2 right-2 top-2" @click="noteIsEditMode = true">                                        
                                        <i class="ri-edit-line"></i>
                                    </button> 
                                </div>
                                <form @submit.prevent="addNote" v-if="noteIsEditMode" class="mt-4">
                                    <Tiptap v-model="note" />
                                    <div class="button-group flex justify-end mt-2">
                                        <button type="button" class="btn btn-ghost text-red-500 rounded-full px-6 mr-2" @click="noteIsEditMode = false">
                                            Cancel
                                        </button>
                                        <button type="submit" class="btn btn-primary rounded-full px-6">
                                            Add
                                        </button>
                                    </div>

                                </form>                          
                            </div>
                            <LogToday />
                        </div>
                        <div v-if="!isToday" class="past">
                            <div class="collapse rounded shadow-md my-5">
                                <input type="checkbox" class="peer" /> 
                                <div class="collapse-title">
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                        <div class="mask mask-circle w-12 h-12">
                                            <img src="https://i.pravatar.cc/150?img=20" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                        </div>
                                        <div>
                                        <div class="font-bold">Cassandra Allegra Portia Calogera Filomena Pentaghast</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="collapse-content bg-base-300"> 
                                    <LogAll />
                                </div>
                            </div>
                            
                        </div>                        
                    </div>
                    <div class="project-content-info rounded p-6 lg:w-[19%] border border-blue-100 dark:border-slate-800">
                        <ProjectDetailSidebar />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import dayjs from 'dayjs'
    import { Project } from '~/types/project'
    const { userData } = useUserData()
    const route = useRoute()
    const client = useSupabaseClient()
    const note = ref('')
    const isToday = ref(true)
    const noteIsEditMode = ref(false)

     const { data: project } = await client
    .from<Project>('projects')
    .select('*')
    .filter('id', 'eq', route.params.id)
    .single() 

    const dateStart = dayjs(project.date_start).format('MMM D, YYYY')
    const dateEnd = dayjs(project.date_end).format('MMM D, YYYY')

    
    const addNote = async () => {
        const { data, error } = await client.from<Project>('projects').upsert({
            id: project.id,
            note: note.value
        })
    }
</script>
<style scoped>
    .project-header::after {
        @apply w-full h-full bg-base-200/90 absolute block left-0;
        content: '';
    }
    .project-content-log .tab {
        @apply h-auto px-4 py-2 rounded-tl rounded-tr
    }
    .project-content-log .tab-active {
        @apply bg-primary text-primary-content font-bold
    }
    .section-label {
        @apply block
    }
    .section-label {
        @apply text-primary font-bold block border-b border-blue-100 dark:border-slate-800 py-2.5
    }
</style>