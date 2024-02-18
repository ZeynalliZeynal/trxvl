const routesArr = ['Home', 'Stays', 'Flights', 'Packages', 'Sign Up']
function Route() {
  return (
    <ul className='nav-lists'>
      {routesArr.map((item) => (
        <RouteItem>{item}</RouteItem>
      ))}
    </ul>
  )
}

export default Route
function RouteItem({ children }) {
  return (
    <li
      className={`nav-list ${
        children.toLowerCase() === 'sign up' ? 'nav-list--signup' : ''
      }`}
    >
      <a href='#'>{children}</a>
    </li>
  )
}
