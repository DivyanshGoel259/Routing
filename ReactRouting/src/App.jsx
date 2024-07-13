
import { BrowserRouter,Routes,Route , useNavigate} from 'react-router-dom'
import React from 'react'
const Landing = React.lazy(()=>import("./components/Landing"))
const Dashboard = React.lazy(()=>import("./components/Dashboard"))

function App(){
  return(
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element = {<Dashboard/>}/>
          <Route path="/" element = {<Landing/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}
export default App

function Appbar(){
  const navigate = useNavigate()
  return <div>
    <div>
      <button onClick={()=>{
        navigate("/")
      }}>Landing Page</button>
      <button onClick={()=>{
        navigate("/Dashboard")
      }}>Dashboard</button>
    </div>
  </div>
}