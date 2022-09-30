import React, { useState } from 'react'
import { category, products } from '../data'
import CatItem from './CatItem'


const Category = ({filterProducts , allProduct , items}) => {
    const [categories, setcategories] = useState(category)
    
  return (
    <div className="category">


        <h3> Categories </h3>
      <ul>
        <li onClick={allProduct}> All <span>{products.length}</span>  </li>

          {categories.map((cat) => {
              return (
                   <CatItem filterProducts={filterProducts} items={items} key={cat.catId} cat={cat} />
              )
          })
          }
        
      </ul>
    </div>
  )
}

export default Category