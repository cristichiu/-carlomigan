import '../setPublic/index.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from './components/login'
import Register from './components/register'
import Home from './components/home'
import Offert from './components/offert'
import MyOffert from './components/myoffert'
import AddNewOffertPannel from './components/addNewOffertPannel'

function App() {
  return (<>
  <BrowserRouter>
      <Routes>
        <Route path='home' element={<Home />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='offert' element={<Offert />}></Route>
        <Route path='myoffert' element={<MyOffert />}></Route>
        <Route path='addnewoffert' element={<AddNewOffertPannel />}></Route>
      </Routes>
  </BrowserRouter>
  </>)
}

export default App
