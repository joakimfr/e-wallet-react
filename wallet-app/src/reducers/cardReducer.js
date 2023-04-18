const initialState = { // Vad vår Redux store ska innehålla
  cards: [],
  selectedCard: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_CARD':
        
          return {
              ...state,
              cards: [...state.cards, action.payload]
          };
      case 'SELECTED_CARD':
        const matchingCard = state.cards.find((card) => card.cardNumber === action.payload)
        return {
          ...state,
          selectedCard: matchingCard
        }
  
      default:
          return state;
  }
}

export default reducer;