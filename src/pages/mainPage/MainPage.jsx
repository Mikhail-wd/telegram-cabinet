import wallet from "../../img/wallet.svg"
import plus from "../../img/plus.svg"
import send from "../../img/send.svg"
import moar from "../../img/more.svg"
import { Link } from "react-router-dom"
import LastActivety from "../../components/lastActivety/LastActivity"
import PaymentInvoce from "../../components/paymentDone/PaymentInvoce"
import { useContext } from "react"
import { AppState } from "../../routes/Root"
import "./MainPage.css"

export default function MainPage() {
    const context = useContext(AppState)
    return (
        <>
            {context.data.invose ?
                <PaymentInvoce /> : null
            }
            <div className="mainFrame_header block ">
                <h1><span>Welcome,</span><br /><span>Mike Joe</span></h1>
                <Link to={"/profile"} className="mainFrame_header-avatar"></Link>
            </div>
            <div className="mainFrame_balance block styled-block">
                <div className="mainFrame_balance-button-and-money">
                    <button className="balance-btn">Total Balance</button>
                    <h2>$ 1.450,00 USD</h2>
                    <hr />
                </div>
                <div className="mainFrame_balance-controls-button">
                    {/* <Link to={"/cashflow"} className="utility-btn">
                        <img src={send} alt="send" className="button-img" />
                        <p>Cashflow</p>
                    </Link> */}
                    <Link to={"/invoice"} className="utility-btn">
                        <img src={plus} alt="plus" className="button-img" />
                        <p>Invoice </p>
                    </Link>
                    <Link to={"/total_balance"} className="utility-btn ">
                        <img src={wallet} alt="wallet" className="button-img" />
                        <p>Balance</p>
                    </Link>
                    <Link to={"/my_projects"} className="utility-btn">
                        <img src={moar} alt="MOAR" className="button-img" />
                        <p>Projects</p>
                    </Link>
                </div>
            </div>
            <LastActivety />
        </>
    )
}