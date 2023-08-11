import React from "react";
import { Categories, LoadingBlock, PizzaBlock, SortPopup } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categoryNames = [
  "Meat",
  "Vegetarian",
  "Grill",
  "Acute",
  "Closed",
];

const sortItems = [
  { name: "popularity", type: "popular", order: 'desc' },
  { name: "price", type: "price", order: 'desc'  },
  { name: "alphabet", type: "name", order: 'desc'  },
];

function Home() {
  const dispatch = useDispatch();

  const { category, sortBy } = useSelector(({ filters }) => filters);

  const pizzas = useSelector(({ pizzas }) => pizzas.items);

  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy,category));
  }, [category,sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} items={categoryNames} onClickCatagory={onSelectCategory} />
        <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} onClickAddPizza={handleAddPizzaToCart}/>)
          : Array(10)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  )
}

export default Home;
