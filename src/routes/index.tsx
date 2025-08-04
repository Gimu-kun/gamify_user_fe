import { Route, Routes } from "react-router-dom";
import { privateRoutes } from "./privateRoutes";
import { publicRoutes } from "./publicRoutes";

export default function index() {
  return (
    <Routes>
        {
            privateRoutes.map((route)=>(
                <Route path={route.path} element={route.element}/>
            ))
        }
        {
            publicRoutes.map((route)=>(
                <Route path={route.path} element={route.element}/>
            ))
        }
    </Routes>
  )
}
