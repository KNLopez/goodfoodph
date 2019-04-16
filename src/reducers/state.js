export const cartState = {
  cartItems: [],
  total: 0,
  showCart: false,
}
export const userInfo = {}

export const productState = [
  {
    id: '1',
    img: 'cdn.shopify.com/s/files/1/0506/7861/products/1-Beef-Fajita-Wraps-With-Crunchy-Slaw-Web-12_720x.jpg?v=1554950480',
    name: "Beef Fajita Wraps with Crunchy Slaw - Meal Kitz (serves 2)",
    price: 19.95,
    calories: 525,
    protein: 27.8,
    carbs: 27.8,
    fat: 23.5,
    tags: ['beef', 'fajita' , 'crunchy']
  },
  {
    id: '2',
    img: 'cdn.shopify.com/s/files/1/0506/7861/products/3-Chicken-Stir-Fry-With-Cashew-Nuts-Web-14_720x.jpg?v=1554950483',
    name: "Chicken Stir Fry with Cashew Nuts - Meal Kitz (serves 2)",
    price: 19.25,
    calories: 525,
    protein: 27.8,
    carbs: 27.8,
    fat: 23.5,
    tags: ['chicken' , 'nuts']
  },
  {
    id: '3',
    img: 'cdn.shopify.com/s/files/1/0506/7861/products/1-Creamy-Gnocchi-Florentine-Web-13_720x.jpg?v=1554950486',
    name: "Creamy Gnocchi Florentine - Meal Kitz (serves 2)",
    price: 19.25,
    calories: 525,
    protein: 27.8,
    carbs: 27.8,
    fat: 23.5,
    tags: ['creamy', 'gnocchi' , 'pasta']
  },
  {
    id: '4',
    img: 'cdn.shopify.com/s/files/1/0506/7861/products/2-Sweet-Paprika-Chicken-with-Super-Greens-Web-13.jpg?v=1554950492',
    name: "Sweet Chicken with Super Greens - Meal Kitz (serves 2)",
    price: 19.95,
    calories: 525,
    protein: 27.8,
    carbs: 27.8,
    fat: 23.5,
    tags: ['sweet', 'chicken' , 'greens']
  },
  {
    id: '5',
    img: 'cdn.shopify.com/s/files/1/0506/7861/products/3-Greek-Lamb-Salad-With-Toasted-Pita-Web-9.jpg?v=1554950489',
    name: "Greek Lamb Salad with Toasted Pita - Meal Kitz (serves 10)",
    price: 89.95,
    calories: 525,
    protein: 27.8,
    carbs: 27.8,
    fat: 23.5,
    tags: ['lamb', 'salad' , 'pita']
  },
  {
    id: '6',
    img: 'cdn.shopify.com/s/files/1/0506/7861/products/3-Greek-Lamb-Salad-With-Toasted-Pita-Web-9.jpg?v=1554950489',
    name: "Thai Green Chicken Curry - Meal Kitz (serves 4)",
    price: 29.95,
    calories: 525,
    protein: 27.8,
    carbs: 27.8,
    fat: 23.5,
    tags: ['chicken', 'thai' , 'curry']
  }
]

export const filters = {
  searchText: '',
  tagsFilter: []
}