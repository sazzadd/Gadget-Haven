import { toast } from "react-toastify";



// Utility function to fetch data from localStorage
const fetchData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

// Utility function to save data to localStorage
const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Fetch all items in the cart
const getAllCart = () => {
  return fetchData("carts");
};

// Add a gadget to the cart
const addToCart = (gadget) => {
  const carts = getAllCart(); // Get current cart from localStorage
  const isExist = carts.some((item) => item.id === gadget.id); // Check if the item already exists in the cart

  if (isExist) {
    return toast.error("Already exists in the cart"); // Show error if already in cart
  }

  carts.push(gadget); // Add the new gadget to the cart
  saveData("carts", carts); // Update localStorage with the new cart
  toast.success("Added to cart"); // Show success message
};

// Fetch all items in the wishlist
const getAllWishes = () => {
  return fetchData("wishes");
};

// Add a gadget to the wishlist
const addToWish = (gadget) => {
  const wishes = getAllWishes(); // Get current wishlist from localStorage
  const isExist = wishes.some((item) => item.id === gadget.id); // Check if the item is already in the wishlist

  if (isExist) {
    return toast.error("Already in wishlist"); // Show error if already in wishlist
  }

  wishes.push(gadget); // Add the new gadget to the wishlist
  saveData("wishes", wishes); // Update localStorage with the new wishlist
  toast.success("Added to wishlist"); // Show success message
};

export { addToCart, addToWish, getAllCart, getAllWishes };
