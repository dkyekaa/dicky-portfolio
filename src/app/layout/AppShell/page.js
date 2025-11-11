'use client'
import Navbar from "../Navbar/navbar.js";
import Footer from "../Footer/footer.js";

export default function AppShell({ children, hideNavbar = false, hideFooter = false }){
    return(
        <>
        { !hideNavbar && <Navbar/> }
        <main>{children}</main>
        { !hideFooter && <Footer/> }
        </>
    )
}