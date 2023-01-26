import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Employee } from "./Employee"
import "./Employees.css"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
           fetch("http://localhost:8088/employees?_expand=user&_expand=location")
            .then((response) => response.json())
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })
        }, 
        []
    )

    return <>
    <button onClick={() => navigate("/employee/create")}>Apply For A Job</button>
    <article className="employees">
    {
        employees.map(employee => <Employee key={`employee--${employee.id}`}
            id={employee.user.id} 
            fullName={employee?.user?.fullName} 
            storeName={employee?.location?.name}
            location={employee?.location?.id}
            startDate={employee.startDate}
            payRate={employee.rate}/>)
    }
    </article>
    </>
}

//<button onClick={() => navigate("/employee/create")}>Apply For A Job</button>