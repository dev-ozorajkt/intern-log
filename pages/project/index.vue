<template>
    <div>
        <Head>
            <Title>Project</Title>
        </Head>
        <div class="wrapper px-4">
            <div class="page-title pb-6 flex justify-between">        
                <h2 class="text-teal-500 font-montserrat font-extrabold text-3xl">Project</h2>
                <NuxtLink class="btn btn-secondary normal-case rounded-full" to="/project/create-project">
                    <svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
                        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                    </svg>
                    Add New Project               
                </NuxtLink>
            </div>
            <ProjectCard />
        </div>
    </div>
</template>
<script setup lang="ts">

</script>