import React from 'react'

const MenuItem = ({item}) => {
  return (
    <div className='menu-item-container'>
        <img src={"images/menu/menu-item-image" + item.id + ".png"} alt={"menu-item" + item.id} />
        <div>
            <h4>{item.item_name}</h4>
            <p>{item.item_desc}</p>
            <h5>{item.item_price}</h5>
        </div>
    </div>
  )
}

export default MenuItem