<template>
    <div>
        <nav class="min-h-screen fixed w-72 border-r border-blue-100 dark:border-slate-800">
            <ul class="menu py-5">
                <li>
                    <a>                        
                        <span class="material-symbols-outlined">widgets</span>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a>                        
                        <span class="material-symbols-outlined">list_alt</span>
                        Projects
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