<template>
    <div>
        <div class="wrapper px-4">
            <div class="page-title pb-6 flex justify-between">        
                <h2 class="text-teal-500 font-montserrat font-extrabold text-3xl">Create Project</h2>
                <NuxtLink class="btn btn-secondary normal-case rounded-full gap-2 flex items-center justify-center" to="/project/">
                    <i class="ri-close-line h-4 w-4 flex justify-center ri-lg items-end"></i> 
                    Cancel           
                </NuxtLink>
            </div>            
            <BasePanel>
                <ProjectForm />
            </BasePanel>
        </div>
    </div>
</template>
<script setup lang="ts">
    definePageMeta({
        middleware: ["auth"]
    })
</script>