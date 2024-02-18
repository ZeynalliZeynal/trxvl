import Form from './Form'

function Banner() {
  return (
    <section id='banner'>
      <div className='container'>
        <div className='row'>
          <h1>The whole world awaits.</h1>
        </div>
        <div className='row'>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Banner
