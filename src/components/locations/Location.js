import { useEffect, useState } from "react"
import "./locations.css"

export const LocationList = () => {
    const [locations, setLocations] = useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
            .then((res) => res.json())
            .then((locationArray) => {
                setLocations(locationArray)
            })// View the initial state of tickets
        },
        [] // When this array is empty, you are observing initial component state
    )
   
    /*
    useEffect(() => {
        if (honeyUserObject.staff) {
            //for employees
            setFiltered(locations)
        }
        else {
            // for customers
            setFiltered(locations)

        }
    }, [locations])
*/


    return <>
    <h2>List of Locations</h2>
    <article className="locations">
    {
        locations.map((location) => {
            return <section className="location" key={location.id}>
                <header>Address: {location.address}</header>
                <footer>Square Footage: {location.squareFootage}</footer>
            </section>
        })
    }
</article>
</>
}
