import Router from 'ampersand-router'

export default Router.extend({
  routes: {
    '': 'home',
    'login': 'login'
  },

  home () {
    console.log('you are home')
  },

  login () {
    console.log('you are on the login page')
  }
})
