import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './components/main/main'
import Navbar from './Components/Navbar/Navbar'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Notfound from './Not-found'
import AddUser from './Components/users/AddUser'
import EditUser from './Components/users/EditUser'

function App() {


  return (
    <>
     <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/contact" element={<Contact/>} />
          <Route  path="/users/add" element={<AddUser/>} />
          <Route  path="/users/edit" element={<EditUser/>} />
          <Route  path="*" element={<Notfound/>} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
