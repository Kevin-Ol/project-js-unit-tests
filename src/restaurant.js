const createMenu = (object) => {
  const menu = {
    fetchMenu: () => object,
    consumption: [],
    order: (item) => menu.consumption.push(item),
    pay: () => {
      let total = 0;
      for (let item of menu.consumption) {
        if (Object.keys(object.food).includes(item)) {
          total += object.food[item];
        } else {
          total += object.drinks[item];
        }     
      }
      return (1.1 * total);
    },
  };
  return menu;
};

module.exports = createMenu;
