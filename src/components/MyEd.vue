<template>
  <v-flex xs2 offset-xs2>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="scale-transition" origin="center center">
        <template v-slot:activator="{ on }">
          <a v-link="" v-on="on">
            <img src="../assets/temperature.svg" alt="Degree Logo" width="30px" height="auto">
            <span class="orange--text">My education</span>
          </a>
        </template>
        <v-card>
          <v-toolbar flat floating fixed align-self-end>
            <v-btn icon light @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-container>
            <v-layout>
              <v-flex>
                <v-list>
                  <h1 class="font-weight-thin blue--text">Education</h1>
                  <v-flex v-for="course in courses" :key="course.title" px-5>
                    <v-layout row justify-space-between>
                      <v-flex font-weight-medium text-xs-left px-5>{{ course.title }}</v-flex>
                      <v-flex course-period text-xs-right px-5>{{ course.start }} - {{ course.end }}</v-flex>
                    </v-layout>
                    <v-flex xs-12 text-xs-left px-5>{{ course.description }}</v-flex>
                    <v-flex xs-12 text-xs-left px-5>{{ course.at }}</v-flex>
                  </v-flex>
                </v-list>
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
      courses: [
        {
          title: 'Web Development',
          description: 'Ontario Graduate Certificate',
          at: 'Humber College',
          location: 'Toronto, ON, Canada',
          start: 'September, 2018',
          end: 'August, 2019'
        }
      ]
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
a span {
  text-decoration: underline;
  text-decoration-color: magenta;
}
</style>

