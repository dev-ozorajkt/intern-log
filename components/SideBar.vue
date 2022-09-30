<template>
    <div>
        <nav class="px-2 border-r border-blue-100 dark:border-slate-800 bg-base-100/50 min-h-screen fixed transition duration-300"
            :class="{ 'w-72': isExpand }">
            <ul class="menu py-5 w-full">
                <li class="mb-1">
                    <NuxtLink active-class="bg-secondary text-secondary-content rounded-box" to="/dashboard">
                        <span class="material-symbols-outlined">widgets</span>
                        <span v-if="isExpand">Dashboard</span>                        
                    </NuxtLink>
                </li>
                <li class="mb-1">
                    <NuxtLink active-class="bg-secondary text-secondary-content rounded-box" to="/project">                        
                        <span class="material-symbols-outlined">list_alt</span>
                        <span v-if="isExpand">Active Project</span>
                    </NuxtLink>
                </li>
                <li class="mb-1">
                    <a>                        
                        <span class="material-symbols-outlined">beenhere</span>
                        <span v-if="isExpand">Archive</span>
                    </a>
                </li>
                <li class="mb-1">
                    <NuxtLink active-class="bg-secondary text-secondary-content rounded-box" to="/profile">
                        <span class="material-symbols-outlined">manage_accounts</span>
                        <span v-if="isExpand">Profile</span>
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
    const isExpand = useExpand()
</script>