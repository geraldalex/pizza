import React, { useState } from 'react'

const Categories = React.memo(
  ({activeCategory,items, onClickCatagory}) => {


      return (
        <div className="categories">
        <ul>
          <li className={activeCategory === null ? 'active' : ''} onClick={() => {onClickCatagory(null)}} >All</li>
     
          {items &&
          items.map((item, index) => <li onClick={() => {onClickCatagory(index)}} className={activeCategory === index ? 'active' : ''} key={`${item}_${index}`}>{item}</li>)}
     
        </ul>
      </div>
      )
    }
)

export default Categories