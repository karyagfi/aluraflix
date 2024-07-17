import axios from "axios";
import { FaPenToSquare,FaTrashCan } from "react-icons/fa6";

const Card = ({border, setOpenModal, video, onDelete, setCurrentVideoId}) => {

  function deleteVideo(id) {
    axios.delete(`http://localhost:3000/videos/${id}`)
    .then((response) => {
      console.log(response)
      onDelete(id)
      alert('Video agregado correctamente')
    })
    .catch((error) => {
      console.log(error)
      alert('El video no pudo ser eliminado')
    }) 
  }

  return (
    <article className={`border-4 ${border} rounded-2xl w-full md:w-1/2 lg:w-1/3 flex-shrink-0 lg:flex-shrink`} >
    <img src={video.image} className="rounded-t-xl w-full object-cover" alt="" />
    <div className="flex justify-evenly py-1"> 
    <button className="flex items-center gap-2" onClick={() => deleteVideo(video.id)}>
      <FaTrashCan /> Borrar
    </button>
    <button className="flex items-center gap-2" 
      onClick={() => {
        setOpenModal(true)
        setCurrentVideoId(video.id)
      }}>
      <FaPenToSquare /> Editar 
    </button>
    </div>
  </article>
  )
}

export default Card