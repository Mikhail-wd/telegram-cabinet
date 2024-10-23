import { useState, useContext, useEffect } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import WrongData from "../../components/wrongData/wrongData"
import "./WithdrawPage.css"
import { AppState } from "../../routes/Root"

export default function WithdrawPage() {
    const navigate = useNavigate()
    const context = useContext(AppState)
    const passedData = useLocation()
    const pageId = useParams()
    const [pageState, setPageState] = useState({
        inputValue: 0,
        balance: passedData.state?.balance || "error"
    })
    function changeWithdrae(e) {
        if (typeof parseInt(e.target.value, 10) === "number") {
            if (passedData.state.balance >= parseInt(e.target.value, 10)) {
                setPageState({ ...pageState, balance: passedData.state.balance - parseInt(e.target.value, 10), inputValue: parseInt(e.target.value, 10) })
            } else {
                setPageState({ ...pageState, balance: passedData.state.balance, inputValue: 0 })
            }
        } else {
            setPageState({ ...pageState, balance: passedData.state.balance, inputValue: 0 })
        }
    }

    function redirect() {
        context.dispatch({ type: "success_popup", payload: "Succesfully withdrawed" })
        setTimeout(() => {
            navigate("/total_balance")
        }, 3500)

    }
    return (
        <>
            {pageState.balance === "error" ? <WrongData /> :
                <div className="mainFraim block">
                    <div className="withdraw-header">
                        <h1>Withdraw Transaction</h1>
                    </div>
                    <div className="whithdraw-page-content styled-block">
                        <span> Balance : {pageState.balance} {passedData.state.walletName}</span>
                        <div className="whithdraw-page-conten-data">
                            <p>Card entry fee: 15%. <br />Deposit fee for <span className="wallet-value">{pageId.id}</span> wallet: 10% + network commission.</p>
                        </div>
                        <hr />
                        <div className="withdraw-controller">
                            <p>How many you want to withdraw?*</p>
                            <span>
                                <input className="invoice-input" type="text" placeholder="0" onChange={(e) => changeWithdrae(e)} value={pageState.inputValue} pattern="[0-9]*" />
                                <span className="withdraw-warning">*Withdraw are made Mon-Fri 10-18 Moscow time and may take up to 48 hours</span>
                            </span>
                            <button className="btn-done" onClick={() => redirect()}>Accept</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}