import { createSlice } from "@reduxjs/toolkit";

export const getData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://68a48e40c123272fb9b325d0.mockapi.io/sessions');

        if (!response.ok){
            const error = new Error('Couldnt fetch!');
            throw error;
        }
        
        return await response.json();
        }
        
    try {
        const data = await fetchData()
        console.log(data)
        dispatch(dataActions.replaceData(data))
    } catch(error){
        throw error;
    }
    }
}

export const dataSlice = createSlice({
    name: 'data',
    initialState: [],
    reducers: {
        replaceData(state, action){
            return action.payload
        }
    }
})

export const dataActions = dataSlice.actions