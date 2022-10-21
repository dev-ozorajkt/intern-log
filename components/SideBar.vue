<template>
    <div>
        <nav class="px-2 border-r border-blue-100 dark:border-slate-800 bg-base-100/50 min-h-screen fixed transition duration-300"
            :class="{ 'w-72': isExpand }">
            <ul class="menu py-5 w-full">
                <li class="mb-1">
                    <NuxtLink active-class="bg-secondary text-secondary-content rounded-box" to="/dashboard" title="Dashboard">
                        <i class="ri-dashboard-line"></i> 
                        <span v-if="isExpand">Dashboard</span>                        
                    </NuxtLink>
                </li>
                <li v-if="!userData.isAdmin" class="mb-1">
                    <NuxtLink active-class="bg-secondary text-secondary-content rounded-box" to="/logs" title="Manage Log">                        
                        <i class="ri-file-edit-line"></i> 
                        <span v-if="isExpand">Manage Log</span>
                    </NuxtLink>
                </li>
                <li class="mb-1">
                    <NuxtLink active-class="bg-secondary text-secondary-content rounded-box" to="/project" title="Active Projects">                        
                        <i class="ri-folder-2-line"></i> 
                        <span v-if="isExpand">Active Projects</span>
                    </NuxtLink>
                </li>
                <li class="mb-1">
                    <NuxtLink active-class="bg-secondary text-secondary-content rounded-box" to="/archive" title="Archive">                        
                        <i class="ri-archive-line"></i> 
                        <span v-if="isExpand">Archive</span>
                    </NuxtLink>
                </li>
                <li class="mb-1">
                    <NuxtLink active-class="bg-secondary text-secondary-content rounded-box" to="/profile" title="Profile">
                        <i class="ri-user-line"></i> 
                        <span v-if="isExpand">Profile</span>
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
    const isExpand = useExpand()
    const { userData } = useUserData()
</script>