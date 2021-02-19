<template>
  <div class="block mx-24 my-24 space-y-8">
    <profile-card/>
    <answering-machine/>
    <social-media-links/> 
    <research-paper-showcase/>
  </div>
</template>

<script>
import profileCard from "./components/profileCard.vue"
import socialMediaLinks from "./components/socialMediaLinks.vue"
import answeringMachine from "./components/answeringMachine.vue"
import researchPaperShowcase from "./components/researchPaperShowcase.vue"

//import axios from "axios"

//import { fetchDataForAllYears } from "./utils/github_contribution"

export default{

  components: {
    profileCard,
    socialMediaLinks,
    answeringMachine,
    researchPaperShowcase
  },

  data: () => ({
    colors: ["grey", "red", "green", "blue", "indigo", "purple", "pink"],
    background_color: "bg-grey-50"
  }),

  mounted() {
    var body = document.body
    body.classList.add(`bg-${this.colors[Math.floor(Math.random() * this.colors.length)]}-50`)
  }
}

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
</style>