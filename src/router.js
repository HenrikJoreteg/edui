import React from 'react'
import { render } from 'react-dom'
import Router from 'ampersand-router'
import HomePage from './pages/home'
import BookDetail from './pages/book-detail'
import Layout from './layout'

export default Router.extend({
  render (page) {
    page = (
      <Layout>
        {page}
      </Layout>
    )
    render(page, document.body.firstChild)
  },

  routes: {
    '': 'home',
    'login': 'login',
    'book-detail': 'bookDetail'
  },

  home () {
    this.render(<HomePage/>)
  },

  login () {
    console.log('you are on the login page')
  },

  bookDetail () {
    this.render(<BookDetail/>)
  }
})
