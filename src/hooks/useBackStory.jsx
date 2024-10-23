import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function useBackStory() {
    const location = useLocation()
    const navigate = useNavigate()
    function backStory() {
        navigate(-1)
    }
    useEffect(() => {
        if (location.pathname !== '/telegram-cabinet/') {
            window.Telegram.WebApp.BackButton.show()
            window.Telegram.WebApp.BackButton.onClick(backStory)
        } else {
            window.Telegram.WebApp.BackButton.hide()
        }
    }, [])
}