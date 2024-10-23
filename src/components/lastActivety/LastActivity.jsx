import { useContext } from "react"
import { AppState } from "../../routes/Root"
import ActivetyPlate from "../activetyPlate/activetyPlate"
import { Link } from "react-router-dom"
import "./LastActivity.css"
import netflix from "../../img/netflix.svg"

export default function LastActivety() {
    const context = useContext(AppState)
    console.log(context)
    return (
        <>
            <div className="mainFrame_lastActiviti block">
                <div className="mainFrame_lastActiviti-header">
                    <div>
                        Last Transactions
                    </div>
                    <Link to={"/telegram-cabinet/last_transactions"}>See All</Link>
                    {/* <div onClick={() => context.dispatch({ type: "switch_page", payload: "lastActivety_page" })}>
                        See All
                    </div> */}
                </div>
                <div className="mainFrame_lastActiviti-body">
                    <ActivetyPlate />
                    <ActivetyPlate />
                    <ActivetyPlate />
                </div>
            </div>
        </>
    )
}