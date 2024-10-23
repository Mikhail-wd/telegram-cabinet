import { useContext } from 'react'
import { AppState } from '../../routes/Root'
import MyApplicationsPopup from '../../components/myAp/myApplicationsPopup'
import './CashflowPage.css'

export default function CashflowPage() {
    const context = useContext(AppState)
    return (
        <>
            {context.data.applications ? <MyApplicationsPopup /> : null}
            <div className='cashflow-page block'>
                <div className='cashflow-page_title'>
                    <h1>Cashflow</h1>
                </div>
                <div className='cashflow-page_content'>
                    <p>You'r Balance:</p>
                    <ul>
                        <li><span>RUB :</span><span></span><span> 343</span></li>
                        <li><span>USD :</span><span></span><span>53</span></li>
                        <li><span>USDT :</span><span></span><span>1245</span> </li>
                        <li><span>TRX :</span><span></span><span> 34</span></li>
                        <li><span>ETH :</span><span></span><span>151</span> </li>
                        <li><span>PayPal_USD :</span><span></span><span>3</span> </li>
                        <li><span>PayPal_EURO :</span><span></span><span> 53</span></li>
                    </ul>
                </div>
                <hr />
                <div className='cashflow-page_context-help styled-block'>
                    <p>Calculation Of Commission* :</p>
                    <ul>
                        <li> Commission = Commission + (Commission * (1 - Turnover Ratio))</li>
                        <li>Turnover Ratio: <span>1.0</span></li>
                        <li>Withdrawal fee RUB, USD, EUR: <span>15%</span>  </li>
                        <li>PayPal withdrawal fee: <span>10%</span></li>
                        <li>Yandex withdrawal fee: <span>10%</span></li>
                        <li>  USDT Withdrawal Fee: <span>1%</span> + Network Fee</li>
                        <li>TRX withdrawal fee: <span>1%</span> + network fee</li>
                        <li> ETH withdrawal fee: <span>1%</span> + network fee</li>
                    </ul>
                    <p className='withdraw-warning'>*Withdraw are made Mon-Fri 10-18 Moscow time and may take up to 48 hours</p>
                </div>
                <div className='cashflow-page_buttons'>
                    <button className='btn-done'>Order withdrawal</button>
                    <button className='btn-done' onClick={() => context.dispatch({ type: "open_my_applications" })}>My Requests</button>
                    <button className='btn-done'>Upload invoices</button>
                </div>
            </div >
        </>
    )
}