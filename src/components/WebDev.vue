<template>
  <v-flex xs3>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="scale-transition" origin="center center">
        <template v-slot:activator="{ on }">
          <a v-link="" v-on="on">
            <img src="../assets/grad-certificate.svg" alt="Grad Certificate Logo" width="30px" height="auto">
            <span class="green--text">How did I become a Web Developloer?</span>
          </a>
        </template>
        <v-card>
          <v-toolbar flat fixed floating d-flex>
            <v-btn icon light @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-container>
            <v-layout column>
              <v-flex py-3>
                <h1 class="font-weight-thin blue--text">Love for computers</h1>
                <p class="pink--text">It all started when I got goosebumps while using computer for the first time when I was a kid.
                  <br>I always thought computer would change the world around us and it definitely has done so.</p>
              </v-flex>
              <v-divider></v-divider>
              <v-flex py-3>
                <h1 class="font-weight-thin blue--text">Internet hype</h1>
                <p class="pink--text">I started learning so much online for my studies, it made me think if I could do anything with the internet.
                  <br>This introduced me to the world of Blogspot and WordPress and the concept of being a content creator.</p>
              </v-flex>
              <v-divider></v-divider>
              <v-flex py-3>
                <h1 class="font-weight-thin blue--text">Web Development</h1>
                <p class="pink--text">I took break for sometime, at this point in my life I started taking many online courses from the sites like udacity.com.
                  <br>After many small and medium courses, my choices were naturally related to web development.
                  <br>I feel like with web, you get the power to change the world on your fingertips.
                  <br>That is when I joined Web Development course at Humber.</p>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
    }
  }
}
</script>

<style lang="scss">
body {
  font-size: 20px;
}
.theme--light.v-toolbar {
  background-color: white;
}
</style>

