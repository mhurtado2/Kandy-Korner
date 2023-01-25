import { useEffect, useState } from "react"
import "./ProductsList.css"
import { useNavigate } from "react-router-dom"



export const ProductsList = ({searchTermState}) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [topPriced, setTopPriced] = useState(false)
    const [searched, setSearched] = useState([])
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
        const searchedProducts = products.filter(product => {
            return product.name.toLowerCase().startsWith(searchTermState.toLowerCase())
        })
        setSearched(searchedProducts)
    },
        [ searchTermState ]
    )

    useEffect(
        () => {
            if (topPriced) {
                const topPricedProducts = products.filter(product => product.price > 2.00)
                setFilteredProducts(topPricedProducts)
            }
            else {
                setFilteredProducts(products)
            }
        },
        [topPriced] //observing topPriced 
    )


    useEffect(
        () => {
            fetch("http://localhost:8088/products?_sort=name&_expand=productType")
                .then((res) => res.json())
                .then((productsArray) => {
                    setProducts(productsArray)
                })// View the initial state of tickets
        },
        [] // When this array is empty, you are observing initial component state
    )


    useEffect(() => {
        if (kandyUserObject.staff) {
            //for employees
            setFilteredProducts(products)
        }
        else {
            // for customers
            setFilteredProducts(products)
        }
    }, [products])


    return <>

        {
            kandyUserObject.staff //tenary statement
                ? <>
                    <button onClick={() => { setTopPriced(true) }}>Top Price</button>
                    <button onClick={() => { setTopPriced(false) }}>All Products</button>
                    <button onClick={() => navigate("/product/create")}>Create Product</button>
                </>
                : <>
                </>
        }
                <header>What Candy Are You Looking For!</header>
                <h2>List of Products</h2>
                <article className="products">
                    {
                        searched.length !== 0
                        ?
                        searched.map((product) => {
                            return <section className="product" key={product.id}>
                                <header>Product: {product.name}</header>
                                <footer>Price: ${product.price.toFixed(2)}</footer>           
                            </section>
                        })
                        :
                        
                        filteredProducts.map((product) => {
                            return <section className="product" key={product.id}>
                                <header>Product: {product.name}</header>
                                <footer>Price: ${product.price.toFixed(2)}</footer>           
                                <header>Type: {product.productType.productType}</header>
                            </section>
                        })
                    }
                </article>
                </>

}


// {
//     filteredProducts.map((product) => {
//         return <section className="product" key={product.id}>
//             <header>Product: {product.name}</header>
//             <footer>Price: ${product.price.toFixed(2)}</footer>           
//             <header>Type: {product.productType.productType}</header>
//         </section>
//     })
// }