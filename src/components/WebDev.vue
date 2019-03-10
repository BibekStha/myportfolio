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
          <v-toolbar flat fixed floating>
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

