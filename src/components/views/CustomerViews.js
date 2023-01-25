import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/Location"
import { ProductContainer} from "../products/ProductContainer"



export const CustomerViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>Your one-stop-shop to get your sugar fix</div>

                    <Outlet />
                </>
            }>
                 <Route path="locations" element={ <LocationList /> } />
                 <Route path="products" element={ <ProductContainer/> } />
            </Route>
        </Routes>
    )
        }