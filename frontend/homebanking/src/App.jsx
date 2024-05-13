import './App.css'
import Input from './components/Input/Input'
import Button from './components/Button/Button'

function App() {

  return (
    <>
      <h1>hello world</h1>
      
      {/* Voy cargando los componentes para ir viendo el render */}
      <Input placeholder="Jorge Martinez" img="/icons/person.svg"></Input>
      <Input placeholder="Clave Segura" img="/icons/Vector.svg"></Input>
      <Button title="Iniciar Sesión"></Button>
    </>
  )
}

export default App
