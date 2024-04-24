import { useNavigate } from "react-router-dom"
import Indexrouter from "./routes/Indexrouter"
import { useEffect } from "react"

const App: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/master")
  }, [])

  return <Indexrouter />
}

export default App