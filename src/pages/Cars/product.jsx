import React from 'react'

export const Product = (props) => {
    const {id, productName, price, color, productImage} = props.data;
  return (
    <div className=' rad'>
        <img src={productImage}/>
        <div className='desxriptin'>
            <p>
                <b>{productName}</b>
            </p>
            <p>
                %{price}
            </p>
        </div>
    </div>
  )
}
//https://www.youtube.com/watch?v=tEMrD9t85v4  25:44