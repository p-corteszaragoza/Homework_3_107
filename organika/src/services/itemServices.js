var data = [
  {
    _id: "1284566a9as5d8f121",
    title: "Backpack 1",
    description: "This is a description of a product",
    image: "img_1.PNG",
    price: 12.33,
    category: "backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f122",
    title: "Backpack 2",
    description: "This is a description of a product",
    image: "img_2.PNG",
    price: 13.33,
    category: "backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f123",
    title: "Backpack 3",
    image: "img_3.PNG",
    description: "This is a description of a product",
    price: 14.33,
    category: "backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f124",
    title: "Backpack 4",
    description: "This is a description of a product",
    image: "img_4.PNG",
    price: 122.33,
    category: "backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f125",
    title: "Backpack 5",
    description: "This is a description of a product",
    image: "img_5.PNG",
    price: 122.33,
    category: "backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f126",
    title: "Backpack 6",
    description: "This is a description of a product",
    image: "img_6.PNG",
    price: 122.33,
    category: "backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f127",
    title: "Backpack 7",
    description: "This is a description of a product",
    image: "img_7.PNG",
    price: 122.33,
    category: "backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f128",
    title: "Backpack 8",
    description: "This is a description of a product",
    image: "img_8.PNG",
    price: 122.33,
    category: "backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f129",
    title: "Backpack 9",
    description: "This is a description of a product",
    image: "img_9.PNG",
    price: 122.33,
    category: "backpacks",
    discount: 5,
  },
  {
    _id: "1284566a9as5d8f1210",
    title: "Backpack 10",
    description: "This is a description of a product",
    image: "img_10.PNG",
    price: 122.33,
    category: "backpacks",
    discount: 5,
  },
];

class ItemService {
  getCatalog() {
    // logic to connect to a server a retrieve the list items

    return data;
  }

  getStock(itemId) {}

  getItemPrice(coupon) {}
}

export default ItemService;
