import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("pro")) || [],
  user: [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const ProductSlice = createSlice({
  name: "PRODUCT",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.product = action.payload;
      localStorage.setItem("pro", JSON.stringify(action.payload));
    },
    userPro(state, action) {
      state.user = [...state.user, action.payload];
    },
    sortProduct(state, action) {
      if (action.payload === "male") {
        return (state.user = state.user.filter(
          (el) => el.kategor === action.payload
        ));
      } else if (action.payload === "famale") {
        return (state.user = state.user.filter(
          (el) => el.kategor === action.payload
        ));
      } else if (action.payload === "sd") {
        return (state.user = state.user.filter(
          (el) => el.kategor === action.payload
        ));
      }
    },
    getUser(state, action) {
      state.user = action.payload;
    },
    filterProduct(state,action){
        const res=state.product.filter((el)=> el._id !== action.payload)
        state.product=res
        // localStorage.setItem("pro", JSON.stringify(res));
    },
    basProduct(state,action){
        const findPro=state.basket.find((el)=>el.id===action.payload.id)
        if(findPro){
            console.log("bas");
            
        }else{
              state.basket=[...state.basket, action.payload]
        localStorage.setItem("basket", JSON.stringify(state.basket));
        }
      
    },
    filterBasket(state,action){
        const res1=state.basket.filter((el)=>el._id!==action.payload)
        state.basket=res1
        // localStorage.setItem("basket", JSON.stringify(res1));
    },
    inCrement(state,action){
const inc=state.basket.map((el)=>el.id===action.payload.id?{...el,quantity:el.quantity+1}:el)
state.basket=inc
localStorage.setItem("basket", JSON.stringify(inc));
    }, deCrement(state,action){
      const dec=state.basket.map((el)=>el.id===action.payload.id?{...el,quantity:el.quantity>1?el.quantity-1:1}:el)
      state.basket=dec
      localStorage.setItem("basket", JSON.stringify(dec));
          }, sortPro(state,action){
            if(action.payload==="data"){
               const sortPro=state.product.sort((a,b)=>a.data-b.data)
         state.product=sortPro
            }else{
              console.log("sort");
              
            }
        
                },
}
});

// Export the actions
export const { addProduct, getUser,deCrement, userPro,filterProduct,basProduct, inCrement,filterBasket,sortPro,sortProduct } =
  ProductSlice.actions;

// Export the reducer
export default ProductSlice.reducer;
