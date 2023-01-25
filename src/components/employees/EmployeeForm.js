
/*
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    
    const [employee, update] = useState({
        name: "",
        locationId: "",
        startDate: "",
        payRate: ""
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
   /*
   const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        // TODO: Create the object to be saved to the API
  
        const employeeToSendToAPI = {
           userId: kandyUserObject.id,
          location: parseInt(employee.locationId),
           startDate: employee.startDate,
           payRate: parseInt(employee.rate)
        }
        // TODO: Perform the fetch() to POST the object to the API
        return fetch('http://localhost:8088/employees?_expand=user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeToSendToAPI)
        })
        .then(response => response.json())
        .then(() => {
             navigate("/employee")
        })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">Kandy Korner Application</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        value={employee.name}
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.name = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Location">Location:</label>
                    <input type="checkbox"
                        value={employee.locationId}
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.locationId = event.target.checked
                                update(copy)
                            }
                        } /> 
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="checkbox"
                        value={employee.startDate}
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.startDate = event.target.checked
                                update(copy)
                            }
                        } /> 
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="payRate">Pay Rate:</label>
                    <input type="checkbox"
                        value={employee.payRate}
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.payRate = event.target.checked
                                update(copy)
                            }
                        } /> 
                </div>
            </fieldset>
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Application
            </button>
        </form>
    )
}

*/