import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Navbar } from "../components/Navbar"



export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </>
    )
}