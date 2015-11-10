import React from 'react'
import { render } from 'react-dom'

const Hello = React.createClass({
  render () {
    return <div>hello, {this.props.name}</div>
  }
})

render(<Hello name='edUi'/>, document.body)
