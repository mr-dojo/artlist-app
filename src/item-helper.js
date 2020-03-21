//finds an item from context using the id and returns it
export const findItem = (items = [], item_id) =>
  items.find(item => parseInt(item.id) === parseInt(item_id));
