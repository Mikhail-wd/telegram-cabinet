import { AppState } from '../../routes/Root'
import { useState, useContext } from 'react'
import "./orderType.css"

export default function OrderType({ array = ["INVOICE", "ORDER"], selecting, closingComponent }) {
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