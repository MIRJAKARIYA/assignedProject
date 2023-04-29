import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AddCoffie from "../pages/AddCoffie/AddCoffie";
import CoffeeDetails from "../pages/CoffeeDetails/CoffeeDetails";
import NotFound from "../pages/NotFound/NotFound";

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
            },
            {
                path:"/coffeeDetails/:coffeeId",
                element:<CoffeeDetails></CoffeeDetails>,
                loader:({params})=>{
                    return fetch(`http://localhost:5000/coffee/${params.coffeeId}`)
                }
            },
            {
                path:"/updateCoffee/:coffeeId",
                element:<AddCoffie></AddCoffie>,
                loader:({params})=>{
                    return fetch(`http://localhost:5000/coffee/${params.coffeeId}`)
                }

            },
            {
                path:"*",
                element:<NotFound></NotFound>
            }
        ]
    }
])

export default router;