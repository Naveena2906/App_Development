import { createSlice } from "@reduxjs/toolkit";
const initialState={
    admin:null,
    signup:[],
    login:[],
    product:[],
    toUpdate:null,
    cart:[],
};
const Redux=createSlice({
    name:'adminname',
    initialState,reducers:{
        setadmin:(state,action)=>{
            state.admin=action.payload
        },
        addsign:(state,action)=>{
            state.signup.push(action.payload);
        },
        addlogin:(state,action)=>{
            state.login.push(action.payload);
        },
        addproduct:(state,action)=>{
            state.product.push(action.payload);
        },
        removeproduct:(state,action)=>{
            state.product=state.product.filter((product)=> product.id !== action.payload);
          },
        setToUpdate:(state,action)=>{
            state.toUpdate = action.payload;
        },
        removeToUpdate:(state)=>{
            state.toUpdate = null;
        },
        updateproduct:(state,action)=>{
            const data = action.payload;
            console.log(data);
            const exist = state.product.find((ite)=>ite.id===data.id);
            
            exist.image = data.image;
            exist.category = data.category;
            exist.name = data.name;
            exist.price = data.price;
            exist.available = data.available;
        },
        addtocart:(state,action)=>{
           const newitem=action.payload;
           const existitem=state.cart.find(prod=>prod.pid===newitem.pid);
           if(existitem)
           {
            existitem.quantity+=1;
           }
           else{
            state.cart.push({...newitem,quantity:1});
           }
        },
        removefromcart:(state,action)=>{

            state.cart=state.cart.filter((product)=>product.pid!==action.payload);
        },
        increasequantity:(state,action)=>{
            const itemid=action.payload;
            const existitem=state.cart.find(prod=>prod.pid===itemid);
            if(existitem)
            {
                existitem.quantity+=1;
            }
        },
        decreasequantity:(state,action)=>{
            const itemid=action.payload;
            const existitem=state.cart.find(prod=>prod.pid===itemid);
            if(existitem&&existitem.quantity>1)
            {
                existitem.quantity-=1;
            }
        },

    }
});
export const{setadmin,addsign,addlogin,addproduct,removeproduct,updateproduct,setToUpdate,removeToUpdate,addtocart,removefromcart,increasequantity,decreasequantity}=Redux.actions;
export const getadmin=(state)=>state.admininfo.admin;
export const getsignup=(state)=>state.admininfo.signup;
export const getlogin=(state)=>state.admininfo.login;
export const getproduct=(state)=>state.admininfo.product;
export const getToUpdate=(state)=>state.admininfo.toUpdate;
export const gettocart=(state)=>state.admininfo.cart;

export default Redux.reducer;