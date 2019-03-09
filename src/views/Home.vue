<template>
  <v-layout class="home" row fill-height>
    <v-layout align-end ma-0 home-block>
      <v-flex xs-12 sm-6 fsz>
        <router-link to="/about">
          <img alt="Bibek's headshot" src="../assets/Bibek.png" id="headshot-img">
        </router-link>
      </v-flex>
    </v-layout>
    <v-flex pa-1 xs-12 sm-6 home-block>
      <v-layout align-center justify-left pl-4 fill-height>
        <vue-typed-js :strings="['Hello there, this is <span class=\'home-name blue--text text--lighten-2\'>Bibek Shrestha</span><span class=\'home-role\'>Full Stack Web Developer</span><span class=\'home-click\'>Click my picture to know more about me</span>']">
          <span class="typing text-md-left text-xs-center"></span>
        </vue-typed-js>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
</script>

<style lang="scss">
.fsz {
  font-size: 0;
}
.home-block {
  flex-basis: 0;
  padding: 0;
}
#headshot-img {
  max-height: 90vh;
}
.typed-cursor {
  display: none;
}
.typing {
  font-size: 35px;
  font-weight: 100;
}
.home-role {
  display: block;
}
.home-click {
  display: block;
  margin-top: 30px;
  font-size: .8em;
  font-style: italic;
}
</style>