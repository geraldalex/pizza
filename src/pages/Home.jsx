import React from 'react'
import { Categories, PizzaBlock, SortPopup } from '../components'
import { useSelector } from "react-redux";

function Home() {

  const {pizzas} = useSelector(({pizzas}) => {
    return {
      pizzas : pizzas.items
    }
  })

  return (
    <div className="container">
    <div className="content__top">
     <Categories items={['Мясные','Вегетарианская','Гриль', 'Острые', 'Закрытые'  ]}/>
      <SortPopup  items={[{name: 'популярности', type: 'popular'},{name: 'цене', type: 'price'},{name:'алфавит', type: 'alphabet'},]}/>
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">

      {pizzas && pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)}



    </div>
  </div>
  )
}

export default Home