import { useState } from "react"
import Nav from "./Nav.jsx"
import Stulist from "./Stulist.js"
import Favlist from "./Favlist.js"
import Log from "./Log.js"
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
function App() {
  // const [stu, setstu] = useState([{ n: "keerthi", fav: false }, { n: "suma", fav: false }])

  const arr = [{ n: "keerthi", fav: false }, { n: "suma", fav: false }]
  return (

    <div className="bg-yellow-200 p-5 ">

      <BrowserRouter>
  
        <Routes>
          <Route path='/' element={<Log/>}></Route>
          <Route path='/Stulist' element={<Stulist stu={arr} />}></Route>
          <Route path='/Favlist' element={<Favlist stu={arr} />}></Route>

        </Routes>
      </BrowserRouter>
    </div>

  )
}
export default App