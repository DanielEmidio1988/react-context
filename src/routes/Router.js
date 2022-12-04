import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../pages/HomePage"
import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"

export const Router = () => {
    const context = useContext(GlobalContext)

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )

}