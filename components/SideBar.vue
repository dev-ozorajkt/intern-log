<template>
    <div>
        <nav class="min-h-screen fixed w-72 border-r border-blue-100 dark:border-slate-800 bg-base-100 px-2">
            <ul class="menu py-5">
                <li>
                    <NuxtLink to="/dashboard">
                        <span class="material-symbols-outlined">widgets</span>
                        Dashboard
                    </NuxtLink>
                </li>
                <li>
                    <a>                        
                        <span class="material-symbols-outlined">list_alt</span>
                        Active Project
                    </a>
                </li>
                <li>
                    <a>                        
                        <span class="material-symbols-outlined">beenhere</span>
                        Archive
                    </a>
                </li>
                <li>
                    <NuxtLink to="/profile">
                        <span class="material-symbols-outlined">manage_accounts</span>
                        Profile
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts">

</script>