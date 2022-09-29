<template>
    <div>        
        <div class="bg-base-100 rounded">        
            <div class="flex">        
                <div class="text-base-content flex flex-wrap items-center w-full ml-8 py-10">
                    <div class="flex flex-col">              
                        <h2 class="text-3xl">Hello<span v-if="username">, {{ username }}</span>!</h2>
                        <div class="flex-none" v-if="isAdmin">
                            <p>Currently there are no ongoing projects for intern.</p>
                            <NuxtLink class="btn btn-secondary normal-case rounded-full mt-6" to="/dashboard">
                                <svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
                                    <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                                </svg>
                                Add New Project               
                            </NuxtLink>
                        </div>
                        <div class="flex-none" v-else>
                            <p>Currently you have no ongoing project.&#10024;</p>
                            <NuxtLink class="btn btn-secondary normal-case rounded-full mt-6" to="/dashboard">
                                See Project Directory               
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                
                <div class="w-1/4 flex flex-none justify-center">
                    <figure class="w-9/12 flex justify-center">
                        <img v-if="isAdmin" src="/img/dash-admin.svg" alt="Dashboard" />
                        <img v-else src="/img/dash-main.svg" alt="Dashboard" />
                    </figure>
                </div> 
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        username: String, 
        isAdmin: Boolean
    })
    const { username } = toRefs(props)
    const { isAdmin } = toRefs(props)
</script>