<template>
    <div class="bg-white lg:items-center lg:text-center mx-6 shadow-xl rounded-3xl lg:w-1/3 2xl:w-1/4 px-4 py-6 space-y-4">

        <div class="py-2 lg:py-8 px-8 lg:h-28 flex items-center space-x-4 lg:space-x-0">
            <img class="lg:hidden w-14 h-14" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTEuMzYzIDJjNC4xNTUgMCAyLjYzNyA2IDIuNjM3IDZzNi0xLjY1IDYgMi40NTd2MTEuNTQzaC0xNnYtMjBoNy4zNjN6bS44MjYtMmgtMTAuMTg5djI0aDIwdi0xNC4zODZjMC0yLjM5MS02LjY0OC05LjYxNC05LjgxMS05LjYxNHptNC44MTEgMTNoLTIuNjI4djMuNjg2aC45MDd2LTEuNDcyaDEuNDl2LS43MzJoLTEuNDl2LS42OThoMS43MjF2LS43ODR6bS00LjkgMGgtMS41OTl2My42ODZoMS41OTljLjUzNyAwIC45NjEtLjE4MSAxLjI2Mi0uNTM1LjU1NS0uNjU4LjU4Ny0yLjAzNC0uMDYyLTIuNjkyLS4yOTgtLjMtLjcxMi0uNDU5LTEuMi0uNDU5em0tLjY5Mi43ODNoLjQ5NmMuNDczIDAgLjgwMi4xNzMuOTE1LjY0NC4wNjQuMjY3LjA3Ny42NzktLjAyMS45NDgtLjEyOC4zNTEtLjM4MS41MjgtLjc1NC41MjhoLS42Mzd2LTIuMTJ6bS0yLjc0LS43ODNoLTEuNjY4djMuNjg2aC45MDd2LTEuMjc3aC43NjFjLjYxOSAwIDEuMDY0LS4yNzcgMS4yMjQtLjc2My4wOTUtLjI5MS4wOTUtLjU5NyAwLS44ODUtLjE2LS40ODQtLjYwNi0uNzYxLTEuMjI0LS43NjF6bS0uNzYxLjczMmguNTQ2Yy4yMzUgMCAuNDY3LjAyOC41NzYuMjI4LjA2Ny4xMjMuMDY3LjM2NiAwIC40ODktLjEwOS4xOTktLjM0MS4yMjctLjU3Ni4yMjdoLS41NDZ2LS45NDR6Ii8+PC9zdmc+">
            <div class="space-y-1">    
                <p class=" text-lg text-bold font-bold">
                    {{ paper_name }}
                </p>
                <button class="lg:hidden rounded-xl underline text-gray-600">
                    <a :href="embed_link" target="_blank" class="flex text-center items-center space-x-1">
                        <p>Go To PDF</p>
                        <img class="w-3 h-3" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjEgMTN2MTBoLTIxdi0xOWgxMnYyaC0xMHYxNWgxN3YtOGgyem0zLTEyaC0xMC45ODhsNC4wMzUgNC02Ljk3NyA3LjA3IDIuODI4IDIuODI4IDYuOTc3LTcuMDcgNC4xMjUgNC4xNzJ2LTExeiIvPjwvc3ZnPg==">
                    </a>
                </button>
            </div>
        </div>
        
        <iframe class="mx-auto my-2 hidden lg:block" :src="embed_link" width="180" height="240"></iframe>
        
        <div class="lg:h-52 px-8 flex items-center">
            <p class="text-sm sm:text-md lg:text-lg font-light"> {{ paper_description }} </p>
        </div>

        <div class="flex justify-center">
            <button class="rounded-full text-lg sm:text-xl lg:text-2xl px-6 py-3 my-4 w-3/4 border hover:border-transparent hover:text-white
                            transform-gpu transition ease-in duration-300 hover:scale-105"
                    v-bind:class="{'hover:bg-blue-500': blog_link, 'border-blue-500': blog_link, 'text-blue-500': blog_link, 
                    'hover:bg-gray-500': !blog_link, 'border-gray-500': !blog_link, 'text-gray-500': !blog_link}"
            > 
                <a :href="blog_link" target="_blank"> {{ btn_text }} </a> 
            </button> 
        </div>
    </div>
</template>

<script>


export default {

    data: () => ({
        btn_text: "Read Blog",
        colors: ["red", "yellow", "green", "blue", "indigo", "purple", "pink"],
    }),

    props: [
        'paper_name',
        'paper_description',
        'embed_link',
        'blog_link',
    ],

    mounted () {
        if (this.blog_link == null || this.blog_link == undefined || this.blog_link == ""){
            this.btn_text = "Blog Coming Soon"
        }  
    }
    
}


</script>