<template>
    <v-container>
        <pdf src="../assets/Resume.pdf"></pdf>
        <h1>Resume</h1>
    </v-container>
</template>

<script>
import pdf from 'vue-pdf'
export default {
    components: {
        pdf
    }
}
</script>

