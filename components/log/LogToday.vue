<template>
    <div>
        <table class="table table-fixed w-full mt-10">
            <!-- head -->
            <thead>
                <tr>
                    <th class="w-[25%]">Name</th>
                    <th class="w-[40%]">Current Activity</th>
                    <th class="w-[20%]">Overall Progress</th>
                    <th class="w-[10%]"></th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr>
                    <td>
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-circle w-12 h-12">
                                    <img src="https://i.pravatar.cc/150?img=20" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">Cassandra Allegra Portia Calogera Filomena Pentaghast</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </td>
                    <td><progress class="progress progress-primary w-full" value="10" max="100"></progress></td>
                    <th>
                        <button class="btn btn-ghost btn-xs">
                            <span>Details</span>
                        </button>
                    </th>
                </tr>
                <tr class="details">
                    <td colspan="4" class="bg-base-200 p-10">
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
                <!-- row 2 -->
                <tr>
                    <td>
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-circle w-12 h-12">
                                    <img src="https://i.pravatar.cc/150?img=13" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">Thom Rainier</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </td>
                    <td><progress class="progress progress-primary w-full" value="66" max="100"></progress></td>
                    <th>
                        <button class="btn btn-ghost btn-xs">
                            <span>Details</span>
                        </button>
                    </th>
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