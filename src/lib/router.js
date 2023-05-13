import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Index from "../pages/dashboard/index";
import Layout from "../pages/layout";
export const ROOT = "/"
export const LOGIN = "/login"
export const REGISTER = "/register"
export const PROTECTED = "/protected"
export const DASHBOARD = "/protected/dashboard"

export const router = createBrowserRouter([
    { path: ROOT, element: ROOT },
    { path: LOGIN, element: <Login /> },
    { path: REGISTER, element: <Register /> },
    {
        path: PROTECTED, element: <Layout/> , children: [
            {
            path: DASHBOARD,
            element: <Index/>
            }
        ]
    },
])
