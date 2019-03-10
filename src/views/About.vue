<template>
  <v-container class="about" fill-height>
    <v-layout column>
      <v-flex shrink mb-2>
        <p class="light-blue--text text--lighten-2 font-weight-light">Bibek Shrestha</p>
      </v-flex>
      <v-layout column justify-center id="about-section">
        <v-layout id="center-img-container">
          <img src="../assets/Bibek.png" id="center-img">
        </v-layout>
        <v-layout row justify-center align-center>
          <webdev></webdev>
        </v-layout>
        <v-layout row align-center>
          <myedtime></myedtime>
          <v-flex xs2 offset-xs4>
            <a href="#">
              <img src="../assets/learning.svg" alt="Grad Certificate Logo" width="30px" height="auto">
              <span class="pink--text">What am I good at?</span>
            </a>
          </v-flex>
        </v-layout>
        <v-layout row align-center>
          <hireme></hireme>
          <v-flex xs2 offset-xs6>
            <a href="Resume.pdf">
              <img src="../assets/resume.svg" alt="Grad Certificate Logo" width="30px" height="auto">
              <span class="light-blue--text">Download my resume</span>
            </a>
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
          <v-card dark flat color="blue" id="ps">
            <v-card-text>P.S. I'm obsessed with BLUE!!!</v-card-text>
          </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Webdev from "../components/WebDev.vue"
import Myed from "../components/MyEd.vue"
import Myedtime from "../components/MyEdTimeline.vue"
import Hireme from "../components/HireMe.vue"

export default {
  name: 'home',
  components: {
    Webdev,
    Myed,
    Myedtime,
    Hireme
  }
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
