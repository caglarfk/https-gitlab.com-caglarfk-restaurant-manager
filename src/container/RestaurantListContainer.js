import React from 'react'
import { useSelector } from 'react-redux'

function RestaurantListContainer() {
    const restaurants=useSelector((state)=>state.restaurant.data);
  return (
    <div>
        <h1>restaruant list</h1>
        {
            restaurants.map((item)=>(
                <div key={item.id}>
                    {item.name}
                </div>
            ))
        }
    </div>
  )
}

export default RestaurantListContainer