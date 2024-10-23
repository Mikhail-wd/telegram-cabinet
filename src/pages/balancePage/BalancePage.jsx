import eye from "../../img/eye.svg"
import usdt from "../../img/USDT.svg"
import eth from "../../img/Ethirium.svg"
import BalanceController from "../../components/balanceController/balanceController"
import BalancePlate from "../../components/balancePalte/BalancePlate"
import "./BalancePage.css"

export default function BalancePage() {
    return (
        <div className="mainFrame_balance-page block">
            <div className="mainFrame_balance-page-utility">
                <div className="balance-page-utility_left">
                    <div>
                        <span className="mainFraim_balance-balance">Est Stacking Asset</span>
                        <span className="mainFraim_balance-total">0 USD</span>
                    </div>
                    <div>
                        <span className="mainFraim_balance-balance">Total Cumulative Interest</span>
                        <span className="mainFraim_balance-total-alter"> 0 USD</span>
                    </div>
                </div>
                <div className="balance-page-utility_right">
                    
                    <div>
                        <span className="mainFraim_balance-balance">24 hours Profit</span>
                        <span className="mainFraim_balance-total-alter"> 0 USD</span>
                    </div>
                </div>
            </div>
            {/* <BalanceController /> */}
            <BalancePlate value="Eth" />
            <BalancePlate value="Usdt" />
            <BalancePlate value="Btc" />
            <BalancePlate value="Dollar" />
        </div>
    )
}