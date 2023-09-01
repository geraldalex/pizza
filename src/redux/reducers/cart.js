const initialState = {
    items: {},
    totalPrice: 0,
    totalCount:0
  }

  const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)
  
  const cart = (state = initialState, action) => {
  
  switch(action.type){
    case 'ADD_PIZZA_CART':

    const currentPizzaItems = !state.items[action.payload.id]
    ? [action.payload] 
    :  [...state.items[action.payload.id].items, action.payload]

    const newItems = {
      ...state.items,
      [action.payload.id]:{ 
       items : currentPizzaItems,
      totalPrice: getTotalPrice(currentPizzaItems)
      }
    }

    const items = Object.values(newItems).map(obj => obj.items)
    const allPizzas = [].concat(...items)
    const totalPrice = getTotalPrice(allPizzas)

    console.log(state)

      return {
        ...state, 
        items : newItems,
        // totalCount: [].concat.apply([], Object.values(newItems)).length,
        totalCount: allPizzas.length,
        totalPrice
      
    }
  
    case 'CLEAR_CART':
  return {
    items: {},
    totalPrice: 0,
    totalCount:0
  }

  case 'REMOVE_CART_ITEM':{

    

  const newItems = {
    ...state.items
  }
  const currentTotalPrice = newItems[action.payload].totalPrice
  const currentTotalCount = newItems[action.payload].items.length
  delete newItems[action.payload]
    return {
   ...state,
   items:newItems,
   totalPrice: state.totalPrice - currentTotalPrice,
   totalCount: state.totalCount - currentTotalCount

    }
  }


  case 'PLUS_CART_ITEM': {



const newItems = [
  ...state.items[action.payload].items,
  state.items[action.payload].items[0]
]




  
  return{
    ...state,
    items: {
      ...state.items,
      [action.payload]: {
        items:newItems,
        totalPrice: getTotalPrice(newItems)
      }
    },
    totalPrice: state.totalPrice + state.items[action.payload].items[0].price,
     totalCount: state.totalCount + 1

  }
  }
  case 'MINUS_CART_ITEM': {



   const oldItems = state.items[action.payload].items;
    const newItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems
  

    
      
      return{
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items:newItems,
            totalPrice: getTotalPrice(newItems)
          }
        },

        totalPrice: state.items[action.payload].items ? state.totalPrice - oldItems[0].price : state.totalPrice,
        // totalCount: state.totalCount - 1

      }
  }


    default: 
    return state
  }
  }
  
  export default cart;