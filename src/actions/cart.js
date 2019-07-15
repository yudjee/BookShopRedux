export const addToCart = obj => ({
  type: 'ADD_TO_CART',
  payload: obj,
});

export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
});

export const openPopup = toggle => ({
  type: 'OPEN_POPUP',
  payload: toggle
});

export const closePopup = toggle => ({
  type: 'CLOSE_POPUP',
  payload: toggle
});