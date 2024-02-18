import PrimaryBtn from '../../PrimaryBtn'

function Form() {
  return (
    <form>
      <div className='form-item input'>
        <span className='search-icon'>
          <i class='bi bi-search'></i>
        </span>
        <span>
          <input
            className='search-input'
            type='text'
            placeholder='Search destinations, hotels'
          />
        </span>
      </div>
      <div className='form-btns'>
        <CheckBtn icon={'calendar.svg'}>Check in</CheckBtn>
        <CheckBtn icon={'calendar.svg'}>Check out</CheckBtn>
        <CheckBtn icon={'male.svg'}>1 room, 2 adults</CheckBtn>
        <PrimaryBtn type={'white'}>Search</PrimaryBtn>
      </div>
    </form>
  )
}

export default Form

function CheckBtn({ icon, children }) {
  console.log()
  return (
    <button className='form-item form-btn'>
      <span>
        <img
          src={`./assets/icon/${icon}`}
          alt={icon.slice(0, icon.indexOf('.'))}
        />
      </span>
      <span>{children}</span>
    </button>
  )
}
