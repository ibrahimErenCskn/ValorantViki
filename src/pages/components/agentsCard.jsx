import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useBreakpoint } from "../../breakPoints/points"

export default function AgentsCard() {
    const agents = useSelector((state) => state.agents.allAgents)
    const language = useSelector((state) => state.agents.lang)
    const navigate = useNavigate()
    const {breakpoint} = useBreakpoint()

    return(
        <div className="grid grid-cols-2 auto-rows-max gap-2 mt-4 mx-4">
            {
                agents.data?.map((agent,index)=>(
                    <div key={index} className={`flex items-center justify-center`}>
                        {breakpoint == "desktop" ? <img src={agent.displayIcon}/> : <img src={agent.displayIcon} onClick={() =>navigate(`/agent/${agent.uuid}`)}/>}
                        {breakpoint == "desktop" && (
                            <div className="flex flex-col ml-4 mr-4 relative">
                                <span className="text-3xl">
                                    {agent.displayName}
                                </span>
                                <span className="mt-4">
                                    {agent.description}
                                </span>
                                {
                                    language == "tr-TR" ? <button className="absolute -bottom-12 right-0 text-xl hover:bg-red-50 hover:p-2 " onClick={() =>navigate(`/agent/${agent.uuid}`)}>DETAYLAR</button> : <button className="absolute -bottom-12 right-0 text-xl hover:bg-red-50 hover:p-2" onClick={() =>navigate(`/agent/${agent.uuid}`)}>
                                    DETAILS</button>
                                }
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    )
}