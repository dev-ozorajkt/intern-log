<template>
    <div>
        <div class="about mb-5">
            <span class="section-label">About Project</span>
            <p class="p-3">This is where you put a little more detail about the project like goals, etc</p>
        </div>
        <div class="owner mb-5">
            <span class="section-label">Owner</span>
            <div class="flex items-center mt-2 p-3">                        
                <div class="avatar mr-2">
                    <div class="w-8 rounded-full">
                        <img src="https://i.pravatar.cc/150?img=3" />
                    </div>
                </div>
                <span>Project Owner</span>
            </div>
        </div>
        <div class="resources">
            <span class="section-label">Additional Resources</span>
            <ul class="mt-4">
                <li><a><i class="ri-external-link-line"></i> Link One</a></li>
                <li><a>Link Two</a></li>
            </ul>
            <button v-if="userData.isAdmin" class="btn btn-outline w-full mt-2 rounded border-dashed"><i class="ri-add-line"></i>Add Link</button>
            <!-- <form class="p-3 w-full flex">
                <input type="text" placeholder="Add Link" class="input bg-slate-300 dark:bg-slate-800 rounded rounded-tr-none rounded-br-none w-full" />
                <button class="btn rounded-none w-12"><i class="ri-add-line"></i></button>
            </form> -->
        </div>
    </div>
</template>
<script setup lang="ts">
    const { userData } = useUserData()
</script>
<style scoped>
    .section-label {
        @apply block
    }
    .section-label {
        @apply text-primary font-bold block border-b border-blue-100 dark:border-slate-800 py-2.5
    }
    .resources a {
        @apply border-b border-blue-100 dark:border-slate-800 w-full block p-3 cursor-pointer hover:bg-neutral hover:text-neutral-content
    }
</style>