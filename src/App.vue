<template>
  <div class="">
    
    <nav-bar/>

    <div class="block mx-24 my-24 space-y-48">

      <profile-card/>

      <div class="space-y-4">
        <h1 class="text-4xl text-semibold text-center text-gray-500">
          Social Media
        </h1>
        <social-media-links/>
      </div>

      <div class="">
        <github-dashboard/>
      </div>
      
      <div class="space-y-4">
        <h1 class="text-4xl text-semibold text-center text-gray-500">
          Research
        </h1>
        <research-paper-showcase/>
      </div>

    </div>

</div>
  
</template>

<script>
import profileCard from "./components/profileCard.vue"
import socialMediaLinks from "./components/socialMediaLinks.vue"
import answeringMachine from "./components/answeringMachine.vue"
import researchPaperShowcase from "./components/researchPaperShowcase.vue"
import navBar from "./components/navBar.vue"
import githubDashboard from "./components/githubDashboard.vue"


export default{

  components: {
    profileCard,
    socialMediaLinks,
    answeringMachine,
    researchPaperShowcase,
    navBar,
    githubDashboard,
  },

  data: () => ({
  }),

  mounted() { 
  },

  methods: {
    
  }
}

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
</style>