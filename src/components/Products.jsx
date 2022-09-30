import React from 'react'
import Item from './Item'

const Products = ({items, addToCard}) => {
  // if(items.length === 0){
  //   return (
  //     <h3> Bu bölmədə hələki məhsul yoxdur</h3>
  //   )
  // }
  
  return (
    <div className='products'>
      
      <p className='mesaj'>  
      {items.length === 0 ? `Bu bölmədə məhsul yerləşdirilməyib` : `Bu bölmədə ${items.length} məhsul var`}  </p>

      <div className="container">
      {items.map((item) => {
        return (
          <Item addToCard={addToCard} key={item.id} item={item} />
        )
      })}
    
      </div>
    </div>
  )
}

export default Products;