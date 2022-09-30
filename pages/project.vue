<template>
    <div>
        <Head>
            <Title>Project</Title>
        </Head>
        <div class="wrapper px-4">
            <div class="page-title pb-6 flex justify-between">        
                <h2 class="text-teal-500 font-montserrat font-extrabold text-3xl">Project</h2>
                <NuxtLink class="btn btn-secondary normal-case rounded-full" to="/project">
                    <svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
                        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                    </svg>
                    Add New Project               
                </NuxtLink>
            </div>
            <BasePanel class="w-[45%]">
                <h2 class="text-secondary font-montserrat font-extrabold text-xl w-full">Project XYZ</h2>                                    
                <div class="w-full h-36 bg-secondary rounded overflow-hidden flex my-2">
                    <img src="https://cdn.pixabay.com/photo/2021/04/25/15/41/flower-6206819_960_720.jpg" alt="Project Cover Image" class="object-cover w-full">
                </div>
                <div class="project-summary">
                    <span class="text-sm text-neutral-content font-bold">Summary</span>
                    <p>This is project description or summary</p>
                </div>                
                <div class="date flex border-t border-b my-2">
                    <div class="date-start w-1/2">
                        <span class="block text-sm text-neutral-content font-bold">Started</span>
                        00 Month 0000
                    </div>
                    <div class="date-end w-1/2">
                        <span class="block text-sm text-neutral-content font-bold">Deadline</span>
                        00 Month 0000
                    </div>
                </div>
                <div class="project-owner my-2">
                    <span class="text-sm text-neutral-content font-bold">Owner</span>
                    <div class="flex items-center">                        
                        <div class="avatar mr-2">
                            <div class="w-8 rounded-full">
                                <img src="https://i.pravatar.cc/150?img=3" />
                            </div>
                        </div>
                        <span>Project Owner</span>
                    </div>
                </div>
                <div class="project-participant my-2">
                    <span class="text-sm text-neutral-content font-bold">Participant</span>
                    <div class="avatar-group -space-x-4">
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
            </BasePanel>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>