//

const x = function (arr) {
  const aggregatedItems = [];
  const itemsId = [];

  arr.map((item) => {
    if (itemsId.includes(item.id)) {
      aggregatedItems[item.id - 1].quntity += 1;
    } else {
      itemsId.push(item.id);
      aggregatedItems.push({ quntity: 1, ...item });
    }
  });
  return aggregatedItems;
};
