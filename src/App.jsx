import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getAgents } from "./app/getValorantApi"
import Header from "./pages/components/header"
import Container from "./pages/components/container"
import AgentsCard from "./pages/components/agentsCard"


function App() {
  const dispatch = useDispatch()
  const language = useSelector((state) => state.agents.lang)

  useEffect(()=>{
    dispatch(getAgents(language))
  },[language])
  

  return(
    <Container>
      <div className="w-full h-full">
        <Header/>
        <AgentsCard/>
      </div>
    </Container>
  )
}

export default App
