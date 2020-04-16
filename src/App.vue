<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
    >
      <v-btn flat class="ma-2">
        <router-link to="/">Home</router-link>
      </v-btn>
      <v-btn flat class="ma-2">
        <router-link to="/about">About</router-link>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
