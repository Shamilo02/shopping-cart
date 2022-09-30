import React from 'react'

const Item = ({item,addToCard}) => {
  return (
    
    <div className="item">
      <img src={item.img} alt="" />
      <div className="itemtext">
        <h5> {item.title} </h5>
        <p>Price : {item.price} Azn </p>
        <button onClick={() => addToCard({
          id: item.id,
          img: item.img,
          title: item.title,
          price: item.price
        })}> Add To Card</button>
      </div>
    </div>
  )
}

export default Item