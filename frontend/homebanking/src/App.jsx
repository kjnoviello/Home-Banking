import './App.css'
import Input from './components/Input/Input'
import Button from './components/Button/Button'

function App() {

  return (
    <>
      <h1>hello world</h1>
      
      {/* Voy cargando los componentes para ir viendo el render */}
      <Input placeholder="Usuario" img="/icons/person.svg"></Input>
      <Input placeholder="Clave Segura" type="password" img="/icons/Vector.svg" iconTrailing="/icons/trailing.svg" showIconTrailing="true"></Input>
      <Button title="Iniciar Sesión"></Button>
    </>
  )
}

export default App
