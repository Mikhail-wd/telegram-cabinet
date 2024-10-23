import { useContext } from "react"
import { AppState } from "../../routes/Root"
import { useState } from "react"
import arrowUp from "../../img/arrowUp.svg"
import "./scrollDowsListProjects.css"

const filters = []
const banksFilters = ["VISA", "MASTERCARD", "МИР"]

export default function ScrollDownListProjects({ array = [], selecting, closingComponent }) {
    const context = useContext(AppState)
    const [compState, setCompState] = useState({
        dropDownActive: false,
        selectedCurrency: "",
        selectFilter: "ALL",
    })

    return (
        <div className="scroll-down-bg" >
            <div className="scroll-down-close">
                <span onClick={(e) => closingComponent(e)}>+</span>
            </div>
            <div className="scroll-down-filter-list">
            </div>
            <ul className="scroll-down-list block">
                {array.map((element, index) => {
                    return <li key={index} onClick={() => selecting(element)}>{element}</li>
                })}
            </ul>
        </div>
    )
}