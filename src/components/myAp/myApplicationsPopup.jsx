import { useContext, useState } from "react"
import { AppState } from "../../routes/Root"
import checked from "../../img/checked.svg"
import unchecked from "../../img/unchecked.svg"
import "./myApplicationsPopup.css"

export default function MyApplicationsPopup() {
    const context = useContext(AppState)
    const [compState, setCompState] = useState({
        dateAndTime: false,
        recive: false,
        status: false
    })
    function closeModal(e) {
        e.stopPropagation()
        context.dispatch({ type: "close_my_applications" })
    }
    function chekForDate() {
        setCompState({ ...compState, dateAndTime: !compState.dateAndTime })
    }
    function chekForRecive() {
        setCompState({ ...compState, recive: !compState.recive })
    }
    function chekForStatus() {
        setCompState({ ...compState, status: !compState.status })
    }
    return (
        <div className="payment-invoce-popup" onClick={(e) => closeModal(e)}>
            <div className="payment-done block styled-block" onClick={(e) => e.stopPropagation()}>
                <div>
                    <h1>List of recent applications</h1>
                    <p>To get a list of all requests in CSV, click the 'Accept' button</p>
                </div>
                <div className="my-applications_check-context">
                    <span className="checkForPayment" onClick={(e) => chekForDate()}>
                        <span>
                            <span className="ckeck-box"
                                style={{ backgroundImage: `url(${compState.dateAndTime ? checked : unchecked})` }}></span>
                            <span>Date And Time</span>
                        </span>
                    </span>
                    <span className="checkForPayment" onClick={(e) => chekForRecive()}>
                        <span>
                            <span className="ckeck-box"
                                style={{ backgroundImage: `url(${compState.recive ? checked : unchecked})` }}></span>
                            <span>To Receive</span>
                        </span>
                    </span>
                    <span className="checkForPayment" onClick={(e) => chekForStatus()}>
                        <span>
                            <span className="ckeck-box"
                                style={{ backgroundImage: `url(${compState.status ? checked : unchecked})` }}></span>
                            <span>Status</span>
                        </span>
                    </span>
                </div>
                <div>
                    <button className="btn-done">Accept</button>
                </div>
            </div>

        </div>
    )
}