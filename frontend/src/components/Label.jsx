const Label = ({text, color}) => {
  return (
    <span className= {`${color} text-white p-2 rounded-md font-bold text-xl w-32 text-center`}>
    {text}
    </span> 
  )
}

export default Label

