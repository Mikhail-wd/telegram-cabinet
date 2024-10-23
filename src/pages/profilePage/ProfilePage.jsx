import { useState } from "react"
import "./ProfilePage.css"

export default function ProfilePage() {
    const [compState, setCompState] = useState({
        phone: "+7 900 900 93 33",
        mail: "test@test.com",
        wallet: "USDT (TRC20)"
    })
    return (
        <div className="profile block">
            <div className="profile_title">
                <h1>Profile</h1>
            </div>
            <div className="profile_names-block">
                <div className="name">
                    <p>Name:</p>
                    <p>Test</p>
                </div>
                <div className="surname">
                    <p>Surname:</p>
                    <p>Test</p>
                </div>
                <div className="second-name">
                    <p>Second Name:</p>
                    <p>Test</p>
                </div>
            </div>
            <div className="profile_contacts styled-block">
                <div className="profile_phone">
                    <p>Phone:</p>
                    <input type="text" className="invoice-input" placeholder={compState.phone} />
                </div>
                <div className="profile_mail ">
                    <p>Email:</p>
                    <input type="text" className="invoice-input" placeholder={compState.mail} />
                </div>
                <div className="profile_wallet">
                    <p>Wallet:</p>
                    <input type="text" className="invoice-input" placeholder={compState.wallet} />
                </div>
                <button className="btn-done">Accept Change</button>
            </div>
        </div>
    )
}