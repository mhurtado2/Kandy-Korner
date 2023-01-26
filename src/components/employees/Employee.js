
export const Employee = ({id, fullName, location, startDate, payRate, storeName}) => {
    return <section className="employee">
    <div> Name: {fullName}</div>
    <div> Store Name: {storeName}</div>
    <div> Location Id: {location}</div>
    <div> Start Date: {startDate}</div>
    <div> Pay Rate: {payRate}</div>
</section>
}