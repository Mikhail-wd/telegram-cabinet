import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState, createContext, useReducer, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import FooterControl from "../components/footerControl/footerControl";
import 'react-toastify/dist/ReactToastify.css';

import "./Root.css"

const initialState = {
    page: "main_page",
    price: 0,
    invose: false,
    applications: false
}


function reducer(state, action) {
    switch (action.type) {
        case "switch_page":
            return { ...state, page: action.payload }
        case "open_invose":
            return { ...state, invose: true, price: action.payload }
        case "close_invose":
            return { ...state, invose: false, price: 0 }
        case "open_my_applications":
            return { ...state, applications: true }
        case "close_my_applications":
            return { ...state, applications: false }
        case "success_popup":
            toast(action.payload)
            return { ...state }
        default:
            console.warn("Error in app reducer")
    }
}
export const AppState = createContext(initialState)

export default function Root() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [compState, setCompState] = useState({
        page: "main_page",
        userData: null,
        respons: null,
        token: null
    })
    const location = useLocation()
    const navigate = useNavigate()
    function backStory() {
        navigate(-1)
    }
    useEffect(() => {
        console.log("~~~~RenderedWebApp~~~~")
        function initToken() {
            axios.post("https://api.sprite-ps.com/app_auth"
                , window.Telegram.WebApp.initDataUnsafe
            ).then(response => setCompState({ ...compState, token: response.headers['authorization'] })).catch(error=>{
                console.log("Request error " +error.status)
            })
            // localStorage.setItem("TokenBearer", compState.token)
            console.log(compState,window.Telegram.WebApp.initDataUnsafe)
        }

        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
            window.Telegram.WebApp.setHeaderColor("#141723")
            window.Telegram.WebApp.setBackgroundColor("#141723")
            window.Telegram.WebApp.BackButton.onClick(backStory)
            window.Telegram.WebApp.enableClosingConfirmation()
            console.log(compState.userData)
            try {
                if (localStorage.getItem("TokenBearer") === null) {
                    initToken()
                } else {
                    setCompState({
                        ...compState,
                        userDate: null
                    })
                }
                console.log(compState.token)
            } catch (error) {

            }
        }
    }, [])
    useEffect(() => {
        if (location.pathname !== '/') {
            window.Telegram.WebApp.BackButton.show()
        } else {
            window.Telegram.WebApp.BackButton.hide()
        }
    }, [location.pathname])

    return (
        <AppState.Provider value={{ data: state, dispatch: dispatch }}>
            <ToastContainer
                position="top-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="dark"
            />
            <div className="mainFrame">
                <Outlet />
                {/* <FooterControl /> */}
            </div >
        </AppState.Provider >
    );
}