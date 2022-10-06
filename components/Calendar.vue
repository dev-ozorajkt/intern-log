<template>
    <div>
        <div class="h-[370px]"> 
            <vue-cal 
                small
                :time="false" 
                hide-view-selector
                active-view="month"
                hide-weekends>
            </vue-cal>
        </div>
    </div>
</template>
<script setup lang="ts">   
    import VueCal from 'vue-cal'
    import 'vue-cal/dist/vuecal.css'
</script>
<style>
    .vuecal__title-bar {
        @apply text-base font-semibold font-montserrat bg-base-100;
    }
    .vuecal__weekdays-headings {
        @apply text-secondary border-none;
    }
    .vuecal__weekdays-headings, .vuecal__body {
        @apply bg-base-100;
    }
    .vuecal__cell::before {
        border: none;
    }
    .vuecal__cell {
        @apply px-2
    }
    .vuecal__cell-content {
        height: 80%;
    }
    .vuecal__cell--today, .vuecal__cell--current,  .vuecal__cell--selected {
        background: none;
    }
    .vuecal__cell--today .vuecal__cell-content, .vuecal__cell--current .vuecal__cell-content{
        @apply text-primary;
    }
    .vuecal__cell--selected .vuecal__cell-content {
        @apply rounded bg-neutral text-neutral-content;
    }
    .vuecal__cell--out-of-scope {
        @apply text-slate-200 dark:text-slate-800;
    }
</style>