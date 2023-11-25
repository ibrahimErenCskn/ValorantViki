import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getAgentDetail } from "../../app/getValorantApi"
import Header from "./header"
import { useBreakpoint } from "../../breakPoints/points"

export default function AgentDetails ( ){

    const {id}  = useParams()
    const dispatch = useDispatch()
    const agentDetail = useSelector((state) => state.agents.agentDetail)
    const status = useSelector((state) => state.agents.allAgentsStatus)
    const language = useSelector((state) => state.agents.lang)
    const {breakpoint} = useBreakpoint()


    useEffect(()=>{
        dispatch(getAgentDetail([id,language]))
    },[language])

    return(
        <div>
            <Header/>
            {
                status != "SUCCESS" ? (
                    <div>NABER</div>
                ) : (
                    <div className="w-full h-[52.7rem] flex items-center justify-center">
                        <div className="w-full flex">
                            {breakpoint =="desktop" && ( <img src={agentDetail?.data?.fullPortrait} className="w-72 h-[40rem] object-cover ml-4"/>)}
                            <div className="flex flex-col ml-8 justify-center ">
                                {breakpoint =="desktop" ? ( <div className="text-5xl pb-4 mt-4 max-h-[25rem]">{agentDetail?.data?.displayName}</div>):( <div className="text-6xl pb-4 mt-4 max-h-[25rem] mb-16">{agentDetail?.data?.displayName}</div>)}
                                {
                                    agentDetail?.data?.abilities.map((v,i) => (
                                        <div key={i} className="flex mb-4 mr-8">
                                            {breakpoint !="desktop" ?( <img src={v.displayIcon} className="bg-black object-center h-16"/>) : ( <img src={v.displayIcon} className="bg-black object-center h-32"/>)}
                                            <div>
                                                {
                                                    breakpoint !="desktop" ?( <div className="ml-4 text-4xl">{v.displayName}</div>) : ( <div className="ml-4 text-2xl">{v.displayName}</div>)
                                                }
                                                {
                                                    breakpoint =="desktop" && (<div className="ml-4 mt-4">{v.description}</div>)
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div> 
                )
            }
        
        </div>
    )
}