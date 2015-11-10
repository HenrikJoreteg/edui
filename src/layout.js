import React from 'react'

export default React.createClass({
  render () {
    return (
      <div>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li>LibraryData</li>
            <li><a href='/'>books</a></li>
            <li className='pull-right'><a href='/login'>Login With Twitter</a></li>
          </ul>
        </nav>
        <div className='container'>{this.props.children}</div>
      </div>
    )
  }
})
