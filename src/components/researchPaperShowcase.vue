<template>
    <div class="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
        <research-paper-card
            paper_name='Exploring the Game of "Chopsticks"'
            paper_description="I explore the Chinese hand game 'Chopsticks' through a Game Theory approach to map out all the different possible outcomes of such a game. The research was inconclusive but did lead to very interesting results regarding Modular Arithmetics."
            embed_link="https://drive.google.com/file/d/1NYdho1c5zvty_md2AXltANq-Ei85sj8k/preview"
        />
        <research-paper-card
            paper_name="Verifying The Rate of Expansion of The Universe"
            paper_description="I explore the various methods of calculating Hubble's Constant, a.k.a the rate of expansion of the universe. I then embark on a quest onto devising a method that will allow me to do this exact thing from the comfort of my home equipped only with my laptop and an internet connection (and NASA's databases)."
            embed_link="https://drive.google.com/file/d/1NHkd3A7BCR1-fSP3o50chOXW7ibyWx5a/preview"
            blog_link="https://andantillon.substack.com/p/calculating-the-rate-at-which-the-universe-is-expanding-with-nothing-but-a-laptop-921c00d98277?r=gpkqm&utm_campaign=post&utm_medium=web&utm_source=copy"
        />
        <research-paper-card
            paper_name="The Effectiveness and Transferability of Adversarial Machine Learning"
            paper_description="I explore the intricacies and details of the field which studies the 'hacking' of Machine Learning models and AI and answer the question 'To what extent do adversarial examples effectively transfer from one model onto another?'."
            embed_link="https://drive.google.com/file/d/1bp450-VwHza_vkisFc92lUCISrbN9Dy7/preview"
        />

    </div>
</template>

<script>
import researchPaperCard from "./individual/researchPaperCard.vue"

export default {

    components: {
        researchPaperCard
    },

    data: () => ({

    })
    
}
</script>