import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './componets/button'

function App() {
  const [contador, setContador] = useState(0)

  const incrementarContador = () => setContador(contador+1)
  const decrementarContador = () => setContador(contador-1)
  return (
    <>
      <h1>contenedor: {contador}</h1>
      <Button text={'incrementar'} funcionalidad={(incrementarContador)}/>
       <Button text={'Decrementar'} funcionalidad={(decrementarContador)}/> 
    </>
  )
}

export default App  
