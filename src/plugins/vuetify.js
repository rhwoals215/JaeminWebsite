import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {
  theme: {
    primary: '#4F7EEA',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#CB4039',
    success: '#64BE79',
    warning: '#EDCA74',
    'green-accent': '#24ccb8',
  },
});

export default new Vuetify({
  theme: {
    dark: true,
  },
})
