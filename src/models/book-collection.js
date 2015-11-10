import Collection from 'ampersand-rest-collection'
import Book from './book'

export default Collection.extend({
  initialize () {
    this.fetch()
  },
  model: Book,
  url: 'https://library-data.herokuapp.com/books',
  parse (result) {
    return result.data
  }
})
