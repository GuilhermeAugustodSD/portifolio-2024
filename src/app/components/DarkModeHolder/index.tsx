"use client"

import { useEffect } from "react"

const DarkModeHolder = () => {
    useEffect(() => {
        const baseTheme = localStorage.getItem("p2024-dm") ?? ""
        document.body.setAttribute("data-theme", baseTheme)
    }, [])

    return (
        <></>
    )
}

export { DarkModeHolder }