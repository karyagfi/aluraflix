import Label from "./Label"

const Banner = () => {
  return (
    <section className="banner hidden md:flex items-center justify-center py-20 px-8">
      <div className="flex gap-4 max-w-[1270px]"> 
        <div className="flex-1 flex flex-col gap-4">
          <Label text="FRONT END" color="bg-blue-400"/>
          <h5 className="text-xl">Challenge React</h5>
          <p className="text-sm font-light">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
        </div>
        <div className="flex-1">
          <img src="images/img-video01.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Banner