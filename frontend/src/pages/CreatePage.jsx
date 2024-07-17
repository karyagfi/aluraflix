import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import axios from "axios"

const CreatePage = () => {

  const [title, setTitle]  = useState('')
  const [category, setCategory]  = useState('0')
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')
  const [descripcion, setDescripcion] = useState('')


  function saveNewVideo(e) {
    e.preventDefault()

    if(!title || !category || !image || !video || !descripcion){
      alert('Todos los datos son obligatorios')
      return
    }

    axios.post('http://localhost:3000/videos', {title, category, image, video, descripcion})
    .then((response) => {
      console.log(response);
      if (response.request.status == 201) {
        alert('Video agregado correctamente')   
        setTitle('')
        setCategory('0')
        setImage('')
        setVideo('')
        setDescripcion('')     
      }
    })
    .catch((error) => {
      console.log(error);
      alert('El video no pudo ser agregado')
    });

  }

  return (
    <>
      <Header/>
        <section className="p-8 flex flex-col gap-4 min-h-[700px] mb-10 max-w-[1270px] mx-auto">
          <h1 className="text-center text-2xl font-bold">NUEVO VIDEO</h1>
          <p className="text-center uppercase text-xs">Complete el formulario para crear una nueva tarjeta de video</p>

          <div className="flex flex-col gap-4 mt-8">
            <h3 className="text-xl font-bold border-y border-slate-600 p-2">Crear tarjeta</h3>
            <form className="flex flex-col gap-4 md:grid md:grid-cols-2" onSubmit={saveNewVideo}>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Titulo:</label>
                <input 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="bg-inherit 
                border 
                border-slate-600 
                rounded p-1" 
                type="text" 
                placeholder="Titulo de video"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Categoría:</label>
                <select 
                value={category}
                className="bg-inherit border border-slate-600 rounded p-1" 
                onChange={(e) => setCategory(e.target.value)}>
                  <option className="bg-slate-700" value="0">Escoja una categoría</option>
                  <option className="bg-slate-700" value="frontend">Frontend</option>
                  <option className="bg-slate-700" value="backend">Backend</option>
                  <option className="bg-slate-700"value="inovacion">Inovación y Gestión</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold">Imagen:</label>
                <input 
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="bg-inherit border border-slate-600 rounded p-1"  
                  type="text" 
                  placeholder="Link de la imagen"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Vídeo:</label>
                <input 
                value={video}
                onChange={(e) => setVideo(e.target.value)}
                className="bg-inherit border border-slate-600 rounded p-1"  
                type="text" 
                placeholder="Link del vídeo"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Descripción:</label>
                <textarea 
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="bg-inherit border border-slate-600 rounded p-1"  
                placeholder="¿De qué se trata el vídeo?">
                </textarea>
              </div>

          <div className="flex flex-col md:flex-row gap-4 items-center col-span-2">
            <button className="bg-inherit text-blue-400 border border-blue-400 px-6 py-1 rounded w-28">
              GUARDAR
            </button>
            <button type="reset" className="bg-inherit text-white border border-white px-6 py-1 w-28">
              LIMPIAR
            </button>
          </div>
          </form>
          </div>
        </section>
      <Footer />
    </>
  )
}

export default CreatePage