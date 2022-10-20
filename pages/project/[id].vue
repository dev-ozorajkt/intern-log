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
                    <div class="project-content-log lg:w-[76%]">
                        <div class="tabs border-b border-blue-100 dark:border-slate-800">
                            <a class="tab tab-active">Today's Log</a> 
                            <a class="tab">Past Log</a> 
                        </div>
                        <div class="today">
                            <div class="project-note">
                                <h3 class="font-extrabold text-xl text-primary mt-5">Project's Note</h3>
                                <p class="bg-base-300 border-l-2 border-primary p-3 my-2">There is no note yet...</p>
                                <Tiptap v-if="userData.isAdmin" v-model="note" />                             
                            </div>
                            <table class="table table-fixed w-full mt-10">
                                <!-- head -->
                                <thead>
                                <tr>
                                    <th class="w-[25%]">Name</th>
                                    <th class="w-[40%]">Current Activity</th>
                                    <th class="w-[20%]">Overall Progress</th>
                                    <th class="w-[10%]"></th>
                                </tr>
                                </thead>
                                <tbody>
                                <!-- row 1 -->
                                <tr>
                                    <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                        <div class="mask mask-circle w-12 h-12">
                                            <img src="https://i.pravatar.cc/150?img=20" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                        </div>
                                        <div>
                                        <div class="font-bold">Hart Hagerty Hart Hagerty</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </td>
                                    <td><progress class="progress progress-primary w-full" value="10" max="100"></progress></td>
                                    <th>
                                    <button class="btn btn-ghost btn-xs">
                                        <span>Details</span>
                                    </button>
                                    </th>
                                </tr>
                                <tr class="details">
                                    <td colspan="4" class="bg-base-300 p-10">
                                    <div class="bg-base-100 rounded p-4">
                                        <span class="detail-label text-teal-500 font-bold">Goals</span>
                                        <p class="mt-2 mb-4 border-l-2 border-teal-500 ml-2 pl-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <span class="detail-label text-red-700 font-bold">Issues</span>
                                        <p class="mt-2 mb-4 border-l-2 border-red-700 ml-2 pl-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <span class="detail-label text-primary font-bold">Solutions</span>
                                        <p class="mt-2 border-l-2 border-primary ml-2 pl-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                    </td>
                                </tr>
                                <!-- row 2 -->
                                <tr>
                                    <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                        <div class="mask mask-circle w-12 h-12">
                                            <img src="https://i.pravatar.cc/150?img=50" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                        </div>
                                        <div>
                                        <div class="font-bold">Brice Swyre</div>
                                        <div class="text-sm opacity-50">China</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    Carroll Group
                                    <br>
                                    <span class="badge badge-ghost badge-sm">Tax Accountant</span>
                                    </td>
                                    <td>Red</td>
                                    <th>
                                    <button class="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                                </tbody>   
                            </table>
                        </div>
                        
                    </div>
                    <div class="project-content-info rounded p-6 lg:w-[22%] border border-blue-100 dark:border-slate-800">
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
    .project-content-log .tab {
        @apply h-auto px-4 py-2 rounded-tl rounded-tr
    }
    .project-content-log .tab-active {
        @apply bg-primary text-primary-content font-bold
    }
    .today table :where(thead, tfoot) :where(th, td) {
        @apply bg-secondary text-secondary-content
    }
    .today table :where(th, td) {
        @apply whitespace-normal
    }
    .section-label {
        @apply block
    }
    .section-label {
        @apply text-primary font-bold block border-b border-blue-100 dark:border-slate-800 py-2.5
    }
</style>