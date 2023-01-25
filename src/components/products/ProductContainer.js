

import { useState } from "react"
import { ProductSearch } from "./ProductSearch"
import { ProductsList } from "./ProductsList"

export const ProductContainer = () => {
   const [searchTerms, setSearchTerms] = useState("") 

   return <>
          <ProductSearch setterFunction={setSearchTerms}/>
          <ProductsList searchTermState={searchTerms}/>
   </>
}
