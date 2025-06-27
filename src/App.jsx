import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home/index"
import ArchivePage from './pages/Archive'
import BinPage from './pages/Bin'
import { ImportantPage } from './pages/Important'


function App() {

  return (
    <>
     <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/archive" element = {<ArchivePage />}></Route>
          <Route path="/bin" element ={<BinPage />}></Route>
          <Route path="/important" element={<ImportantPage/>}></Route>
     </Routes>
    </>
  )
}

export default App
