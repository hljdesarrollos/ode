import kitten from '../../public/image/400.jpg'
import CardTratamientos from './CardTratamientos'

const Tratamientos = () => {
  return (
    <section className='tratamientos container'>
        <h2 className="section-title">Nuestros tratamientos</h2>
        <article className='row t-cards mb-5'>
            <CardTratamientos img={kitten} text="Implante Dental" /> 
            <CardTratamientos img={kitten} text="Prótesis Dental" /> 
            <CardTratamientos img={kitten} text="Ortodoncia" /> 
            <CardTratamientos img={kitten} text="Blanqueamiento Dental" /> 
        </article>
    </section>
  )
}

export default Tratamientos