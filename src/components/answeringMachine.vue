<template>
    <div class="bg-white mx-auto px-8 py-24 w-1/2 h-96 shadow-2xl rounded-3xl space-y-4">

        <div class="text-center">
            <p v-if='!loading' class="text-lg"> {{ answer }} </p>
            <svg v-if='loading' class="mx-auto animate-spin-slow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path d="M13.75 22c0 .966-.783 1.75-1.75 1.75s-1.75-.784-1.75-1.75.783-1.75 1.75-1.75 1.75.784 1.75 1.75zm-1.75-22c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 10.75c.689 0 1.249.561 1.249 1.25 0 .69-.56 1.25-1.249 1.25-.69 0-1.249-.559-1.249-1.25 0-.689.559-1.25 1.249-1.25zm-22 1.25c0 1.105.896 2 2 2s2-.895 2-2c0-1.104-.896-2-2-2s-2 .896-2 2zm19-8c.551 0 1 .449 1 1 0 .553-.449 1.002-1 1-.551 0-1-.447-1-.998 0-.553.449-1.002 1-1.002zm0 13.5c.828 0 1.5.672 1.5 1.5s-.672 1.501-1.502 1.5c-.826 0-1.498-.671-1.498-1.499 0-.829.672-1.501 1.5-1.501zm-14-14.5c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2zm0 14c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2z"/>
            </svg>
        </div>

        <input v-model="question" type="text" placeholder="Where did he grow up?"  @focus="delayed_Q()" @blur="askQ()"
        class="bg-gray-100 block mx-auto w-3/4 h-12 text-center text-2xl shadow-md rounded-2xl 
        focus:outline-none focus:ring-1 focus:ring-grey-100 focus:border-transparent
        transition transform ease-in duration-300 hover:scale-110 focus:scale-110">
      
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        description: "My name is Andres. I grew up in Costa Rica. I was born in 2002. I'm 19 years old.",
        answer: "",
        question: "",
        loading: false,
    }),

    methods: {

        async delay(ms) {
            return await new Promise(resolve => setTimeout(resolve, ms));
        },

        async delayed(){
            if(this.loading == true){
                await this.delay(1000)
                this.askQ()
                console.log("running delayed()")
                this.delayed()
            }
        },

        async delayed_Q(){
            this.loading = true

            await this.delayed()

            setTimeout(() => {this.loading = false}, 15000)
        },
        
        async askQ() {
            var question = this.question.replace("?", "")
            await axios.post("https://api-inference.huggingface.co/models/deepset/roberta-base-squad2", {
                "context": this.description,
                "question": question
            }, {
                headers: {
                    'Authorization': 'Bearer api_ghUwQXeSFuGYuXGMJBhrrIzuhvimHfANoy'
                }
            }).then((response) => {
                console.log(response.data)
                if(response.data.score > 0.5){  
                    this.answer = response.data.answer
                    this.loading = false
                }else{
                    this.loading = true
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>