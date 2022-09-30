import React from 'react'

const Shopping = ({cart,Setcart}) => {

    if (cart.length === 0) {
    return (
      
        <h2 className='text'> Sebetde Meyve Yoxdur </h2>
    )
     } 
  const deleteCart = (id) => {
  const deleteItem = cart.filter((prod) => {
      return prod.id !== id
    })
    Setcart(deleteItem)
  }


  const azalt = (shop) => {
   const minus = cart.find((prod) => prod.id === shop)
     if (minus.quantity <= 1) {
      deleteCart(shop)
     
    } else {
      Setcart(cart.map((prod) => {
        if(prod.id === shop){
           return {
             ...prod, quantity: prod.quantity-=1
           }
          
         }
         return prod
      }))
       
     }
  }

 const artir = (shop) => {
   Setcart(cart.map((prod) =>{
    if(prod.id === shop){
      
      return {
        ...prod, quantity: prod.quantity+=1 
      }
    }
    return prod
   }
  
   ))
 }


  return (
   
    
    <table>

      <thead>
        <tr>
            <th> Img </th>
            <th> Name  </th>
            <th> Price  </th>
            <th> Quanity  </th>
            <th> Total Price   </th>
            <th>   </th>
        </tr>

      </thead>
      <tbody>
        {cart.map((cartItem) => {
          return (
        <tr key={cartItem.id}>
            <td> <img src={cartItem.img} alt="" /> </td>
            <td> {cartItem.title}  </td>
            <td> {cartItem.price} Azn </td>
            <td> 
            <button className='cebr' onClick={() => artir(cartItem.id)}> artir </button> 
          <span className='quanity'>  {cartItem.quantity}  </span>
            
            <button className='cebr' onClick={() => azalt(cartItem.id)}> azalt  </button> </td>
            <td> {cartItem.price * cartItem.quantity } Azn </td>
            <td><button className='remove' onClick={() => deleteCart(cartItem.id)}> Remove </button>  </td>
        </tr>


          )
        })}

      </tbody>
        
    </table>
  )
}

export default Shopping