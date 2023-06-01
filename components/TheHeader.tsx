import Link from 'next/link'

const TheHeader = () => {
  return (
    <header className="header">
      <nav className='container'>
        <Link className="header__link" href="/">
          Home
        </Link>
        <Link className="header__link" href="/blog">
          Blog
        </Link>
        <Link className="header__link" href="/about">
          About
        </Link>
      </nav>
    </header>
  )
}

export default TheHeader
