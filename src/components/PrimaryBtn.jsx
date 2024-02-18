function PrimaryBtn({ type, children }) {
  return (
    <button className={`btn btn--${type}`} type='submit'>
      {children}
    </button>
  )
}

export default PrimaryBtn
