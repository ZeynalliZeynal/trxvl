import Route from './Route'

function Header() {
  return (
    <header>
      <nav>
        <div className='container'>
          <div className='row justify-between'>
            <div className='logo'>trxvl.</div>
            <Route />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
