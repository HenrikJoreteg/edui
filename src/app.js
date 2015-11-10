var React = require('react')
var ReactDom = require('react-dom')


var Hello = React.createClass({
  render: function () {
    return <div>hello, {this.props.name}</div>
  }
})

ReactDom.render(<Hello name='edUi'/>, document.body)
