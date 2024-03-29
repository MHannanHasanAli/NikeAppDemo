const ShoeCard = ({imgURL,BigImageChanging,BigShoeImg}) => {
  
  const ChangeImg = () =>{
    if(BigShoeImg !== imgURL.bigShoe){
        BigImageChanging(imgURL.bigShoe)
    }
  }
  
    return (
    <div className={`border-2 rounded-xl
    
    ${BigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}
    cursor-pointer max-sm:flex-1

    `}
    
    onClick={ChangeImg}
    >
      
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
      <img src={imgURL.thumbnail} alt="Shoe Collection" width={127} height={103} className="object-contain"/>
      </div>


    </div>
  )
}

export default ShoeCard
