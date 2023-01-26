import { useEffect, useState } from "react"
import { Customer } from "./Customer"
import "./Customer.css"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
           fetch("http://localhost:8088/customers?_expand=user&_sort=fullName&_order=asc")
            .then((response) => response.json())
            .then((customerArray) => {
                setCustomers(customerArray)
            })
        }, 
        []
    )

    return <article className="customers">
    {
        customers.map(customer => <Customer key={`customer--${customer.id}`}
            id={customer.user.id} 
            fullName={customer?.user?.fullName} 
            email={customer?.user?.email}
            />)
    }
    </article>
}
