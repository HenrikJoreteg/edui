import Router from './router'
import './styles/main.styl'
import BookCollection from './models/book-collection'

window.app = {
  init () {
    this.router = new Router()
    this.router.history.start()
    this.books = new BookCollection()
  }
}

window.app.init()
