export const findItem = (items = [], item_id) =>
  items.find(item => parseInt(item.id) === parseInt(item_id));
