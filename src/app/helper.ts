//

const aggregateItems = function (items) {
  const aggregatedItems = [];
  const itemsId = [];
  items.forEach((item) => {
    const itemIndxe = itemsId.indexOf(item.id);
    if (itemIndxe === -1) {
      itemsId.push(item.id);
      aggregatedItems.push({ quntity: 1, ...item });
    } else {
      aggregatedItems[itemIndxe].quntity += 1;
    }
  });
  return aggregatedItems;
};

aggregateItems([
  { id: 1, a: 1, b: 2 },
  { id: 1, a: 1, b: 2 },
  { id: 2, a: 1, b: 2 },
]);
