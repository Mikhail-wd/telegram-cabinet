import { useState } from "react"
import ScrollDownListProjects from "../../components/scrollDowsListProjects/scrollDowsListProjects"
import ScrollDownList from "../../components/scrollDownList/scrollDownList"
import checked from "../../img/checked.svg"
import unchecked from "../../img/unchecked.svg"
import InfoIcon from "../../components/infoIcon/infoIcon"
import OrderType from "../../components/ordersType/orderType"
import "./InvoicePage.css"



export default function InvoicePage() {
    const defaultState = {
        productName: null,
        myProject: null,
        activeCurrency: null,
        activePayment: null,
        email: "",
        total: null,
        tag: false,
        payment: false,
        link: false,
        gate: false,
        orderCheck: false,
        myProjects: false,
        tagValue: ""
    }
    const [compState, setCompState] = useState({
        productName: null,
        myProject: null,
        activeCurrency: null,
        activePayment: null,
        email: "",
        total: null,
        tag: false,
        payment: false,
        link: false,
        gate: false,
        orderTypeSelected: null,
        orderCheck: false,
        myProjects: false,
        tagValue: ""
    })
    const currencyArray = [
        "BTC", "ETH", "TNH", "PKD"
    ]
    const paymentArray = [
        "PayPal", "Visa", "MasteCard"
    ]
    const myProjects = [
        "Car Wash On Baker.st", "Pottering west", "Tabaco Cargo International", "AirLine HonkHonk"
    ]
    const paymentMethod = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSk1F9cEGz48s1DVh4rnUm6KiG-v8r6QKasg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhgr7kVujdzrYKHAbwGRRFvvcrpx-zCPRNQ&s",
        "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
    ]
    const imgArr = [
        "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png",
        "https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png",
        "https://s2.coinmarketcap.com/static/img/coins/32x32/1958.png",
        "https://s2.coinmarketcap.com/static/img/coins/32x32/6636.png"

    ]
    function shareButtonFunc(event) {
        event.preventDefault()
        if (navigator.share) {
            navigator.share({
                url: "https://i.pinimg.com/736x/73/5f/4e/735f4ee165845b381f204dd6d6d18e87.jpg"
            })
                .catch(console.error);
        } else {
            navigator.clipboard.writeText("https://i.pinimg.com/736x/73/5f/4e/735f4ee165845b381f204dd6d6d18e87.jpg")
        }
    }
    function nextStep() {
        setCompState({ ...compState, step: compState.step + 1 })
    }
    function prevStep() {
        setCompState({ ...compState, step: compState.step - 1 })
    }
    function selectCurrencyProp(value) {
        setCompState({ ...compState, activeCurrency: value })
    }
    function selectPaymentProp(name, currency) {
        setCompState({ ...compState, activePayment: name, activeCurrency: currency })
    }
    function reciveLink() {
        setCompState({ ...compState, link: !compState.link })
    }
    function changeWithdrae(e) {
        if (!isNaN(e.target.value)) {
            if (e.target.value < 1 || e.target.value > 500000) {
                setCompState({ ...compState, total: 0 })
            } else {
                setCompState({ ...compState, total: parseInt(e.target.value, 10) })
            }
        } else {
            setCompState({ ...compState, total: 0 })
        }
    }
    function chekForGate(e) {
        e.stopPropagation()
        setCompState({ ...compState, gate: !compState.gate })
    }
    function chekForTag() {
        setCompState({ ...compState, tag: !compState.tag, tagValue: "" })
    }
    function chekForPayment(e) {
        setCompState({ ...compState, payment: !compState.payment })
    }
    function makeTag(e) {
        setCompState({ ...compState, tagValue: e.target.value })
    }
    function chekForProjects(e) {
        setCompState({ ...compState, myProjects: !compState.myProjects })
    }
    function selectMyProject(value) {
        setCompState({ ...compState, myProject: value })
    }
    function selectOrderType(value) {
        setCompState({ ...compState, orderTypeSelected: value })
    }
    function ckeckForOrderType(e) {
        setCompState({ ...compState, orderCheck: !compState.orderCheck })
    }
    // function formatingData() {
    //     switch (compState.step) {
    //         case 1:
    //             return (
    //                 <div>
    //                     <h3>Please select currency:</h3>
    //                     <div className="">
    //                         <div className="invoice-currency-block">
    //                             {imgArr.map((element, index) => {
    //                                 return <div className={compState.activeCurrency === index ? "currency-img-active" : "currency-img"}
    //                                     style={{ backgroundImage: `url(${element})` }}
    //                                     key={index}
    //                                     onClick={() => setCompState({ ...compState, activeCurrency: index })}
    //                                 > </div>
    //                             })}
    //                         </div>
    //                     </div>
    //                 </div>
    //             )
    //         case 2:
    //             return (
    //                 <div>
    //                     <h3>Please Select Payment Method:</h3>
    //                     <div className="">
    //                         <div className="invoice-currency-block">
    //                             {paymentMethod.map((element, index) => {
    //                                 return <div className={compState.activeCurrency === index ? "currency-img-active-payment" : "currency-img-payment"}
    //                                     style={{ backgroundImage: `url(${element})` }}
    //                                     key={index}
    //                                     onClick={() => setCompState({ ...compState, activePayment: index })}
    //                                 > </div>
    //                             })}
    //                         </div>
    //                     </div>
    //                 </div>
    //             )
    //         case 3:
    //             return (
    //                 <div>
    //                     <h3>Please Select Email:</h3>
    //                     <div className="">
    //                         <div className="invoice-currency-block">
    //                             <input type="text" className="withdraw-controller-input" onChange={(e) => setCompState({ ...compState, email: e.target.value })} />
    //                         </div>
    //                     </div>
    //                 </div>
    //             )
    //         case 4:
    //             return (
    //                 <div>
    //                     <h3>Please Select Amount of Currency:</h3>
    //                     <span>Between 50 and 50 000 </span>
    //                     <div className="">
    //                         <div className="invoice-currency-block">
    //                             <input className="withdraw-controller-input"
    //                                 value={compState.inputAmounOfCurrency}
    //                                 type="text" onChange={(e) => changeWithdrae(e)} />
    //                         </div>
    //                     </div>
    //                 </div>
    //             )
    //         case 5:
    //             return (
    //                 <div>
    //                     <h3>Would you like to indicate a unique payment tag?</h3>
    //                     <input type="checkbox" onClick={(e) => chekForTag(e)} />
    //                     <div className="">
    //                         <div className="invoice-currency-block">
    //                             {compState.tag ? <input className="withdraw-controller-input"
    //                                 type="text" onChange={(e) => makeTag(e)} value={compState.tagValue} /> : null
    //                             }
    //                         </div>
    //                     </div>
    //                 </div>
    //             )
    //     }
    // }
    function switchInvoice() {
        switch (compState.orderTypeSelected) {
            case "INVOICE":
                return (
                    <div className="block styled-block invoice-selecting-params">
                        <div>
                            <h3>Select Project:</h3>
                            <span className="checkForPayment" onClick={(e) => chekForProjects(e)}>
                                <span>
                                    <span className="myProjectsSelecting">{compState.myProject === null ? "My Projects" : compState.myProject}</span>
                                </span>
                            </span>
                            {compState.myProjects ?
                                <ScrollDownListProjects array={myProjects} selecting={selectMyProject} closingComponent={chekForProjects} />
                                : null}
                        </div>
                        {/* <div>
                            <h3>Enter Email:</h3>
                            <div className="">
                                <div className="invoice-currency-block">
                                    <input type="text" className="invoice-input" placeholder={compState.email}
                                        onChange={(e) => setCompState({ ...compState, email: e.target.value })} />
                                </div>
                            </div>
                        </div> */}
                        <div>
                            <h3>Enter product name:</h3>
                            <div className="">
                                <div className="invoice-currency-block">
                                    <input type="text" className="invoice-input" onChange={(e) => setCompState({ ...compState, productName: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        {compState.payment ?
                            <ScrollDownList array={paymentArray} selecting={selectPaymentProp} closingComponent={chekForPayment} />
                            : null}
                        <div>
                            <h3> Select Amount & Currency:</h3>
                            <span>Between 1 and 50 000 usd</span>
                            <div className="">
                                {compState.activeCurrency === null ?
                                    <div className="invoice-currency-block">
                                        <input className="invoice-input"
                                            disabled
                                            value={compState.total}
                                            type="text" onChange={(e) => changeWithdrae(e)} />
                                        <span onClick={(e) => chekForPayment(e)} className="invoice-input_selecting">
                                            {compState.activeCurrency === null ? "none" : compState.activeCurrency}
                                        </span>
                                    </div>
                                    :
                                    <div className="invoice-currency-block">
                                        <input className="invoice-input"
                                            value={compState.total}
                                            type="text" pattern="\d*" inputmode="numeric" onChange={(e) => changeWithdrae(e)} />
                                        <span onClick={(e) => chekForPayment(e)} className="invoice-input_selecting">
                                            {compState.activeCurrency === null ? "none" : compState.activeCurrency}
                                        </span>
                                    </div>
                                }
                            </div>
                        </div>

                        {/* <div>
                            <h3>Would you like to indicate a unique payment tag?</h3>
                            <span className="checkForPayment" onClick={(e) => chekForTag(e)}>
                                <span>
                                    <span className="ckeck-box"
                                        style={{ backgroundImage: `url(${compState.tag ? checked : unchecked})` }}></span>
                                    <span>Yes i want to create unique payment tag.</span>
                                </span>
                            </span>
                            <div className="invoice-currency-block">
                                {compState.tag ? <input className="invoice-input"
                                    type="text" onChange={(e) => makeTag(e)} value={compState.tagValue} /> : null
                                }
                            </div>
                        </div> */}
                        {compState.link ?
                            <div className="invoce-link-share">
                                <a className="invoce-formation" onClick={(e) => shareButtonFunc(e)}>https://i.pinimg.com/736x/73/5f/4e/735f4ee165845b381f204dd6d6d18e87.jpg</a>
                                <span className="btn-share" onClick={(e) => shareButtonFunc(e)}>Share</span>
                            </div>
                            : null}
                        <div>
                            {!compState.link ?
                                <button className="btn-done" onClick={() => reciveLink()}>Accept</button>
                                : null}
                        </div>
                    </div>
                )
            case "ORDER":
                return (
                    <div className="block styled-block invoice-selecting-params">
                        <div>
                            <h3>Select Project:</h3>
                            <span className="checkForPayment" onClick={(e) => chekForProjects(e)}>
                                <span>
                                    <span className="myProjectsSelecting">{compState.myProject === null ? "My Projects" : compState.myProject}</span>
                                </span>
                            </span>
                            {compState.myProjects ?
                                <ScrollDownListProjects array={myProjects} selecting={selectMyProject} closingComponent={chekForProjects} />
                                : null}
                        </div>
                        {compState.gate ?
                            <div>
                                <h3>Enter Email:</h3>
                                <div className="">
                                    <div className="invoice-currency-block">
                                        <input type="text" className="invoice-input" placeholder={compState.email}
                                            onChange={(e) => setCompState({ ...compState, email: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                            :
                            null}
                        <div>
                            <h3>Enter product name:</h3>
                            <div className="">
                                <div className="invoice-currency-block">
                                    <input type="text" className="invoice-input" onChange={(e) => setCompState({ ...compState, productName: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        {compState.payment ?
                            <ScrollDownList array={paymentArray} selecting={selectPaymentProp} closingComponent={chekForPayment} />
                            : null}
                        <div>
                            <h3> Select Amount & Currency:</h3>
                            <span>Between 1 and 50 000 usd</span>
                            <div className="">
                                {compState.activeCurrency === null ?
                                    <div className="invoice-currency-block">
                                        <input className="invoice-input"
                                            disabled
                                            value={compState.total}
                                            type="text" onChange={(e) => changeWithdrae(e)} />
                                        <span onClick={(e) => chekForPayment(e)} className="invoice-input_selecting">
                                            {compState.activeCurrency === null ? "none" : compState.activeCurrency}
                                        </span>
                                    </div>
                                    :
                                    <div className="invoice-currency-block">
                                        <input className="invoice-input"
                                            value={compState.total}
                                            type="text" pattern="\d*" inputmode="numeric" onChange={(e) => changeWithdrae(e)} />
                                        <span onClick={(e) => chekForPayment(e)} className="invoice-input_selecting">
                                            {compState.activeCurrency === null ? "none" : compState.activeCurrency}
                                        </span>
                                    </div>
                                }
                            </div>
                            <span className="checkForPayment">
                                <span>
                                    <span className="ckeck-box" onClick={(e) => chekForGate(e)}
                                        style={{ backgroundImage: `url(${compState.gate ? checked : unchecked})` }}></span>
                                    <span className="invoice_gate-info"><span>use gate</span> <InfoIcon /></span>
                                </span>
                            </span>
                        </div>
                        {/* <div>
                                <h3>Would you like to indicate a unique payment tag?</h3>
                                <span className="checkForPayment" onClick={(e) => chekForTag(e)}>
                                    <span>
                                        <span className="ckeck-box"
                                            style={{ backgroundImage: `url(${compState.tag ? checked : unchecked})` }}></span>
                                        <span>Yes i want to create unique payment tag.</span>
                                    </span>
                                </span>
                                <div className="invoice-currency-block">
                                    {compState.tag ? <input className="invoice-input"
                                        type="text" onChange={(e) => makeTag(e)} value={compState.tagValue} /> : null
                                    }
                                </div>
                            </div> */}
                        {compState.link ?
                            <div className="invoce-link-share">
                                <a className="invoce-formation" onClick={(e) => shareButtonFunc(e)}>https://i.pinimg.com/736x/73/5f/4e/735f4ee165845b381f204dd6d6d18e87.jpg</a>
                                <span className="btn-share" onClick={(e) => shareButtonFunc(e)}>Share</span>
                            </div>
                            : null}
                        <div>
                            {!compState.link ?
                                <button className="btn-done" onClick={() => reciveLink()}>Accept</button>
                                : null}
                        </div>
                    </div>
                )
            default:
                console.warn("Error in invoice switch")
        }
    }

    return (
        <div className="mainFrame-invoice-formation">
            <h1>Invoice Formation</h1>
            <div className="invoice-context block styled-block">
                <ul>
                    {compState.orderTypeSelected === "ORDER" && compState.gate ?
                        <li><span>Email:</span><span></span><span>{compState.email}</span></li>
                        : null
                    }
                    <li><span>Product Name:</span><span></span><span>{compState.productName}</span></li>
                    <li><span>Amount & Currency:</span><span></span> <span>{compState.total === null ? "" : Number(compState.total).toLocaleString("ru")} {compState.activeCurrency}</span></li>
                    <li><span>Payment Method: </span><span></span><span>{compState.activePayment}</span></li>
                    {/* <li><span>Specify a unique payment ID tag: </span><br /><span></span><span>{compState.tagValue}</span></li>  */}
                </ul>
            </div>
            <div className="order-type styled-block block">
                <h3 onClick={(e) => ckeckForOrderType(e)}>Select Order Type:</h3>
                <span onClick={(e) => ckeckForOrderType(e)}>
                    <span className="myProjectsSelecting">{compState.orderTypeSelected === null ? "Select" : compState.orderTypeSelected}</span>
                </span>

                {compState.orderCheck ? <OrderType selecting={selectOrderType} closingComponent={ckeckForOrderType} /> : null}
            </div>
            {switchInvoice()}
            {/* <div className="block styled-block invoice-selecting-params">
                <div>
                    <h3>Enter Email:</h3>
                    <div className="">
                        <div className="invoice-currency-block">
                            <input type="text" className="invoice-input" onChange={(e) => setCompState({ ...compState, email: e.target.value })} />
                        </div>
                    </div>
                </div>
                {compState.payment ?
                    <ScrollDownList array={paymentArray} selecting={selectPaymentProp} closingComponent={chekForPayment} />
                    : null}
                <div>
                    <h3> Select Amount & Currency:</h3>
                    <span>Between 1 and 50 000 USD</span>
                    <div className="">
                        {compState.activeCurrency === null ?
                            <div className="invoice-currency-block">
                                <input className="invoice-input"
                                    disabled
                                    value={compState.total}
                                    type="text" onChange={(e) => changeWithdrae(e)} />
                                <span onClick={(e) => chekForPayment(e)} className="invoice-input_selecting">
                                    {compState.activeCurrency === null ? "none" : compState.activeCurrency}
                                </span>
                            </div>
                            :
                            <div className="invoice-currency-block">
                                <input className="invoice-input"
                                    value={compState.total}
                                    type="text" pattern="\d*" inputmode="numeric" onChange={(e) => changeWithdrae(e)} />
                                <span onClick={(e) => chekForPayment(e)} className="invoice-input_selecting">
                                    {compState.activeCurrency === null ? "none" : compState.activeCurrency}
                                </span>
                            </div>
                        }
                    </div>
                    <span className="checkForPayment">
                        <span>
                            <span className="ckeck-box" onClick={(e) => chekForGate(e)}
                                style={{ backgroundImage: `url(${compState.gate ? checked : unchecked})` }}></span>
                            <span className="invoice_gate-info"><span>Use Gate</span> <InfoIcon /></span>
                        </span>
                    </span>
                </div>
                <div>
                    <h3>Select Project:</h3>
                    <span className="checkForPayment" onClick={(e) => chekForProjects(e)}>
                        <span>
                            <span className="myProjectsSelecting">{compState.myProject === null ? "My Projects" : compState.myProject}</span>
                        </span>
                    </span>
                    {compState.myProjects ?
                        <ScrollDownListProjects array={myProjects} selecting={selectMyProject} closingComponent={chekForProjects} />
                        : null}
                </div>
                <div>
                    <div className="">
                        <div className="invoice-currency-block">
                            <input className="invoice-input"
                                type="text" onChange={(e) => makeTag(e)} value={compState.tagValue} />
                            {compState.tag ? <input className="invoice-input"
                                type="text" onChange={(e) => makeTag(e)} value={compState.tagValue} /> : null
                            }
                        </div>
                    </div>
                    <h3>Would you like to indicate a unique payment tag?</h3>
                    <span className="checkForPayment" onClick={(e) => chekForTag(e)}>
                        <span>
                            <span className="ckeck-box"
                                style={{ backgroundImage: `url(${compState.tag ? checked : unchecked})` }}></span>
                            <span>Yes i want to create unique payment tag.</span>
                        </span>
                    </span>
                </div>
                {compState.link ?
                    <div className="invoce-link-share">
                        <a className="invoce-formation" onClick={(e) => shareButtonFunc(e)}>https://i.pinimg.com/736x/73/5f/4e/735f4ee165845b381f204dd6d6d18e87.jpg</a>
                        <span className="btn-share" onClick={(e) => shareButtonFunc(e)}>Share</span>
                    </div>
                    : null}
                <div>
                    {!compState.link ?
                        <button className="btn-done" onClick={() => reciveLink()}>Accept</button>
                        : null}
                </div>
            </div> */}
        </div>
    )
}