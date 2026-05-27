// === TOMATO APP DATA ===

const RESTAURANTS = [
  { id:1, name:"Pizza Palace", cuisine:"Pizza • Italian", rating:4.8, time:"20-30 min", price:"₹200 for two", image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80", badge:"Best Seller", category:"pizza", discount:"30% OFF", open:true },
  { id:2, name:"Biryani House", cuisine:"Biryani • Mughlai", rating:4.6, time:"30-40 min", price:"₹350 for two", image:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80", badge:"Top Rated", category:"biryani", discount:"20% OFF", open:true },
  { id:3, name:"Burger Barn", cuisine:"Burgers • American", rating:4.5, time:"20-25 min", price:"₹250 for two", image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", badge:"New", category:"burger", discount:"15% OFF", open:true },
  { id:4, name:"Dragon Wok", cuisine:"Chinese • Asian", rating:4.4, time:"25-35 min", price:"₹300 for two", image:"https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80", badge:"", category:"chinese", discount:"", open:true },
  { id:5, name:"Sushi World", cuisine:"Japanese • Sushi", rating:4.9, time:"35-45 min", price:"₹600 for two", image:"https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80", badge:"Premium", category:"sushi", discount:"10% OFF", open:true },
  { id:6, name:"Sweet Tooth", cuisine:"Desserts • Bakery", rating:4.7, time:"20-30 min", price:"₹150 for two", image:"https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80", badge:"Trending", category:"desserts", discount:"25% OFF", open:true },
  { id:7, name:"Cafe Mocha", cuisine:"Coffee • Snacks", rating:4.3, time:"15-20 min", price:"₹180 for two", image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80", badge:"", category:"coffee", discount:"", open:false },
  { id:8, name:"Green Bowl", cuisine:"Salads • Healthy", rating:4.6, time:"20-30 min", price:"₹280 for two", image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80", badge:"Healthy", category:"salads", discount:"", open:true },
  { id:9, name:"Spice Route", cuisine:"Indian • North Indian", rating:4.7, time:"30-40 min", price:"₹320 for two", image:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80", badge:"Spicy 🌶️", category:"indian", discount:"20% OFF", open:true },
  { id:10, name:"Taco Fiesta", cuisine:"Mexican • Tacos", rating:4.5, time:"25-35 min", price:"₹290 for two", image:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80", badge:"", category:"mexican", discount:"", open:true },
  { id:11, name:"Pasta Primo", cuisine:"Italian • Pasta", rating:4.6, time:"30-40 min", price:"₹380 for two", image:"https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&q=80", badge:"Chef's Choice", category:"italian", discount:"15% OFF", open:true },
  { id:12, name:"The Grill House", cuisine:"BBQ • Steaks", rating:4.8, time:"40-50 min", price:"₹700 for two", image:"https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80", badge:"Premium", category:"bbq", discount:"", open:true },
];

const DISHES = [
  { id:1, name:"Margherita Pizza", restaurant:"Pizza Palace", price:249, originalPrice:349, rating:4.8, veg:true, image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=350&q=80", category:"pizza", description:"Classic tomato sauce, mozzarella, fresh basil", spicy:false },
  { id:2, name:"Chicken Biryani", restaurant:"Biryani House", price:299, originalPrice:399, rating:4.7, veg:false, image:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=350&q=80", category:"biryani", description:"Aromatic basmati rice with tender chicken pieces", spicy:true },
  { id:3, name:"Double Smash Burger", restaurant:"Burger Barn", price:199, originalPrice:249, rating:4.6, veg:false, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=350&q=80", category:"burger", description:"Double patty, cheese, lettuce, tomato, special sauce", spicy:false },
  { id:4, name:"Hakka Noodles", restaurant:"Dragon Wok", price:159, originalPrice:199, rating:4.4, veg:true, image:"https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=350&q=80", category:"chinese", description:"Stir-fried noodles with vegetables and soy sauce", spicy:true },
  { id:5, name:"Salmon Sushi Roll", restaurant:"Sushi World", price:449, originalPrice:549, rating:4.9, veg:false, image:"https://images.unsplash.com/photo-1553621042-f6e147245754?w=350&q=80", category:"sushi", description:"Fresh salmon, avocado, cucumber in a maki roll", spicy:false },
  { id:6, name:"Chocolate Lava Cake", restaurant:"Sweet Tooth", price:149, originalPrice:199, rating:4.8, veg:true, image:"https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=350&q=80", category:"desserts", description:"Warm chocolate cake with a gooey molten center", spicy:false },
  { id:7, name:"Butter Chicken", restaurant:"Spice Route", price:279, originalPrice:349, rating:4.7, veg:false, image:"https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=350&q=80", category:"indian", description:"Creamy tomato-based curry with tender chicken", spicy:true },
  { id:8, name:"Caesar Salad", restaurant:"Green Bowl", price:219, originalPrice:269, rating:4.5, veg:true, image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=350&q=80", category:"salads", description:"Crisp romaine, parmesan, croutons, Caesar dressing", spicy:false },
  { id:9, name:"Pepperoni Pizza", restaurant:"Pizza Palace", price:329, originalPrice:429, rating:4.7, veg:false, image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=350&q=80", category:"pizza", description:"Spicy pepperoni, mozzarella on tomato base", spicy:true },
  { id:10, name:"Kung Pao Chicken", restaurant:"Dragon Wok", price:229, originalPrice:279, rating:4.5, veg:false, image:"https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=350&q=80", category:"chinese", description:"Classic Chinese stir fry with peanuts and chilies", spicy:true },
  { id:11, name:"Tiramisu", restaurant:"Pasta Primo", price:189, originalPrice:239, rating:4.9, veg:true, image:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=350&q=80", category:"desserts", description:"Classic Italian dessert with espresso and mascarpone", spicy:false },
  { id:12, name:"Veggie Burger", restaurant:"Burger Barn", price:149, originalPrice:199, rating:4.3, veg:true, image:"https://images.unsplash.com/photo-1520072959219-c595dc870360?w=350&q=80", category:"burger", description:"Crispy veggie patty with fresh veggies and sauce", spicy:false },
  { id:13, name:"Cappuccino", restaurant:"Cafe Mocha", price:99, originalPrice:129, rating:4.6, veg:true, image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=350&q=80", category:"coffee", description:"Rich espresso with steamed milk foam", spicy:false },
  { id:14, name:"BBQ Ribs", restaurant:"The Grill House", price:599, originalPrice:749, rating:4.8, veg:false, image:"https://images.unsplash.com/photo-1544025162-d76694265947?w=350&q=80", category:"bbq", description:"Slow-cooked pork ribs glazed with smoky BBQ sauce", spicy:false },
  { id:15, name:"Pasta Carbonara", restaurant:"Pasta Primo", price:289, originalPrice:349, rating:4.6, veg:false, image:"https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=350&q=80", category:"italian", description:"Creamy pasta with bacon, egg yolk, parmesan", spicy:false },
  { id:16, name:"Paneer Tikka", restaurant:"Spice Route", price:249, originalPrice:299, rating:4.5, veg:true, image:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=350&q=80", category:"indian", description:"Marinated paneer cubes grilled in tandoor", spicy:true },
];

const OFFERS = [
  { id:1, code:"TOMATO40", title:"40% OFF First Order", desc:"Get 40% off on your first order. No minimum order value.", discount:"40%", expiry:"31 Dec 2024", image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80", type:"new_user", minOrder:0 },
  { id:2, code:"SAVE100", title:"Flat ₹100 OFF", desc:"Save ₹100 on orders above ₹399.", discount:"₹100", expiry:"15 Dec 2024", image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80", type:"all", minOrder:399 },
  { id:3, code:"FREESHIP", title:"Free Delivery", desc:"Free delivery on all orders this weekend.", discount:"Free Delivery", expiry:"Weekend Only", image:"https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=80", type:"all", minOrder:0 },
  { id:4, code:"WEEKEND25", title:"25% OFF Weekends", desc:"Every weekend, enjoy 25% off on all restaurants.", discount:"25%", expiry:"Every Weekend", image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80", type:"all", minOrder:199 },
  { id:5, code:"SUSHI20", title:"20% OFF on Sushi", desc:"Exclusive offer on all sushi restaurants.", discount:"20%", expiry:"20 Dec 2024", image:"https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&q=80", type:"category", minOrder:299 },
  { id:6, code:"HEALTHY15", title:"15% OFF Healthy Food", desc:"Eat healthy, save more! 15% off on salads and bowls.", discount:"15%", expiry:"31 Dec 2024", image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80", type:"category", minOrder:149 },
];

// Cart state
let cart = JSON.parse(localStorage.getItem('tomatoCart') || '[]');

function saveCart() {
  localStorage.setItem('tomatoCart', JSON.stringify(cart));
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}
