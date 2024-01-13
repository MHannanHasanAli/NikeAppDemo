const Button = ({label,URL, backgroundColor,borderColor,textColor,fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2font-montserrat px-7 py-4 border text-lg leading-none
    ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : "bg-coral-red  text-white border-coral-red"} rounded-full ${fullWidth && 'w-full'}"}`}>
        {label}

        {URL && <img src={URL} alt="arrowicon" className="w-5 h-5 ml-2 rounded-full"  />}
    </button>
  )
}

export default Button
