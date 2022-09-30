import React from 'react'
import { products } from '../data'

const CatItem = ({cat, filterProducts,items }) => {
  return (
    <li onClick={() => filterProducts(cat.catname)}>{cat.catname}  
   <span> {products.filter((prod) =>  prod.cat === cat.catname).length}</span>
    </li>
  )
}

export default CatItem