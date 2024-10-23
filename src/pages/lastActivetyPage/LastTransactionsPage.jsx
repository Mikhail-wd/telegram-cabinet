import ActivetyPlate from "../../components/activetyPlate/activetyPlate"
import PaymentInvoce from "../../components/paymentDone/PaymentInvoce"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppState } from "../../routes/Root"
import calendar from "../../img/calendar.svg"
import FooterControl from "../../components/footerControl/footerControl"
import "./LastTransactionsPage.css"

export default function LastActivetyPage() {
    const context = useContext(AppState)
    return (
        <>
            {context.data.invose ?
                <PaymentInvoce /> : null
            }
            <div className="mainFrame_lastActiviti-page block">
                <div className="mainFrame_lastActiviti-header-alter">
                    <div className="mainFrame_header-extra">
                        <h1>
                            Last Transactions
                        </h1>
                    </div>
                    <div className="footer-btn">
                        <img className="button-img" src={calendar} alt="calendar" />
                    </div>
                </div>
                <div className="mainFrame_lastActiviti-body">
                    <ActivetyPlate page="last_activity" />
                    <ActivetyPlate page="last_activity" />
                    <ActivetyPlate page="last_activity" />
                    <ActivetyPlate page="last_activity" />
                    <ActivetyPlate page="last_activity" />
                </div>
            </div>
        </>
    )

}