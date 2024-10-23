import { useContext } from "react"
import netflix from "../../img/netflix.svg"
import PaymentInvoce from "../paymentDone/PaymentInvoce"
import { AppState } from "../../routes/Root"
import "./activetyPlate.css"

export default function ActivetyPlate() {
    const context = useContext(AppState)
    const price = Math.ceil(Math.random() * 100)
    return (
        <>
            <div className="mainFraim_lastActiviti-body-element styled-block-small" onClick={() => context.dispatch({ type: "open_invose", payload: price })}>
                <div className="mainFraim_lastActiviti-body-leftcol">
                    <img src={netflix} alt="image" className="image-body-element button-img" />
                    <span>
                        <p>Netflix Subscription</p>
                        <p>August 26, 2021 | My Project</p>
                    </span>
                </div>
                <div className="activity-subs-price">
                    <span>
                        $ {price}
                    </span>
                </div>
            </div>
        </>
    )
}