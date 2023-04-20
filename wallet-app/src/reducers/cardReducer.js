import { selectedCard } from "../actions/cardAction";

const initialState = { // Vad vår Redux store ska innehålla
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
        return {
          ...state,
          selectedCard: matchingCard
        }
      case 'DELETE_CARD':
        const updatedCards = state.cards.filter(item => item.cardNumber !== action.payload)
        localStorage.setItem('cards', JSON.stringify(updatedCards))
        return {
          ...state,
          cards: updatedCards,
          selectedCard: state.selectedCard?.cardNumber === action.payload ? null : state.selectedCard
        }
      case 'LOAD_CARDS_LOCAL_STORAGE':
        return {
          ...state,
          cards: action.payload
        };
       // case 'SAVE_LOCAL_STORAGE':
        //localStorage.setItem('cards', JSON.stringify(action.payload.cards));
       // return {
       //   ...state,
       //   cards: action.payload.cards
      //  };
      default:
          return state;
      

  }
}

export default reducer;