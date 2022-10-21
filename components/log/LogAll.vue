<template>
    <div>
        <table class="table table-fixed mt-4 w-full">
            <thead>
                <tr>
                    <th class="w-[10%]">Date</th>
                    <th class="w-[80%]">Activity</th>
                    <th class="w-[10%]"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2022-10-10</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</td>
                    <td>
                        <button class="btn btn-ghost btn-xs">
                            <span>Details</span>
                        </button>
                    </td>
                </tr>
                <tr class="details">
                    <td class="bg-base-200 p-10"></td>
                    <td colspan="2" class="bg-base-200">
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
                <tr>
                    <td>2022-10-10</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</td>
                    <td>
                        <button class="btn btn-ghost btn-xs">
                            <span>Details</span>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>2022-10-10</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</td>
                    <td>
                        <button class="btn btn-ghost btn-xs">
                            <span>Details</span>
                        </button>
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