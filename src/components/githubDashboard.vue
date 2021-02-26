<template>
    <div class="flex flex-col xl:flex-row xl:items-center">
        <div class="w-2/3 mx-auto xl:flex-grow xl:order-last xl:w-1/3">
            <github-graph/>
        </div>
        <div class="flex flex-row items-center justify-center flex-wrap flex-none xl:w-2/3">
            <github-repo
                v-for="repo in repos" :key="repo.name"
                :name="repo.name"
                :url="repo.url"
                :stars="repo.stars"
                :description="repo.description"
                :language="repo.language"
            />
        </div>
        
    </div>
</template>

<script>
import githubRepo from "./individual/githubRepo.vue"
import githubGraph from "./individual/githubGraph.vue"

import { getGithubData } from "../utils/githubAPI.js"

export default {
    components: { 
        githubRepo,
        githubGraph,
    },

    data: () => ({
        repos: []
    }),

    mounted() {
        getGithubData().then((res) => {
            this.repos = res
        })
    }
    
}

</script>