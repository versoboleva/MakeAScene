import { useState } from 'react'
import './App.css'
import EventCard from "./components/EventCard"

function App() {
  return(
    <>
      <EventCard event={{
        title: "Event Title", 
        initiativeName: "Initiative", 
        initiativeImage: "/src/assets/image.png", 
        isFavorite: true, date: "18.05.2026", 
        description: "This event has a description",
        banner: "/src/assets/image.png", 
      }}/>

      <EventCard event={{
        title: "Event Title", 
        initiativeName: "Initiative", 
        initiativeImage: "/src/assets/image.png", 
        isFavorite: true, date: "18.05.2026", 
        description: "This event has a description",
        banner: "/src/assets/image.png", 
      }}/>
    </>
  )
}


export default App
