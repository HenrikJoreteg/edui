import React from 'react'
import { render } from 'react-dom'
import Router from 'ampersand-router'
import HomePage from './pages/home'


export default Router.extend({
  routes: {
    '': 'home',
    'login': 'login'
  },

  home () {
    render(<HomePage/>, document.body.firstChild)
  },

  login () {
    console.log('you are on the login page')
  }
})
