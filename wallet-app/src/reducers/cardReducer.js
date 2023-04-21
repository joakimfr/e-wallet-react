const initialState = { 
  cards: [],
  selectedCard: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      const newCards = [...state.cards, action.payload];
      localStorage.setItem('cards', JSON.stringify(newCards));
        return {
          ...state,
          cards: newCards
        };
    case 'SELECTED_CARD':
      const matchingCard = state.cards.find((card) => card.cardNumber === action.payload)
      localStorage.setItem('selectedCard', JSON.stringify(matchingCard));
        return {
          ...state,
          selectedCard: matchingCard
        };
      case 'DELETE_CARD':
        const updatedCards = state.cards.filter(item => item.cardNumber !== action.payload)
        localStorage.setItem('cards', JSON.stringify(updatedCards))
        localStorage.removeItem('selectedCard');
        return {
          ...state,
          cards: updatedCards,
          selectedCard: state.selectedCard?.cardNumber === action.payload ? null : state.selectedCard
        };
      case 'LOAD_CARDS_LOCAL_STORAGE':
        return {
          ...state,
          cards: action.payload
        };
      case 'LOAD_ACTIVE_CARD':
        return {
          ...state,
          selectedCard: action.payload
        };
  
      default:

      return state;
    }
  }

export default reducer;