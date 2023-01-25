import { useEffect, useState } from "react"
import { Employee } from "./Employee"
import "./Employees.css"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
           fetch("http://localhost:8088/employees?_expand=user")
            .then((response) => response.json())
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })
        }, 
        []
    )

    return <article className="employees">
    {
        employees.map(employee => <Employee key={`employee--${employee.id}`}
            id={employee.user.id} 
            fullName={employee?.user?.fullName} 
            location={employee.locationId}
            startDate={employee.startDate}
            payRate={employee.rate}/>)
    }
    </article>
}