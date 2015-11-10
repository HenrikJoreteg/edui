import React from 'react'
import ampConnect from 'ampersand-react-connector'

const HomePage = React.createClass({
  render () {
    const { books } = this.props

    debugger;

    return (
      <div>
        <h2>Books</h2>
        <div>
          {books.map((book) => {
            return <div>{book.title} <span>Hello</span></div>
          })}
        </div>
      </div>
    )
  }
})

export default ampConnect(HomePage)
