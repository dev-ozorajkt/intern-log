<template>
    <div>
        <form action=""
            @submit.prevent
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
            <div class="summary">
                <pre><code>{{ summary }}</code></pre>
            </div>
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

    summary.value = 'tes'
</script>