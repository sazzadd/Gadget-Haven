// get all cart from local storage
const getAllCart = () => {
    const all = localStorage.getItem("carts");
  
    if (all) {
      const carts = JSON.parse(all);
      console.log(carts);
      return carts;
    } else {
      console.log([]);
      return [];
    }
    //   console.log(carts);
  };
  // add to cart
const addToCart = (gadget) => {
    //   get all  previously  gadget data
    //   console.log(gadget);
    const carts = getAllCart();
    const isExist = carts.find((item) => item.id == gadget.id);
    if (isExist) return toast.error("alredy exist");
    //   console.log(carts);
    carts.push(gadget);
    localStorage.setItem("carts", JSON.stringify(carts));
  };
  export { addToCart,getAllCart };