<template>
  <v-app>
    <v-list class="pt-0"
      :class="{'toolbar__menu': $vuetify.breakpoint.smAndDown}"
      dense
      >
      <v-navigation-drawer
          stateless
          app
          hide-overlay
          v-model="drawer"
        >
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list
          class="toolbar__menu"
          dense
        >
          <v-list-item
            v-for="item in navigationItems"
            :key="item.title"
            :to="item.path == '#' ? '' : item.path"
            :exact="item.exact"
            class="ma-2"
            active-class="accent--text"
            >
            <v-icon class="pr-1">{{ item.icon }}</v-icon>
            <v-list-item-title class="option__text">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-list>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import {
  mdiAccount,
  mdiHome,
  mdiPencil,
  mdiPhone
} from '@mdi/js'

export default {
  name: 'App',

  data() {
    return {
      mdiAccount,
      mdiHome,
      mdiPencil,
      mdiPhone,
      drawer: true,
      navigationItems: [
        {
          title: 'Home',
          path: '/',
          icon: mdiHome
        },
        {
          title: 'About Me',
          path: '/about',
          icon: mdiAccount
        },
        {
          title: 'Projects',
          path: '/projects',
          icon: mdiPencil
        },
        {
          title: 'Contact',
          path: '/contact',
          icon: mdiPhone
        },
      ]
    }
  }
};
</script>
<style lang="postcss" scoped>
.option__icon {
  color: black;
}
.option__text {
  color: black;
  font-weight: 500;
}
</style>
