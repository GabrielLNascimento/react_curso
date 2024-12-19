import './App.css'
import { useState } from 'react'

// imagem que está na pasta assets
import Rua from "./assets/img/rua.jpg"

import Data from './components/Data'

import List from "./components/List"

import ConditionalRender from './components/ConditionalRender'

import ShowUserName from './components/ShowUserName'

import CarDetails from './components/CarDetails'

import Container from './components/Container'

import Function from './components/Function'

import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

const cars = [
  { id: 1, name: "Fiat", km: 90, color: "Branco" },
  { id: 2, name: "Ferrari", km: 80, color: "Preto" },
  { id: 3, name: "Camaro", km: 75, color: "Azul" },
  { id: 4, name: "Renault", km: 40, color: "Cinza" }
]


function App() {

  function showMessage() {
    console.log("Mostrando na tela....")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
      <h1>Avançando em React</h1>
      <h3>Imagens</h3>

      <img src="/img/cachorro.jpg" alt="cachorro no tapete" />

      <img src={Rua} alt="foto da rua" />

      <Data />
      <br />
      <List />
      <br />
      <ConditionalRender />
      <br />

      <ShowUserName name="Gabrielzinho" />
      <br />

      {/* <CarDetails 
        name="Fiat" 
        km={90} 
        color="Branco" 
      /> */}

      {cars.map((car) => (
        <CarDetails 
          key={car.id} 
          name={car.name} 
          km={car.km} 
          color={car.color} 
        />
      ))}

      <Container>
        <p>Ola peesoallllll eghheehe</p>
      </Container>

      <Function myFunction={showMessage} />

      <Message msg={message}/>

      
      <ChangeMessage handleMessage={handleMessage} />
    </>
  )
}

export default App
