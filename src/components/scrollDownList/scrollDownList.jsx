import { useContext } from "react"
import { AppState } from "../../routes/Root"
import { useState } from "react"
import arrowUp from "../../img/arrowUp.svg"
import "./scrollDownList.css"

const filters = ["ALL", "BANK", "PAYPAL", "YANDEX", "CRYPTO"]
const banksFilters = ["VISA", "MASTERCARD", "МИР"]
const paypal = ["PayPal"]
const currency = ["RUB", "USD", "KZT", "EUR", "USDT", "TRX", "ETH"]
const cards = JSON.parse('[{"bank_name":"Alfa-Bank","payment_system":"МИР","currency":"RUB"},{"bank_name":"VTB","payment_system":"МИР","currency":"RUB"},{"bank_name":"Tinkoff","payment_system":"МИР","currency":"RUB"},{"bank_name":"Yandex","payment_system":"Yandex","currency":"RUB"},{"bank_name":"Permata","payment_system":"VISA","currency":"USD"},{"bank_name":"Permata","payment_system":"VISA","currency":"KZT"},{"bank_name":"Permata","payment_system":"VISA","currency":"EUR"},{"bank_name":"BNI","payment_system":"MASTERCARD","currency":"USD"},{"bank_name":"BNI","payment_system":"MASTERCARD","currency":"KZT"},{"bank_name":"BNI","payment_system":"MASTERCARD","currency":"EUR"},{"bank_name":"MyBank","payment_system":"MASTERCARD","currency":"USD"},{"bank_name":"MyBank","payment_system":"MASTERCARD","currency":"KZT"},{"bank_name":"MyBank","payment_system":"MASTERCARD","currency":"EUR"},{"bank_name":"BritAma","payment_system":"MASTERCARD","currency":"USD"},{"bank_name":"BritAma","payment_system":"MASTERCARD","currency":"KZT"},{"bank_name":"BritAma","payment_system":"MASTERCARD","currency":"EUR"},{"bank_name":"USDT (TRC-20)","payment_system":"Tether","currency":"USDT"},{"bank_name":"PayPal","payment_system":"PayPal","currency":"USD"},{"bank_name":"PayPal","payment_system":"PayPal","currency":"EUR"},{"bank_name":"TRX (Tron)","payment_system":"Tron","currency":"TRX"},{"bank_name":"ETH (ERC-20)","payment_system":"Ethereum","currency":"ETH"}]')


export default function ScrollDownList({ array = [], selecting,closingComponent }) {
    const context = useContext(AppState)
    const [compState, setCompState] = useState({
        dropDownActive: false,
        selectedCurrency: "",
        selectFilter: "ALL",
        filteredArray: cards
    })

    console.log(context)
    function closeModal(e) {
        e.stopPropagation()
        context.dispatch({ type: "close_invose" })
    }

    function selectClick(value) {
        selecting(value)
        // setCompState({
        //     ...compState,
        //     selectedCurrency: array[value]
        // })
    }

    function filteringCardArray(value, filter) {
        const formatedArray = []
        for (let x = 0; x < value.length; x++) {
            for (let y = 0; y <= filter.length; y++) {
                if (value[x].payment_system.includes(filter[y])) {
                    formatedArray.push(value[x])
                }
            }
        }
        return formatedArray
    }

    function selectedFilter(value) {
        console.log(value)
        setCompState({
            ...compState, selectFilter: value
        })
    }

    function switchFilters(value) {
        switch (value) {
            case "ALL":
                console.log(compState.selectFilter)
                return compState.filteredArray
            case "PAYPAL":
                return filteringCardArray(cards, ["PayPal"])
            case "BANK":
                return filteringCardArray(cards, banksFilters)
            case "YANDEX":
                return filteringCardArray(cards, ["Yandex"])
            case "CRYPTO":
                return filteringCardArray(cards, ["Tron", "Ethereum"])
            default:
                console.warn("Error")
        }
    }
    return (
        <div className="scroll-down-bg" >
            {/* <span className="scroll-down-activator" onClick={() => setCompState({ ...compState, dropDownActive: !compState.dropDownActive })}>
                <span>{compState.selectedCurrency.length === 0 ? "Chose here" : compState.selectedCurrency}</span>
                <span><img src={arrowUp} className={compState.dropDownActive ? "arrow-visual-down" : "arrow-visual-up"} alt="arrow" /></span>
            </span> */}
            <div className="scroll-down-close">
                <span onClick={(e)=>closingComponent(e)}>+</span>
            </div>
            <div className="scroll-down-filter-list">
                {filters.map((element, index) => {
                    return (
                        <span key={index} onClick={() => selectedFilter(element)}>{element}</span>
                    )
                })}
            </div>
            <ul className="scroll-down-list block">
                {console.log(compState.filteredArray)}
                {switchFilters(compState.selectFilter).map((element, index) => {
                    return <li key={index} onClick={() => { selecting(element.payment_system, element.currency) }}>{element.payment_system} ({element.currency})</li>
                })}
            </ul>
        </div>
    )
}