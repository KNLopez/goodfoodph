export const cartState = {
  cartItems: [],
  total: 0,
  showCart: false,
}
export const userInfo = {}

export const productState = [
  {
    id: '1',
    img: 'images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg?w=640&h=426',
    name: "Beef Fajita Wraps with Crunchy Slaw - Meal   (serves 2)",
    price: 19.95,
    calories: 525,
    protein: 27.8,
    carbs: 27.8,
    fat: 23.5,
    tags: ['beef', 'fajita' , 'crunchy']
  },
  {
    id: '2',
    img: 'images.pexels.com/photos/1440119/pexels-photo-1440119.jpeg?cs=srgb&dl=close-up-cucumber-cuisine-1440119.jpg&fm=jpg?w=640&h=426',
    name: "Chicken Stir Fry with Cashew Nuts - Meal   (serves 2)",
    price: 19.25,
    calories: 525,
    protein: 27.8,
    carbs: 27.8,
    fat: 23.5,
    tags: ['chicken' , 'nuts']
  },
  {
    id: '3',
    img: 'images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?cs=srgb&dl=basil-blur-cheese-1279330.jpg&fm=jpg?w=640&h=426',
    name: "Creamy Pasta Florentine - Meal (serves 2)",
    price: 19.25,
    calories: 525,
    protein: 27.8,
    carbs: 27.8,
    fat: 23.5,
    tags: ['creamy' , 'pasta']
  },
  {
    id: '4',
    img: 'images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?cs=srgb&dl=buffet-chicken-cooking-5938.jpg&fm=jpg?w=640&h=426',
    name: "Sweet Chicken with Super Greens - Meal   (serves 2)",
    price: 19.95,
    calories: 525,
    protein: 27.8,
    carbs: 27.8,
    fat: 23.5,
    tags: ['sweet', 'chicken' , 'greens']
  },
  {
    id: '5',
    img: 'images.pexels.com/photos/323682/pexels-photo-323682.jpeg?cs=srgb&dl=beef-blur-chicken-323682.jpg&fm=jpg?w=640&h=426',
    name: "Greek Lamb Salad with Toasted Pita - Meal   (serves 10)",
    price: 89.95,
    calories: 525,
    protein: 27.8,
    carbs: 27.8,
    fat: 23.5,
    tags: ['lamb', 'salad' , 'pita']
  },
  {
    id: '6',
    img: 'images.pexels.com/photos/675951/pexels-photo-675951.jpeg?cs=srgb&dl=asparagus-barbecue-bbq-675951.jpg&fm=jpg?w=640&h=426',
    name: "Beef Steak with Sauce - Meal   (serves 4)",
    price: 29.95,
    calories: 525,
    protein: 27.8,
    carbs: 27.8,
    fat: 23.5,
    tags: ['beef', 'steak' ]
  }
]

export const filters = {
  searchText: '',
  tagsFilter: []
}