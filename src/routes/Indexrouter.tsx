import { Route, Routes } from "react-router-dom"

import DefaultLayout from "../layout/DefaultLayout"
import Dashboard from "../Pages/Dashboard/Dashboard"
import Master from "../Pages/master/Master"

const Indexrouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/master" element={<Master/>}/>
      </Route>
    </Routes>
  )
}

export default Indexrouter