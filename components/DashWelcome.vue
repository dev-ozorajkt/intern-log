<template>
    <div>        
        <div class="bg-gradient-to-tr from-secondary to-secondary-focus rounded mt-10">        
            <div class="rounded flex glass">
                <div class="w-56 flex flex-none ml-4 relative">
                    <figure class="absolute w-full -bottom-5">
                        <img v-if="isAdmin" src="/img/dash-admin.svg" alt="Dashboard" />
                        <img v-else src="/img/dash-main.svg" alt="Dashboard" />
                    </figure>
                </div>         
                <div class="text-secondary-content flex flex-wrap items-center w-full ml-8 py-10">
                    <div class="flex flex-col">              
                    <h2 class="text-3xl">Hello<span v-if="username">, {{ username }}</span>!</h2>
                    <p class="flex-none">
                        <span v-if="isAdmin">Currently there are no ongoing projects for intern.</span>
                        <span v-else>Currently you have no ongoing project.&#10024;</span>
                    </p>
                    </div>
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