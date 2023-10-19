// actions.js
export const UPDATE_IMAGES = 'UPDATE_IMAGES';

export const updateImages = (images) => ({
  type: UPDATE_IMAGES,
  payload: images,
});