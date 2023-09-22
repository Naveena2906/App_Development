import { createSlice } from "@reduxjs/toolkit";
const initialState={
    admin:null,
    signup:[],
    login:[],
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
    }
});
export const{setadmin,addsign,addlogin}=Redux.actions;
export const getadmin=(state)=>state.admininfo.admin;
export const getsignup=(state)=>state.admininfo.signup;
export const getlogin=(state)=>state.admininfo.login;
export default Redux.reducer;