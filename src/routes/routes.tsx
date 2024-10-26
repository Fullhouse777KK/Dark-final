import { createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";
import Welcome from "../pages/Welcome";
import ProductPage from "../pages/ProductPage";

export const router = createBrowserRouter([
        {path: Paths.welcome, element:<Welcome/> },
        {path: Paths.productPage, element:<ProductPage/>}
])