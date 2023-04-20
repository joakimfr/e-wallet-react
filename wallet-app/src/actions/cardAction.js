function addCard(item) {
  return {
      type: 'ADD_CARD',
      payload: item
  }
}

function selectedCard(cardNumber) {
  return {
  type: 'SELECTED_CARD',
  payload: cardNumber
  }
}

function deleteCard(cardNumber) {
  return {
    type: 'DELETE_CARD',
    payload: cardNumber
  }
}

function loadCardsLocalStorage() {
  const cardsFromLocalStorage = JSON.parse(localStorage.getItem('cards') || '[]');
  return {
    type: 'LOAD_CARDS_LOCAL_STORAGE',
    payload: cardsFromLocalStorage
  }
}




export { addCard, selectedCard, deleteCard, loadCardsLocalStorage }