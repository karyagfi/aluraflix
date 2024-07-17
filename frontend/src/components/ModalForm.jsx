import axios from "axios"
import { useEffect, useState } from "react"
import { FaTimesCircle } from "react-icons/fa"

const ModalForm = ({setOpenModal, currentVideoId}) => {

  const [title, setTitle]  = useState('')
  const [category, setCategory]  = useState('0')
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')
  const [descripcion, setDescripcion] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:3000/videos/${currentVideoId}`)
    .then((response) => {
      setTitle(response.data.title)
      setCategory(response.data.category)
      setImage(response.data.image)
      setVideo(response.data.video)
      setDescripcion(response.data.descripcion)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  function updateVideo(e) {
    e.preventDefault()

    if(!title || !category || !image || !video || !descripcion){
      alert('Todos los datos son obligatorios')
      return
    }

    axios.put(`http://localhost:3000/videos/${currentVideoId}`, {title, category, image, video, descripcion})
    .then((response) => {
      console.log(response);
      if (response.request.status == 200) {
        alert('Video actualizado correctamente') 
        setOpenModal(false)
      }
    })
    .catch((error) => {
      console.log(error);
      alert('El video no pudo ser actualizado')
    });
  }

  return (
    <section className="h-screen w-screen fixed z-10 bg-slate-700 bg-opacity-80 grid place-items-center">
      <form onSubmit={updateVideo} className=" relative bg-slate-800 py-4 px-10 border-2 border-blue-400 rounded-lg min-w-[400px] flex flex-col gap-2">
        <h1 className="text-2xl text-blue-500 font-bold">EDITAR CARD: {currentVideoId}</h1>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Titulo:</label>
          <input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-inherit border border-blue-400 rounded p-1" 
            type="text" 
            placeholder="Titulo de video"/>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Categoría:</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-inherit border border-blue-400 rounded p-1" >
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
            className="bg-inherit border border-blue-400 rounded p-1"  
            type="text" 
            placeholder="Link de la imagen"/>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Vídeo:</label>
          <input 
            value={video}
            onChange={(e) => setVideo(e.target.value)}
            className="bg-inherit border border-blue-400 rounded p-1"  
            type="text" 
            placeholder="Link del vídeo"/>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Descripción:</label>
          <textarea 
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="bg-inherit border border-blue-400 rounded p-1"  
            placeholder="¿De qué se trata el vídeo?"></textarea>
        </div>

        <div className="flex justify-between mt-8">
          <button className="bg-inherit text-blue-400 border border-blue-400 px-6 py-1 rounded w-28">
            GUARDAR
          </button>
          <button 
            type="reset"
            className="bg-inherit text-white border border-white px-6 py-1 w-28">
            LIMPIAR
          </button>
        </div>
          
        <button 
          onClick={() => setOpenModal(false)}
          className="absolute top-4 right-4 text-xl">
          <FaTimesCircle/>
        </button>
      </form>
    </section>
  )
}

export default ModalForm