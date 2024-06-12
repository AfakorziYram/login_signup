import { createSlice } from "@reduxjs/toolkit";
import {auth} from '../../Firebase';;

const initialState = {
    currentuser: null,
    
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducer:{
        

        userData (state, action){
            state.currentuser = action.payload;
        }

    }
})

export const userActions= userSlice.actions;
 export default userSlice.reducer;