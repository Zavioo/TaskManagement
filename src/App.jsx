import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Auth from './pages/Auth'
import Userhome from './pages/Userhome'
function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        <Route path='/userhome' element={<Userhome />}/>
       </Routes>
    </>
  )
}

export default App
