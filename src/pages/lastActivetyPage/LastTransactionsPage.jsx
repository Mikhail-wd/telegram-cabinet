import ActivetyPlate from "../../components/activetyPlate/activetyPlate"
import PaymentInvoce from "../../components/paymentDone/PaymentInvoce"
import Calendar from 'react-calendar'
import { useContext, useState } from "react"
import { AppState } from "../../routes/Root"
import calendar from "../../img/calendar.svg"
import FooterControl from "../../components/footerControl/footerControl"
import "./LastTransactionsPage.css"
import 'react-calendar/dist/Calendar.css'


function splittingRange(value) {
    let dayAndTime = JSON.parse(value).split("T")
    let time = dayAndTime[1].split(".")
    let day = dayAndTime[0].split("-")
    let rightData = ""
    rightData = day[2] + "-" + day[1] + "-" + day[0] + " " + time[0]
    return rightData
}


export default function LastActivetyPage() {
    const [compState, setCompState] = useState({
        calendarToggle: false,
        requestRange: [],
        requestReady: false
    })

    function selectingRange(value) {
        let formingData = []
        value.map(element =>
            formingData.push(splittingRange(JSON.stringify(element)))
        )
        setCompState({
            calendarToggle: false,
            requestRange: formingData,
            requestReady: true
        })
    }
    const context = useContext(AppState)
    function toggleCalendar() {
        setCompState({ ...compState, calendarToggle: !compState.calendarToggle })
    }
    console.log(compState)
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
                    <div onClick={() => toggleCalendar()} className={compState.calendarToggle ? "footer-btn active-calendar" : "footer-btn"}>
                        <img className="button-img" src={calendar} alt="calendar" />
                    </div>
                    {compState.calendarToggle ?
                        <Calendar onChange={(value) => selectingRange(value)}
                            calendarType="iso8601"
                            selectRange={true}
                            className="lastActivety-calendar"
                            locale="en-EN"
                        />
                        : null}
                </div>
                <div className="mainFrame_lastActiviti-body">
                    <ActivetyPlate page="last_activity" />
                    <ActivetyPlate page="last_activity" />
                    <ActivetyPlate page="last_activity" />
                    <ActivetyPlate page="last_activity" />
                    <ActivetyPlate page="last_activity" />
                </div>
                {compState.requestReady ?
                    <div className="lastActivety-footer block">
                        <a className="btn-done lastActivety-footer-btn" href="file://https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FkbLkHYlcTnc%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=fd46b19fc1e027d8d195ee48c7214382cf6ffa91aea7059d872b0381f8390460&ipo=images">
                            Download data
                        </a>
                    </div>
                    : null}
            </div>
        </>
    )

}