import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"


const Services = () => {
  return (
    <section className="flex justify-center flex-wrap max-container gap-9">
  {services.map((card)=>(
    <ServiceCard key={card.label}{...card}/>
  ))}
    </section>
  )
}

export default Services
