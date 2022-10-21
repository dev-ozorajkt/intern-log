<template>
    <div>
        <table class="table table-fixed w-full mt-10">
            <!-- head -->
            <thead>
                <tr>
                    <th class="w-[20%]">Current Project</th>
                    <th class="w-[50%]">Current Activity</th>
                    <th class="w-[25%]">Overall Progress</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr>
                    <td>
                        Project ABC
                    </td>
                    <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </td>
                    <td><progress class="progress progress-primary w-full" value="10" max="100"></progress></td>
                </tr>
                <tr class="details">
                    <td colspan="3" class="bg-base-200 p-10">
                        <div class="bg-base-100 rounded p-4">
                            <span class="detail-label text-teal-500 font-bold">Goals</span>
                            <p class="mt-2 mb-4 border-l-2 border-teal-500 ml-2 pl-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. </p>
                            <span class="detail-label text-red-700 font-bold">Issues</span>
                            <p class="mt-2 mb-4 border-l-2 border-red-700 ml-2 pl-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. </p>
                            <span class="detail-label text-primary font-bold">Solutions</span>
                            <p class="mt-2 border-l-2 border-primary ml-2 pl-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style scoped>
    .table :where(thead, tfoot) :where(th, td) {
        @apply bg-secondary text-secondary-content
    }
    .table :where(th, td) {
        @apply whitespace-normal
    }
</style>