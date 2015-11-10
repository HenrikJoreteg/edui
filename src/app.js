import Router from './router'
import './styles/main.styl'
import BookCollection from './models/book-collection'

window.app = {
  init () {
    this.books = new BookCollection()

    this.router = new Router()
    this.router.history.start()
  }
}

window.app.init()
