import React from 'react'
import { Categories, PizzaBlock, SortPopup } from '../components'
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from '../redux/actions/filters';
import {fetchPizzas} from "../redux/actions/pizzas"

const categoryNames = ['Мясные','Вегетарианская','Гриль', 'Острые', 'Закрытые'  ]

const sortItems = [{name: 'популярности', type: 'popular'},{name: 'цене', type: 'price'},{name:'алфавит', type: 'alphabet'},]

function Home() {


  React.useEffect(() => {
    dispatch(fetchPizzas())
    }, []);
  

const dispatch = useDispatch()

  const {pizzas} = useSelector(({pizzas}) => {
    return {
      pizzas : pizzas.items
    }
  })

  const onSelectCategory = React.useCallback((index) => { dispatch(setCategory(index))}, []) 

  return (
    <div className="container">
    <div className="content__top">
     <Categories items={categoryNames} onClickItem = {onSelectCategory}/>
      <SortPopup  items={sortItems}/>
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">

      {pizzas && pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)}



    </div>
  </div>
  )
}

export default Home