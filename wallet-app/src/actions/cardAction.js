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

export { addCard, selectedCard, deleteCard }