<template>
    <div class="bg-white m-6 p-10 shadow-md rounded-lg w-5/12 h-32">
        <div class="relative flex items-center space-x-4">
            <img class="w-8 h-8" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNS40OTUgMmgxNi41MDV2LTJoLTE3Yy0xLjY1NiAwLTMgMS4zNDMtMyAzdjE4YzAgMS42NTcgMS4zNDQgMyAzIDNoMTd2LTIwaC0xNi41MDVjLTEuMzc2IDAtMS4zNzYtMiAwLTJ6bS41MDUgNGg3djdsMi0yIDIgMnYtN2gzdjE2aC0xNHYtMTZ6Ii8+PC9zdmc+">
            <div class="">
                <a :href="url" target="_blank" class="hover:text-blue-600">
                    <p class="text-lg font-semibold">
                        {{name}}
                    </p>
                </a>
                <div class="flex items-center space-x-2">
                    <div :class="langColor" class="h-2 w-2 rounded-full inline-block bg-gray-600">
                    </div>
                    <p class="text-sm">
                        {{ language }}  
                    </p>
                </div>
            </div>
            <div class="absolute right-0 top-0 flex items-center space-x-1" >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                <p class="text-lg "> {{stars}} </p>
            </div>
        </div>
    </div>
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