import Router from './router'
import './styles/main.styl'

window.app = {
  init () {
    this.router = new Router()
    this.router.history.start()
  }
}

window.app.init()
