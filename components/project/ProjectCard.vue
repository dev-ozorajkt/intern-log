<template>
    <div>
        <BasePanel class="w-[30%]">
           <h2 class="text-secondary font-montserrat font-extrabold text-xl w-full">Project XYZ</h2>                                    
            <div class="w-full h-36 bg-secondary rounded overflow-hidden flex my-2">
                <img src="https://cdn.pixabay.com/photo/2021/04/25/15/41/flower-6206819_960_720.jpg" alt="Project Cover Image" class="object-cover w-full">
            </div>
            <div class="project-summary">
                <span class="text-sm text-primary font-bold">Summary</span>
                <p>This is project description or summary</p>
            </div>                
            <div class="date flex border-t border-b border-blue-100 dark:border-slate-800  py-1 my-2">
                <div class="date-start w-1/2">
                    <span class="block text-sm text-primary font-bold">Started</span>
                    00 Month 0000
                </div>
                <div class="date-end w-1/2">
                    <span class="block text-sm text-red-700 font-bold">Deadline</span>
                    00 Month 0000
                </div>
            </div>
            <div class="project-owner my-2">
                <span class="text-sm text-primary font-bold">Owner</span>
                <div class="flex items-center mt-2">                        
                    <div class="avatar mr-2">
                        <div class="w-8 rounded-full">
                            <img src="https://i.pravatar.cc/150?img=3" />
                        </div>
                    </div>
                    <span>Project Owner</span>
                </div>
            </div>
            <div class="project-participant my-2">
                <span class="text-sm text-primary font-bold">Participant</span>
                <div class="avatar-group -space-x-4 mt-2">
                    <div class="avatar">
                        <div class="w-8">
                            <img src="https://i.pravatar.cc/150?img=10" />
                        </div>
                        </div>
                        <div class="avatar">
                            <div class="w-8">
                            <img src="https://i.pravatar.cc/150?img=22" />
                            </div>
                        </div>
                        <div class="avatar">
                            <div class="w-8">
                            <img src="https://i.pravatar.cc/150?img=39" />
                            </div>
                        </div>
                        <div class="avatar">
                            <div class="w-8">
                            <img src="https://i.pravatar.cc/150?img=4" />
                            </div>
                        </div>
                    </div>
                </div>
        </BasePanel>
    </div>
</template>
<script setup lang="ts">
    import 'remixicon/fonts/remixicon.css'
</script>