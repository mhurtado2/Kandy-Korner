import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
const [productTypes, setProductTypes] = useState([])


useEffect(
    () => {
        fetch(`http://localhost:8088/productTypes`)
            .then((res) => res.json())
            .then((productsArray) => {
                setProductTypes(productsArray)
            })// View the initial state of tickets
    },
    [] // When this array is empty, you are observing initial component state
)

    const [product, update] = useState({
        name: "",
        type: "", //maybe change to strings
        price: "" //maybe change to strings
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
   const navigate = useNavigate()

   const localKandyUser = localStorage.getItem("kandy_user")
   const kandyUserObject = JSON.parse(localKandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        // TODO: Create the object to be saved to the API
        // {
        //     "userId": 3,
        //     "description": "Saepe ex sapiente deserunt et voluptas fugiat vero quasi. Ipsam est non ipsa. Occaecati rerum ipsa consequuntur. Ratione commodi unde sint non rerum. Sit quia et aut sunt.",
        //     "emergency": false,
        //     "dateCompleted": "Fri Apr 29 2022 14:02:20 GMT-0500 (Central Daylight Time)"
        //   }
        const productToSendToAPI = {
           name: product.name,
           productTypeId: parseInt(product.productTypeId),
           price: parseInt(product.price)
        }
        // TODO: Perform the fetch() to POST the object to the API
        return fetch('http://localhost:8088/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productToSendToAPI)
        })
        .then(response => response.json())
        .then(() => {
             navigate("/products")
        })
    }

    return (
        <form className="productForm">
            <h2 className="productForm__title">New Product</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={product.name}
                        onChange={
                            (event) => {
                                const copy = {...product}
                                copy.name = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="type">Type:</label>
                    <select
                    className="form-control"
                        value={product.productTypeId}
                        onChange={
                            (event) => {
                                const copy = {...product}
                                copy.productTypeId = event.target.value
                                update(copy)
                            }
                        }> 
                        <option value="0">Select Option</option>
                        {productTypes.map(
                            (productType) => {
                                return <option key={productType.id} value={productType.id}>{productType.productType}</option>
                            }
                        )}
                        </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number"
                    className="form-control"
                        value={product.price}
                        onChange={
                            (event) => {
                                const copy = {...product}
                                copy.price = event.target.value
                                update(copy)
                            }
                        } /> 
                </div>
            </fieldset>
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Product
            </button>
        </form>
    )
}