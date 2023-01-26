

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [userChoices, update] = useState({})

    /*
      name: "",
        locationId: "",
        startDate: "",
        payRate: "",
        email: ""
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
   
   const navigate = useNavigate()
/*
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
*/
    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        // TODO: Create the object to be saved to the API
  
        const userToSendToAPI = {
            fullName: userChoices.name,
            email: userChoices.email, 
            isStaff: true
        }

        const employeeToSendToAPI = {
            locationId: parseInt(userChoices.locationId),
            startDate: userChoices.startDate,
            rate: userChoices.payRate
        }
        // TODO: Perform the fetch() to POST the object to the API
        return fetch('http://localhost:8088/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userToSendToAPI)
        })
        .then(response => response.json())
        .then((data) => {
            employeeToSendToAPI.userId = data.id
            return fetch('http://localhost:8088/employees', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(employeeToSendToAPI)
            })
        })
        .then(() => {
             navigate("/employees")
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
                        value={userChoices.fullName}
                        onChange={
                            (event) => {
                                const copy = {...userChoices}
                                copy.name = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Location">Location:</label>
                    <input type="text"
                        className="form-control"
                        placeholder="location Id"
                        value={userChoices.locationId}
                        onChange={
                            (event) => {
                                const copy = {...userChoices}
                                copy.locationId = event.target.value
                                update(copy)
                            }
                        } />  
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="date"
                    className="form-control"
                        value={userChoices.startDate}
                        onChange={
                            (event) => {
                                const copy = {...userChoices}
                                copy.startDate = event.target.value
                                update(copy)
                            }
                        } /> 
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="payRate">Pay Rate:</label>
                    <input type="number"
                    className="form-control"
                        value={userChoices.rate}
                        onChange={
                            (event) => {
                                const copy = {...userChoices}
                                copy.payRate = event.target.value
                                update(copy)
                            }
                        } /> 
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text"
                    className="form-control"
                        value={userChoices.email}
                        onChange={
                            (event) => {
                                const copy = {...userChoices}
                                copy.email = event.target.value
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

