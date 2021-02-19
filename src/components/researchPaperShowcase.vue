<template>
    <div class="flex items-center">
        <research-paper-card
            paper_name='Exploring the Game of "Chopsticks"'
            paper_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra feugiat tellus sit amet sollicitudin."
            embed_link="https://drive.google.com/file/d/1NYdho1c5zvty_md2AXltANq-Ei85sj8k/preview"
        />
        <research-paper-card
            paper_name="Verifying The Rate of Expansion of The Universe"
            paper_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra feugiat tellus sit amet sollicitudin."
            embed_link="https://drive.google.com/file/d/1NHkd3A7BCR1-fSP3o50chOXW7ibyWx5a/preview"
            blog_link="https://andantillon.substack.com/p/calculating-the-rate-at-which-the-universe-is-expanding-with-nothing-but-a-laptop-921c00d98277?r=gpkqm&utm_campaign=post&utm_medium=web&utm_source=copy"
        />
        <research-paper-card
            paper_name="The Effectiveness and Transferability of Adversarial Machine Learning"
            paper_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra feugiat tellus sit amet sollicitudin."
            embed_link="https://drive.google.com/file/d/12aSkF8bYWQJvv5lArKOORXvD1VBZQNQP/preview"
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