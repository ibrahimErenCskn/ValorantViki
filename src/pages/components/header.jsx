import { useDispatch, useSelector } from "react-redux"
import { changeLanguage } from "../../app/getValorantApi"
import { useNavigate } from "react-router-dom"
import { useBreakpoint } from "../../breakPoints/points"

export default function Header () {

    const dispatch = useDispatch()
    const language = useSelector((state) => state.agents.lang)
    const navigate = useNavigate()
    const {breakpoint} = useBreakpoint()


    const setLanguage = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    return(
        <div className="w-full h-20 flex items-center justify-between px-4 bg-red-400 text-white">
            {breakpoint == "desktop" ? <div className="text-5xl cursor-pointer" onClick={()=> navigate("/")}>Valorant WİKİ</div> : <div className="text-3xl cursor-pointer" onClick={()=> navigate("/")}>Valorant WİKİ</div>}
            <div className="text-xl">
                <select name="Language" id="language" className="text-black" onChange={setLanguage} value={language}>
                    <option value="tr-TR">tr-TR</option>
                    <option value="en-US">en-US</option>
                </select>
            </div>
        </div>
    )
}