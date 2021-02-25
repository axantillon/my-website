<template>
    <div class="flex items-center">
        <div class="flex flex-row items-center flex-wrap">
            <github-repo
                v-for="repo in repos" :key="repo.name"
                :name="repo.name"
                :url="repo.url"
                :stars="repo.stars"
                :description="repo.description"
                :language="repo.language"
            />
        </div>
        <div class="w-1/3">
            <github-graph/>
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