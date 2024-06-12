import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import RootPage from "../pages/RootPage";
import Signup from "../pages/Signup";
import About from "../pages/About";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<RootPage/>,
        children:[
            {path:'home', element: <HomePage/>},
            {path: 'signin', element: <Login/>},
            {path:'signup', element:<Signup/>},
            {path:'about', element:<About/>},
        ],
    },
])