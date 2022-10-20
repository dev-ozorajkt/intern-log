<template>
    <input type="text" :value="modelValue" @input="updateValue">
</template>
<script setup lang="ts">
    const props = defineProps<{
        modelValue: string,
    }>()
    const { modelValue } = toRefs(props)
    const emit = defineEmits(['update:modelValue'])   
    const updateValue = (event) => {
        emit('update:modelValue', event.target.value)
    }

</script>