<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="scale-transition" origin="center center">
      <template v-slot:activator="{ on }">
        <a href="#">
          <img src="../assets/grad-certificate.svg" alt="Grad Certificate Logo" width="30px" height="auto">
          <span class="green--text">How did I become a Web Developloer?</span>
        </a>
      </template>

    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'about',
  data: {}
}
</script>

<style lang="scss">
</style>

