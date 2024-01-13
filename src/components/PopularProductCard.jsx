import { star } from "../assets/icons"

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
      <div className="flex justify-start gap-2.5 mt-8">
        <img src={star} alt="rating" width={24} height={24}/>
        <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.9)</p>
      </div>
      <h3 className="fonr-palanquin font-semibold text-2xl mt-2 leading-normal">{name}</h3>
      <h5 className="font-montserrat font-semibold font-2xl text-coral-red mt-2 leading-normal">{price}</h5>
    </div>

    
  )
}

export default PopularProductCard
