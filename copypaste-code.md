Layout HTML

```
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
  <div className='container'></div>
</div>
```

Book Page

```
<div>
  <h2>Books</h2>
  <div>
    {books.map((book) => {
      return (<BookItem key={book.id} book={book}/>)
    })}
  </div>
</div>
```

Login link:

```
<li className='pull-right'>
  <img src={avatarUrl} className='avatar avatar-small avatar-rounded'/>{name} <a href='/logout'>Logout</a>
</li>
```

Book item: 

```
<div>
  <span className='octicon octicon-repo'></span> <a href=''></a>
</div>
```

Book detail main:

```
<div className='book-detail'>
  <h3></h3>
  <img src='' height='200'/>
  <p></p>
</div>
```

Book checkout buttons: 

```
<p>
  <button className='button' disabled=''>
    <span className='octicon octicon-repo'></span> Checkout Book
  </button>&nbsp;
  <button className='button' disabled=''>
    <span className='octicon octicon-repo-push'></span> Return Book
  </button>
</p>
```

Message page

```
<div>
  <h1></h1>
  <p></p>
</div>
```


Styles

```
header
  padding-top: 50px
  
nav
  .avatar
    margin-bottom: -7px
    margin-right: 5px
    
.book-detail
  img
    float: left
    margin-right: 20px
    margin-bottom: 10px

```


Repo Detail

```
<div className='container'>
  <h1></h1>
  <p></p>
  <ul></ul>
</div>
```

Labels

```
<form className='label'>
  <span className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
  <input name='name'/>
  <input name='color'/>
  <button type='submit' className='button button-small'>Save</button>
  <button type='button' className='button button-small button-unstyled'>cancel</button>
</form>
```

```
<div className='label'>
  <span className='label-color' style={{backgroundColor: cssColor}}>&nbsp;</span>
  <span></span>
  <span className='octicon octicon-pencil'></span>
  <span className='octicon octicon-x'></span>
</div>
```