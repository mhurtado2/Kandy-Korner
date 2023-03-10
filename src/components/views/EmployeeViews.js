import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/Location"
import { ProductsList } from "../products/ProductsList"
import { ProductForm } from "../products/ProductForm"
import { EmployeeList } from "../employees/EmployeeList"
import { EmployeeForm } from "../employees/EmployeeForm"
import { CustomerList } from "../customers/CustomerList"
import { CustomerDetails } from "../customers/CustomerDetails"



export const EmployeeViews = () => {
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
                 <Route path="products" element={ <ProductsList /> } />
                 <Route path="product/create" element={ <ProductForm /> } />
                 <Route path="employees" element={ <EmployeeList/> } />
                 <Route path="employee/create" element={ <EmployeeForm/> } />
                 <Route path="customers" element={ <CustomerList/> } />
                 <Route path="customers/:customerId" element={ <CustomerDetails/> } />
            </Route>
        </Routes>
    )
        }