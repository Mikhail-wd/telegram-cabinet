import home from "../../img/home.svg"
import focus from "../../img/focus.svg"
import level from "../../img/level.svg"
import gps from "../../img/gps.svg"
import settings from "../../img/settings.svg"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppState } from "../../routes/Root"

import './footerControl.css'

export default function FooterControl() {
    const context = useContext(AppState)
    return (
        <div className="mainFrame_footer-controls block">
            <Link to={"/telegram-cabinet/"} className="footer-btn">
                <img src={home} alt="home" className="button-img" />
            </Link>
            <Link to={"/telegram-cabinet/invoice"} className="footer-btn">
                <img src={level} alt="home" className="button-img" />
            </Link>
            <div className="footer-btn-big">
                <img src={focus} alt="focus" className="button-img" />
            </div>
            <Link to={"/telegram-cabinet/support"} className="footer-btn">
                <img src={gps} alt="gps" className="button-img" />
            </Link>
            <div className="footer-btn">
                <img src={settings} alt="settings" className="button-img" />
            </div>
        </div >
    )
}