// Transfer Array of object potentianlly duplicated to array of uniformed ids objects
export const aggregateItems = function (items, newItem) {
  const aggregatedItems = [...items];
  const itemIndxe = items.findIndex((item) => item.id === newItem.id);
  // NEWITEM IS NOT IN ITEMS
  if (itemIndxe === -1) {
    aggregatedItems.push({ quntity: 1, ...newItem });
  } else {
    items[itemIndxe].quntity += 1;
  }
  return aggregatedItems;
};
