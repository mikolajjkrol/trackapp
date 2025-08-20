import { createSlice } from "@reduxjs/toolkit"

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        darkMode: true, 
        selectedIndex: 0, 
        page: 'home',
        isMenuVisible: true,
    },
    reducers: {
        toggleDarkMode(state){
            state.darkMode = !state.darkMode
        },
        changeSelected(state, action){
            state.selectedIndex = action.payload
            switch (action.payload) {
                case 0:
                state.page = 'home'
            break;
                case 1:
                state.page = 'running'
            break;
                case 2:
                state.page = 'gym'
            break;
                case 3:
                state.page = 'cali'
            break;
                default:
            break;
            }
        },
        toggleMenu(state){
            state.isMenuVisible = !state.isMenuVisible
        }
    }
})

export const uiActions = uiSlice.actions