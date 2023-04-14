function addCard(item) {
  return {
      type: 'ADD_CARD',
      payload: item
  }
}

export { addCard }