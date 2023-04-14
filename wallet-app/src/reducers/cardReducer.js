const initialState = { // Vad vår Redux store ska innehålla
  cards: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_CARD':
        
          return {
              ...state,
              cards: [...state.cards, action.payload]
          }
  
      default:
          return state;
  }
}

export default reducer;