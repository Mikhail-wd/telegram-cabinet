import "./balanceController.css"

export default function BalanceController() {
    return (
        <div className="balance-controller">
            <div className="balance-controller_leftcol">
                <span className="av-Coins">
                    Avalilable Coins
                </span>
                <span></span>
            </div>
            <div className="balance-controller_rightcol">
                <span className="av-portfolio">
                    History
                </span>
                <span className="activeBalanceController"></span>
            </div>
        </div>
    )
}