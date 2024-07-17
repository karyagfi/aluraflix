import Header from "../components/Header"
import Banner from "../components/Banner"
import Label from "../components/Label"
import Card from "../components/Card"
import Footer from "../components/Footer"
import ModalForm from "../components/ModalForm"
import { useEffect, useState } from "react"
import axios from 'axios';

const HomePage = () => {

  const [openModal, setOpenModal] = useState(false)
  const [videosFrontend, setvideosFrontend] = useState([])
  const [videosBackend, setvideosBackend] = useState([])
  const [videosInovacion, setvideosInovacion] = useState([])
  const [currentVideoId, setCurrentVideoId] = useState(null)
  
  useEffect(() => {
    axios.get('http://localhost:3000/videos?category=frontend')
    .then((response) => {
      setvideosFrontend(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [videosFrontend])

  useEffect(() => {
    axios.get('http://localhost:3000/videos?category=backend')
    .then((response) => {
      setvideosBackend(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [videosBackend])

  useEffect(() => {
    axios.get('http://localhost:3000/videos?category=inovacion')
    .then((response) => {
      setvideosInovacion(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [videosInovacion])

  return (
    <>
    { openModal && <ModalForm currentVideoId={currentVideoId}  setOpenModal={setOpenModal} /> }
    <Header />
      <Banner/>

      <section className="flex flex-col gap-4 p-10 max-w-[1270px] mx-auto">
        <h3 className="text-center lg:text-start">
        <Label text="FRONT END" color="bg-blue-400" />
        </h3>
        <div className="flex gap-4 overflow-x-auto">
         {
          videosFrontend.length === 0 ?
            (<p className="text-slate-400">No hay videos de frontend registrados</p>) :
            (videosFrontend.map((video, index) => 
            <Card 
              key={index} 
              video={video}
              border="border-blue-400" 
              onDelete = {() => videosFrontend.filter(video = video.id !== id)}
              setOpenModal={setOpenModal}
              setCurrentVideoId={setCurrentVideoId}
              />
            )) 
         }
        </div>
      </section>

      <section className="flex flex-col gap-4 p-10 max-w-[1270px] mx-auto">
        <h3 className="text-center lg:text-start">
        <Label text="BACK END" color="bg-green-400" />
        </h3>
        <div className="flex gap-4 overflow-x-auto">
         {
          videosBackend.length === 0 ?
            (<p className="text-slate-400">No hay videos de backend registrados</p>) :
            (videosBackend.map((video, index) => 
            <Card 
              key={index} 
              video={video}
              border="border-green-400" 
              onDelete = {() => videosBackend.filter(video = video.id !== id)}
              setOpenModal={setOpenModal}
              setCurrentVideoId={setCurrentVideoId}
              />
            )) 
         }
        </div>
      </section>

      <section className="flex flex-col gap-4 p-10 max-w-[1270px] mx-auto">
        <h3 className="text-center lg:text-start">
        <Label text="INOVACIÓN Y GESTIÓN" color="bg-yellow-400" />
        </h3>
        <div className="flex gap-4 overflow-x-auto">
        {
          videosInovacion.length === 0 ?
            (<p className="text-slate-400">No hay videos de inovacion registrados</p>) :
            (videosInovacion.map((video, index) => 
            <Card 
              key={index} 
              video={video}
              border="border-yellow-400" 
              onDelete = {() => videosInovacion.filter(video = video.id !== id)}
              setOpenModal={setOpenModal}
              setCurrentVideoId={setCurrentVideoId}
              />
            )) 
         }
        </div>
      </section>

      <Footer />
      </>
  )
}

export default HomePage