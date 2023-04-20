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

function saveLocalStorage(data) {
  return {
    type: 'SAVE_LOCAL_STORAGE',
    payload: {
      cards: data
    }
  }
}

export { addCard, selectedCard, deleteCard, saveLocalStorage }