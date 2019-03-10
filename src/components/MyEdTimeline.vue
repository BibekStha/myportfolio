<template>
  <v-flex xs2 offset-xs2>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="scale-transition" origin="center center">
        <template v-slot:activator="{ on }">
          <a v-link="" v-on="on">
            <img src="../assets/temperature.svg" alt="Degree Logo" width="30px" height="auto">
            <span class="orange--text">Degrees I have</span>
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
                  <h1 class="font-weight-thin ed-heading">Education</h1>
                  <v-flex px-5>
                    <Timeline
                      :timeline-items="dataTimeline"
                      :message-when-no-items="messageWhenNoItems"
                      :unique-year="true"
                      order="desc"
                      class="px-5"
                    />
                  </v-flex>
                </v-list>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-dialog>
  </v-flex>
</template>

<script>
import Timeline from 'timeline-vuejs'

export default {
  data () {
    return {
      dialog: false,
      messageWhenNoItems: "There are no items",
      dataTimeline: [
        {
          from: new Date(2018, 8),
          title: '<span class="ed-title">Humber College | Toronto, ON, Canada | One year course with co-op</span>',
          description: '<span class="ed-description">Web Development - Ontario Graduate Certificate</span>'
        },
        {
          from: new Date(2011, 7),
          title: '<span class="ed-title">Jawaharlal Nehru Technological University | Kakinada, AP, India | Two years course</span>',
          description: '<span class="ed-description">High Voltage Engineering - Master of Technology</span>'
        },
        {
          from: new Date(2006, 7),
          title: '<span class="ed-title">Kathmandu University | Dhulikhel, Bagmati, Nepal | Four years course</span>',
          description: '<span class="ed-description">Electrical Engineering - Bachelor of Engineering</span>'
        },
      ]
    }
  },
  components: {
    Timeline
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
.timeline {
  max-width: inherit!important;
}
.month-item, .year {
  font-weight: 100;
  text-transform: capitalize!important;
}
.wrapper-timeline {
  color: #0288D1;
}
.ed-title {
  color: #0277BD;
  font-size: 1.2em;
}
.ed-description {
  color: #01579B;
  font-size: 1.4em;
}
.dot {
  background-color: #01579B!important;
}
.ed-heading {
  color: #01579B;
}
</style>
