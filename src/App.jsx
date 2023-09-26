import './App.css'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'


function App() {
  return(
    <>
    <Navbar />
    
    <ItemListContainer producto= "Camisa" color= "Blanco" precio= {19.99} />
    <ItemListContainer producto= "Pantalon" color= "Negro" precio= {35.99} />
    
    </>
  )
}

export default App
