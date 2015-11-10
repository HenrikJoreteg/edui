import Model from 'ampersand-model'

export default Model.extend({
  props: {
    id: 'number',
    authorId: 'number',
    title: 'string',
    description: 'string',
    imageUrl: 'string'
  }
})
