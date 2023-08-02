import React from 'react'
import { Categories, LoadingBlock, PizzaBlock, SortPopup } from '../components'
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from '../redux/actions/filters';
import {fetchPizzas} from "../redux/actions/pizzas"

const categoryNames = ['Мясные','Вегетарианская','Гриль', 'Острые', 'Закрытые'  ]

const sortItems = [{name: 'популярности', type: 'popular'},{name: 'цене', type: 'price'},{name:'алфавит', type: 'alphabet'},]

function Home() {

  const dispatch = useDispatch()

  const {category, sortBy} = useSelector(({filters}) => {
    return {
      filters
    }
  })


const {pizzas} = useSelector(({pizzas}) => {
  return {
    pizzas : pizzas.items
  }
})

const {isLoaded} = useSelector(({pizzas}) => {
  return {
    isLoaded : pizzas.isLoaded
  }
})

React.useEffect(() => {
  dispatch(fetchPizzas())
  }, [category]);



  const onSelectCategory = React.useCallback((index) => { dispatch(setCategory(index))}, []) 

  return (
    <div className="container">
    <div className="content__top">
     <Categories items={categoryNames} onClickItem = {onSelectCategory}/>
      <SortPopup  items={sortItems}/>
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">

      {isLoaded ?  pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj}/>) : Array(10).fill(0).map((_, index) => <LoadingBlock  key ={index}/>) }




    </div>
  </div>
  )
}

export default Home