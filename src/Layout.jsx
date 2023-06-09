import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export const Layout = () => {

    return (<main>
        <Header />

        <Outlet />
        footer
    </main>)
}

export default Layout
