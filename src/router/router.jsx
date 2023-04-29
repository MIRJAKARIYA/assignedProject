import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AddCoffie from "../pages/AddCoffie/AddCoffie";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch("http://localhost:5000/coffee")
            },
            {
                path:"/addCoffee",
                element:<AddCoffie></AddCoffie>
            }
        ]
    }
])

export default router;