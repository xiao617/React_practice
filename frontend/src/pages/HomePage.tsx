import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectUser, userBody, userLogin } from "../features/user/userSlice";

export default function HomePage(){
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    const emptyUser = {id:'',name:'test',score:0,status:'visitor'} as userBody;
    useEffect(()=>{
        dispatch(userLogin(emptyUser));
        
    },[])
    return (
    <div >
    
        <h1>Hi, This is home page</h1>
        <h3>Hello, {user.name}</h3>
    </div>)
}
// function HomePage1(){

// }
// export {HomePage1}