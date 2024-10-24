import ActivetyPlate from "../../components/activetyPlate/activetyPlate"
import PaymentInvoce from "../../components/paymentDone/PaymentInvoce"
import Calendar from 'react-calendar'
import { useContext, useEffect, useState } from "react"
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
        requestReady: false,
        startDate: "",
        endDate: ""
    })

    function selectingRange(value) {
        let formingData = []
        value.map(element =>
            formingData.push(splittingRange(JSON.stringify(element)))
        )
        setCompState({
            calendarToggle: false,
            requestRange: formingData,
        })
    }
    const context = useContext(AppState)
    function toggleCalendar() {
        setCompState({ ...compState, calendarToggle: !compState.calendarToggle })
    }
    useEffect(() => {
        if (compState.requestRange.length > 0) {
            setCompState({
                ...compState,
                requestReady: true,
                startDate: compState.requestRange[0],
                endDate: compState.requestRange[1]
            })
            console.log(compState.requestRange[1])
        }
    }, [compState.requestRange])
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
                        <a className="btn-done lastActivety-footer-btn" download href="https://media.istockphoto.com/id/1361394182/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%B1%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE%D1%88%D0%B5%D1%80%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D1%8F%D1%89%D0%B8%D0%B9-%D1%88%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B8%D0%BB%D0%B8-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC.webp?s=2048x2048&w=is&k=20&c=4osV0yyYjJinw8jTodySaOhjCFQ8OULeLc9surxGGqo=">
                            Download {compState.requestRange[0].split(" ")[0] + " to " + compState.requestRange[1].split(" ")[0]}
                        </a>
                    </div>
                    : null}
            </div>
        </>
    )

}