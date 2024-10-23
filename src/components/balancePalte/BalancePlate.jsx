import coins from "../../img/coins.svg"
import arrowUP from "../../img/arrowUp.svg"
import arrowRight from "../../img/arrowRight.svg"
// import arrowDown from "../../img/balanceOutcome.svg"
import { Link } from "react-router-dom"
// import bitcoin from "../../img/bitcoin.svg"
// import dollar from "../../img/dollar.svg"
// import usdt from "../../img/USDT.svg"
// import eth from "../../img/Ethirium.svg"
import dollar from '../../img/crypto/binance.png'
import bitcoin from "../../img/crypto/tether.png"
import eth from "../../img/crypto/ethereum.png"
import usdt from "../../img/crypto/tron.png"
import "./BalancePlate.css"

export default function BalancePlate({ value = "Eth", data }) {

    const randomNumb = Math.ceil(Math.random() * 1000)

    function switchValue(value) {
        switch (value) {
            case "Eth":
                return (
                    <div>
                        <img src={eth} alt="ethis" className="img-balance-element" />
                        <div className="plate-information">
                            <div>ETH</div>
                        </div>
                    </div>
                )
            case "Usdt":
                return (
                    <div>
                        <img src={usdt} alt="ethis" className="img-balance-element" />
                        <div className="plate-information">
                            <div>USDT</div>
                        </div>
                    </div>)
            case "Btc":
                return (
                    <div>
                        <img src={bitcoin} alt="ethis" className="img-balance-element" />
                        <div className="plate-information">
                            <div>BTC</div>
                        </div>
                    </div>)
            case "Dollar":
                return (
                    <div>
                        <img src={dollar} alt="ethis" className="img-balance-element" />
                        <div className="plate-information">
                            <div>USD</div>
                        </div>
                    </div>)
            default:
                console.warn("Error in currensy switcher")
        }
    }
    function switchCurrency(value) {
        switch (value) {
            case "Eth":
                return "ETH"
            case "Usdt":
                return "USDT"
            case "Btc":
                return "BTC"
            case "Dollar":
                return "$"
        }
    }

    return (
        <div>
            <div className="mainFrame_balance-page_item block" >
                <div className="mainFrame_balance-page_item-leftCol">
                    {switchValue(value)}
                    <Link to={`telegram-cabinet/${value}`} state={{ walletName: switchCurrency(value), balance: randomNumb }} >
                    <img src={arrowRight} className="arrow-next-page" />
                    </Link>                    
                </div>
                <hr />
                <div className="mainFrame_balance-page_item-rightCol">
                    <div className="blanace-page_information">
                        <div>
                            Est. APY
                        </div>
                        <span>Balance</span>
                    </div>
                    <div className="blanace-page_currency">
                        <span className="averege_comission"><strong>3.12%</strong></span>
                        <span className=""><strong>{randomNumb} {switchCurrency(value)}</strong> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}