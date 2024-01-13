import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
   <section id="about-us" className="flex flex-1 justify-between items-center gap-10 max-container w-full max-lg:flex-col">

   <div className="flex flex-1 flex-col">

   <h1 className="font-palanquin capitalize text-4xl font-bold">
    We Provide You <span className="text-coral-red">Super <br></br>Quality </span>
    Shoes

   </h1>

   <p className="text-slate-gray font-montserrat mt-6 leading-8 mb-8 sm:max-w-lg">
   Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
   </p>
   <p className="text-slate-gray font-montserrat leading-8 sm:max-w-lg">
   Our dedication to detail and excellence ensures your satisfaction
   </p>
    <div className="mt-11">
      <Button label="View Details"/>
    </div>

   </div>
<div className="flex flex-1 justify-center items-center">
<img src={shoe8} alt="Shoe Image" width={570} height={570} className="object-contain"/>
</div>
   </section>
  )
}

export default SuperQuality
