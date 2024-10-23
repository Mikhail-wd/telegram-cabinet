import { Outlet } from "react-router-dom";
import { useState, createContext, useContext, useReducer } from 'react';
import { ToastContainer, toast } from 'react-toastify';
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
        page: "main_page"
    })
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
                <FooterControl />
            </div>
        </AppState.Provider>
    );
}