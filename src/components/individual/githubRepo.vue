<template>
    <a :href="url" target="_blank" class="group relative bg-white m-6 w-9/12 px-12 py-8 sm:w-96 xl:w-5/12 sm:p-10 shadow-md rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:-skew-x-1">
        <div class="items-center space-y-4 sm:flex sm:justify-start sm:space-y-0 sm:space-x-4">
            <img class="w-10 h-10" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNS40OTUgMmgxNi41MDV2LTJoLTE3Yy0xLjY1NiAwLTMgMS4zNDMtMyAzdjE4YzAgMS42NTcgMS4zNDQgMyAzIDNoMTd2LTIwaC0xNi41MDVjLTEuMzc2IDAtMS4zNzYtMiAwLTJ6bS41MDUgNGg3djdsMi0yIDIgMnYtN2gzdjE2aC0xNHYtMTZ6Ii8+PC9zdmc+">
            <div class="space-y-1">
                    <p class="text-lg font-semibold leading-none pr-9 group-hover:text-blue-600">
                        {{name}}
                    </p>
                <div class="flex items-center space-x-2">
                    <span class="flex items-center justify-center h-2 w-2">
                        <span :class="langColor" class="absolute inline-flex h-4 w-4 animate-none group-hover:animate-ping group-hover:h-3 group-hover:w-3 rounded-full bg-gray-600 opacity-0 group-hover:opacity-75"></span>
                        <span :class="langColor" class="relative inline-flex rounded-full h-full w-full bg-gray-600"></span>
                    </span>
                    <p class="text-sm">
                        {{ language }}  
                    </p>
                </div>
            </div>
        </div>
        <div class="absolute right-6 top-8 sm:right-6 sm:top-10 flex items-center space-x-1" >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
            <p class="text-lg "> {{stars}} </p>
        </div>
    </a>
</template>

<script>
export default {
    data: () => ({
        color_key: {
            "Vue": "bg-green-500",
            "JavaScript": "bg-yellow-300",
            "Jupyter Notebook": "bg-yellow-500",
            "Python": "bg-blue-600", 
        }
    }),
    props: [
        'name',
        'url',
        'stars',
        'language',
    ],

    computed: {
        langColor() {
            return this.color_key[this.language]
        }
    }
}
</script>