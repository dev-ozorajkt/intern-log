<template>
    <div>
        <form 
            @submit.prevent="createProject"
            class="flex flex-col gap-2"
        >                    
            <label for="title">Project Name</label>
            <input
                type="text"
                placeholder="Project XYZ"
                v-model="title"
                id="title"
                class="p-2 bg-slate-300 dark:bg-slate-800 rounded"
                />
            <label for="summary">Project Summary</label>     
            <Tiptap id="summary" v-model="summary"/>
            <!-- <div>{{ summary }}</div> -->
            <label for="imgUrl">Featured Image</label>
            <input
                type="text"
                placeholder="Insert Image URL"
                v-model="imgUrl"
                id="imgUrl"
                class="p-2 bg-slate-300 dark:bg-slate-800 rounded"
            />
            <div class="preview-image flex p-8 max-h-[500px] overflow-hidden bg-neutral justify-center">
                <img :src="imgUrl" alt="Image Preview" class="w-full max-w-[800px] object-cover">
            </div>
            <div class="date-group flex justify-between">
                <div class="dates-start w-[48%]">
                    <label for="dateStart" class="w-full block">Start</label>
                    <input
                        type="date"
                        v-model="dateStart"
                        id="dateStart"
                        class="p-2 bg-slate-300 dark:bg-slate-800 rounded w-full"
                    />
                </div>
                <div class="dates-end w-[48%]">
                    <label for="dateEnd" class="w-full block">End</label>
                    <input
                        type="date"
                        v-model="dateEnd"
                        id="dateEnd"
                        class="p-2 bg-slate-300 dark:bg-slate-800 rounded w-full"
                    />
                </div>
            </div>
            <button type="submit" class="btn btn-secondary w-full rounded mt-5" :class="{'loading': isLoading}">Create Project</button>
        </form>
    </div>
</template>
<script setup lang="ts">
import { Project } from '~/types/project'
    const title = ref('')
    const summary = ref('')
    const imgUrl = ref('')
    const dateStart = ref('')
    const dateEnd = ref('')
    const isLoading = ref(false)
    const nextRoute = ref('')

    const client = useSupabaseClient()
    const user = useSupabaseUser()
    const router = useRouter();

    const createProject = async () => {
        try {
            isLoading.value = true
            const { data, error } = await client.from<Project>('projects').insert({
                title: title.value,
                summary: summary.value,
                featured_image: imgUrl.value,
                date_start: dateStart.value,
                date_end: dateEnd.value,
                is_complete: false,
                owner: user.value.id
            })
            .single()
            if (error) throw error
            nextRoute.value = data.id
        } catch (error) {
            alert(error.message)
        } finally {
            isLoading.value = false            
            return navigateTo({ 
                path: `/project/${nextRoute.value}`
            })
        }
    }
</script>