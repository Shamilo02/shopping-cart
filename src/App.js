import React, {useState } from 'react'
import Category from './components/Category'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Shopping from './components/Shopping'
import { products } from './data'
import './sass/style.css'


const App = () => {
 
  const [items,SetItems] = useState(products)
  const [showCart, Setshowcart] = useState(true)
  const [cart, Setcart] = useState([])

  const handleShopping = () => {
    Setshowcart(!showCart)
  }

 
  const addToCard = (cartItem) => {
    const newIndex = cart.find((item) => item.id === cartItem.id)

    if (newIndex) {
   newIndex.quantity+=1
  newIndex.price+= cartItem.price

    } else {
  Setcart([...cart,{
    id: cartItem.id,
    img: cartItem.img,
    title: cartItem.title,
    price: cartItem.price,
    quantity: 1
   }]) 
}
  console.log(cart)
  
    }
    
    


  const filterProducts = ( catname ) => {
    const updateItems = products.filter((product) => {
      return product.cat === catname;
    })
    SetItems(updateItems)
  }

  
  const allProduct = () => {
    SetItems(products)
  }
   
  
  return (
  <>
    <Navbar handleShopping={handleShopping} cart={cart} />

  {
   showCart ? <div className="wrapper">
     <Category 
     filterProducts={filterProducts} 
     allProduct={allProduct} 
     items={items}  />
      <Products 
      items={items} 
      SetItems={SetItems}
       addToCard={addToCard} />
    </div> : <Shopping cart={cart} Setcart={Setcart} />

      }

  </>
  )
}

export default App;


