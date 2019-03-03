<template>
  <v-container class="about" fill-height>
    <v-layout column>
      <v-flex shrink mb-2>
        <p class="light-blue--text text--lighten-2">Bibek Shrestha</p>
      </v-flex>
      <v-layout column justify-center id="about-section">
        <v-layout id="center-img-container">
          <!-- <v-img :src="'/img/Bibek.8ced89eb.png'" :lazy-src="'/img/Bibek.8ced89eb.png'" id="center-img"></v-img> -->
          <img src="/img/Bibek.8ced89eb.png" id="center-img">
        </v-layout>
        <v-layout row justify-center align-center>
          <v-flex xs3>
            <a href="#">
              <img src="../assets/grad-certificate.svg" alt="Grad Certificate Logo" width="30px" height="auto">
              <span class="green--text">How did I become a Web Developloer?</span>
            </a>
          </v-flex>
        </v-layout>
        <v-layout row align-center>
          <v-flex xs2 offset-xs2>
            <a href="#">
              <img src="../assets/temperature.svg" alt="Degree Logo" width="30px" height="auto">
              <span class="orange--text">Degrees I have</span>
            </a>
          </v-flex>
          <v-flex xs2 offset-xs4>
            <a href="#">
              <img src="../assets/learning.svg" alt="Grad Certificate Logo" width="30px" height="auto">
              <span class="pink--text">What am I good at?</span>
            </a>
          </v-flex>
        </v-layout>
        <v-layout row align-center>
          <v-flex xs2 offset-xs1>
            <a href="#">
              <img src="../assets/contact.svg" alt="Grad Certificate Logo" width="30px" height="auto">
              <span class="indigo--text">Want to work with me?</span>
            </a>
          </v-flex>
          <v-flex xs2 offset-xs6>
            <router-link to="/resume">
              <img src="../assets/resume.svg" alt="Grad Certificate Logo" width="30px" height="auto">
              <span class="light-blue--text">Download my resume</span>
            </router-link>
          </v-flex>
        </v-layout>
        <v-layout row align-center>
          <v-flex xs2 offset-xs3>
            <a href="#">
              <img src="../assets/networking.svg" alt="Grad Certificate Logo" width="30px" height="auto">
              <span class="deep-orange--text">Check me on social media</span>
            </a>
          </v-flex>
          <v-flex xs2 offset-xs2>
            <a href="#">
              <img src="../assets/project.svg" alt="Grad Certificate Logo" width="30px" height="auto">
              <span class="red--text">Projects I have worked on</span>
            </a>
          </v-flex>
        </v-layout>
      </v-layout>
      <v-flex shrink>
        <v-flex xs3>
          <v-card dark color="blue" id="ps">
            <v-card-text>P.S. I'm obsessed with BLUE!!!</v-card-text>
          </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {}
}
</script>

<style lang="scss">
.about {
  font-size: 2rem;
}
#center-img-container {
  position: absolute;
  align-self: center;
}
#center-img {
  border-radius: 50%;
  border: 1px solid cyan;
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: auto;
}
.v-card__text {
  padding: 0;
}
#ps {
  font-family: 'Just Me Again Down Here', cursive;
  font-size: 20px;
}
</style>