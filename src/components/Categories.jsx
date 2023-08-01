import React, { useState } from 'react'

const Categories = React.memo(
  ({items, onClickItem}) => {

    const  [activeItem, setActiveItem] =   useState(null)
    
    const onSelectItem = (index) => {
      setActiveItem(index)
      onClickItem(index)
      console.log(index)
    }
      return (
        <div className="categories">
        <ul>
          <li className={activeItem === null ? 'active' : ''} onClick={() => {onSelectItem(null)}} >Все</li>
     
          {items &&
          items.map((item, index) => <li onClick={() => {onSelectItem(index)}} className={activeItem === index ? 'active' : ''} key={`${item}_${index}`}>{item}</li>)}
     
        </ul>
      </div>
      )
    }
)

export default Categories