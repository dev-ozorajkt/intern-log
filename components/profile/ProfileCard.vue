<template>
    <div>
        <div
            class="flex rounded-sm p-10 bg-base-100 justify-center shadow-md relative">
            <div v-if="isAdmin" class="badge badge-primary absolute right-10 top-5">Admin</div>
            <div class="column-left flex w-1/3 justify-center items-start">
                <div class="modal-button" @click="isAvatarModalOpen = !isAvatarModalOpen">
                    <div class="avatar relative" :class="{ 'cursor-pointer': isProfileOwner }">
                        <div class="w-48 mask mask-squircle bg-neutral p-1">
                            <ProfileAvatar :path="avatar_path" class="mask mask-squircle h-full" />
                        </div>
                        <div v-if="isProfileOwner" class="edit-avatar">
                            <span class="material-symbols-outlined">edit</span>
                            <span class="text">Change Picture</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column-right w-2/3">
                <ProfileForm 
                :isProfileOwner="isProfileOwner"
                :alias="alias"
                />
            </div>
        </div>
        <!-- Modal -->
        <div v-if="isAvatarModalOpen"
            class="modal-container fixed top-0 left-0 z-50 w-full h-full bg-base-300/50 flex justify-center items-center overflow-hidden">
            <ProfilePickAvatar class="modal-box max-w-md glass flex flex-col justify-center items-center p-8"
                @modal-state-change="isAvatarModalOpen = !isAvatarModalOpen" />
        </div>
    </div>
</template>
<script setup lang="ts">
const isAvatarModalOpen = useAvatarModal()
const avatar_path = ref('')
const props = defineProps({
        isProfileOwner: Boolean,
        isAdmin: Boolean,
        avatarPath: String,
        alias: String
    })
const { isProfileOwner } = toRefs(props)
const { isAdmin } = toRefs(props)
const { avatarPath } = toRefs(props)
const { alias } = toRefs(props)
avatar_path.value = avatarPath.value
</script>
<style scoped>
.edit-avatar {
    @apply absolute bg-primary rounded-full text-secondary-content p-2 flex flex-col;
    bottom: 0;
    right: 0;
}

.edit-avatar .text {
    display: none;
}

.avatar:hover .edit-avatar {
    @apply rounded-none w-full mask mask-squircle items-center justify-center bg-opacity-90;
}

.avatar:hover .edit-avatar .text {
    display: inline;
}

.avatar:hover .edit-avatar .material-symbols-outlined {
    font-size: 48px;
}
</style>