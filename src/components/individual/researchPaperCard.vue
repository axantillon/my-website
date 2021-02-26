<template>
    <div class="bg-white flexflex-shrink mx-auto shadow-xl rounded-3xl px-8 py-16 max-w-md space-y-8">

        <div class="h-14 w-5/6 mx-auto">
            <p class="text-center text-xl text-bold font-bold">
                {{ paper_name }}
            </p>
        </div>
        
        <iframe class="mx-auto" :src="embed_link" width="200" height="260"></iframe>

        <div class="text-center space-y-8">
            
            <div class=" h-16">
                <p class="text-lg font-light"> {{ paper_description }} </p>
            </div>

            <button class="rounded-full text-2xl px-6 py-3 border hover:border-transparent hover:text-white hover:bg-blue-500
                                            border-blue-500 text-blue-500 
                                            transform-gpu transition ease-in duration-300 hover:scale-105"> 
            <a :href="blog_link" target="_blank"> {{ btn_text }} </a></button>
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