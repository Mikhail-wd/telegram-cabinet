import { useState } from "react"
import "./invoiceController.css"

export default function InvoiceController({ next, prev, state }) {
    const [compState, setCompState] = useState({
        step: state
    })

    function swichNext(value) {
        switch (value) {
            case 1:
                return (<div className="btn-done btn-controller" onClick={() => next()}>
                    Next
                </div>)
            case 2:
                return (<div className="btn-done btn-controller" onClick={() => next()}>
                    Next
                </div>)
            case 3:
                return (<div className="btn-done btn-controller" onClick={() => next()}>
                    Next
                </div>)
            case 4:
                return (<div className="btn-done btn-controller" onClick={() => next()}>
                    Next
                </div>)
            case 5:
                return (<div className="next-stricted">
                    Next
                </div >)
        }
    }
    function switchPrev(value) {
        switch (value) {
            case 1:
                return (<div className="prev-stricted ">
                    Prev
                </div >)
            case 2:
                return (<div className="btn-done btn-controller" onClick={() => prev()}>
                    Prev
                </div>)
            case 3:
                return (<div className="btn-done btn-controller" onClick={() => prev()}>
                    Prev
                </div>)
            case 4:
                return (<div className="btn-done btn-controller" onClick={() => prev()}>
                    Prev
                </div>)
            case 5:
                return (<div className="btn-done btn-controller" onClick={() => prev()}>
                    Prev
                </div>)
        }
    }


    return (
        <div className="mainFrame-invoice-controller">
            {switchPrev(state)}
            {swichNext(state)}
        </div>
    )
}