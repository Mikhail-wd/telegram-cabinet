import { useContext } from "react"
import { AppState } from "../../routes/Root"
import "./PaymentInvoce.css"

export default function PaymentInvoce() {
    const context = useContext(AppState)

    function closeModal(e) {
        e.stopPropagation()
        context.dispatch({ type: "close_invose" })
    }
    return (
        <div className="payment-invoce-popup" onClick={(e) => closeModal(e)}>
            <div className="payment-done block styled-block" onClick={(e) => e.stopPropagation()}>
                <p className="payment-done-title">Payment Success!</p>
                <p className="payment-done-title-info">Your payment for Pizza Hut has<br /> been successfully done</p>
                <span className="price">
                    <p>Total Payment</p>
                    <p>$ {Math.ceil(context.data.price)}</p>
                </span>
                <div className="payment-done-info">
                    <div className="payment-done-info-row"><span>Code</span><span>SLDAFLKSDJ</span></div>
                    <div className="payment-done-info-row"><span>Reference Code</span><span>-</span></div>
                    <div className="payment-done-info-row"><span>Date</span><span>August 26, 2021</span></div>
                    <div className="payment-done-info-row"><span>Time</span><span>9.13 PM</span></div>
                </div>
                <div className="payment-done-btn">
                    <button className="btn-done" >Done</button>
                    {/* <button class="btn-repeat">Pay Again</button> */}
                </div>
            </div>
        </div>
    )
}