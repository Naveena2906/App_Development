import { createSlice } from "@reduxjs/toolkit";
const initialState={
    admin:null,
    signup:[],
    login:[],
    product:[],
    toUpdate:null,
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
        }
    }
});
export const{setadmin,addsign,addlogin,addproduct,removeproduct,updateproduct,setToUpdate,removeToUpdate}=Redux.actions;
export const getadmin=(state)=>state.admininfo.admin;
export const getsignup=(state)=>state.admininfo.signup;
export const getlogin=(state)=>state.admininfo.login;
export const getproduct=(state)=>state.admininfo.product;
export const getToUpdate=(state)=>state.admininfo.toUpdate;
export default Redux.reducer;