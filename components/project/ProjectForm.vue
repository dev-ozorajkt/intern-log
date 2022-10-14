<template>
    <div>
        <form 
            @submit.prevent="createProject"
            class="flex flex-col gap-2"
        >                    
            <label for="title" class="text-primary font-bold">Project Name</label>
            <input
                type="text"
                placeholder="Project XYZ"
                v-model="title"
                id="title"
                class="input bg-slate-300 dark:bg-slate-800 rounded"
                />
            <label for="summary" class="text-primary font-bold">Project Summary</label>     
            <textarea class="textarea bg-slate-300 dark:bg-slate-800 rounded" placeholder="Summary" v-model="summary"></textarea>
            <!-- <div>{{ summary }}</div> -->
            <label for="imgUrl" class="text-primary font-bold">Featured Image</label>
            <input
                type="text"
                placeholder="Insert Image URL"
                v-model="imgUrl"
                id="imgUrl"
                class="input bg-slate-300 dark:bg-slate-800 rounded"
            />
            <div class="preview-image flex p-8 max-h-[500px] overflow-hidden bg-slate-300 dark:bg-slate-800 justify-center">
                <img :src="imgUrl" alt="Image Preview" class="w-full max-w-[800px] object-cover">
            </div>
            <div class="date-group flex justify-between">
                <div class="dates-start w-[48%]">
                    <label for="dateStart" class="w-full block text-primary font-bold">Start</label>
                    <input
                        type="date"
                        v-model="dateStart"
                        id="dateStart"
                        class="input bg-slate-300 dark:bg-slate-800 rounded w-full"
                    />
                </div>
                <div class="dates-end w-[48%]">
                    <label for="dateEnd" class="w-full block text-primary font-bold">End</label>
                    <input
                        type="date"
                        v-model="dateEnd"
                        id="dateEnd"
                        class="input bg-slate-300 dark:bg-slate-800 rounded w-full"
                    />
                </div>
            </div>
            <div class="participants">
                <div class="text-primary font-bold">Participants</div>
                <div class="checkbox-group max-w-max pl-2">
                    <label
                        class="label cursor-pointer"
                        v-for="profile in profiles" :key="profile.user_name"
                        >                         
                        <span class="label-text">{{ profile.user_name }}</span>        
                        <input type="checkbox" class="checkbox ml-2" :value="profile.user_name" v-model="checkedUser" />           
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-secondary w-full rounded mt-5" :class="{'loading': isLoading}">Create Project</button>
        </form>
    </div>
</template>
<script setup lang="ts">
import { Project } from '~/types/project'
import { Profile } from '~/types/profile'
    const title = ref('')
    const summary = ref('')
    const imgUrl = ref('')
    const dateStart = ref('')
    const dateEnd = ref('')
    const allUser = ref('')
    const checkedUser = ref([])
    const isLoading = ref(false)
    const nextRoute = ref('')

    const client = useSupabaseClient()
    const user = useSupabaseUser()
    const router = useRouter();

    const { data: profiles } = await client
    .from<Profile>('profiles')
    .select('id, user_name, is_admin')
    .eq('is_admin', false)

    const createProject = async () => {
        try {
            isLoading.value = true
            const { data, error } = await client.from<Project>('projects').insert({
                title: title.value,
                summary: summary.value,
                featured_image: imgUrl.value,
                participants: checkedUser.value,
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