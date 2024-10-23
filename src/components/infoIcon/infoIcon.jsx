import { useState } from "react"
import info from "../../img/info.svg"
import "./infoIcon.css"

export default function InfoIcon() {
    const [compState, setCompState] = useState({
        popup: false
    })
    function openModal(event, close = null) {
        if (close === null) {
            setCompState({
                ...compState,
                popup: !compState.false
            })
        } else {
            setCompState({
                ...compState,
                popup: close
            })
        }

    }
    return (
        <div className="information-icon">
            <img src={info} alt="information" onClick={(e) => { openModal(e) }} />

            {
                compState.popup ?
                    <div className="information-wrapper">
                        <div className="information-popup" onClick={(e) => openModal(e, false)}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam ullam quibusdam, perspiciatis poepudiandae voluptates maxime adipisci architecto eveniet iste nulla sit esse quo optio?
                        </div>
                    </div>
                    :
                    null
            }
        </div>

    )
}