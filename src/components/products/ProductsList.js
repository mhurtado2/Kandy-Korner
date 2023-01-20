import { useEffect, useState } from "react"
//import "./ProductsList.css"

export const ProductsList = () => {
    const [products, setProducts] = useState([])



    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch("http://localhost:8088/products")
            .then((res) => res.json())
            .then((productsArray) => {
                setProducts(productsArray)
            })// View the initial state of tickets
        },
        [] // When this array is empty, you are observing initial component state
    )
   
    
    useEffect(() => {
        if (kandyUserObject.isStaff) {
            //for employees
            setProducts(products)
        }
        else {
            // for customers
            

        }
    }, [products])


    return <>

        {
            kandyUserObject.staff //tenary statement
                ? <>
               
                 <button onClick={() => { setProducts(false) }}>Show All</button>
                 </>
                : <>
                </>
        }



    <h2>List of Products</h2>
    <article className="products">
    {
        products.map((product) => {
            return <section className="product" key={product.id}>
                <header>Product: {product.name}</header>
                <footer>Price: {product.price}</footer>
            </section>
        })
    }
</article>
</>
}
