<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <client-only>
          <notifications group="login" :duration="10000" position="top right" :max="5"/>
        </client-only>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  middleware: 'auth',
  created() {
    // this.$vuetify.theme.dark = false
  }
}
</script>

<style scoped>
body {
  background: white;
}
</style>
