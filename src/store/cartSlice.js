import { createSlice } from '@reduxjs/toolkit'

export let cartData;

if(localStorage.getItem("item") === null) {
    cartData = [];
} else {
    cartData = JSON.parse(localStorage.getItem("item"));
}

let cart = createSlice({
    name: 'item',
    initialState: cartData,
    reducers: {
        addCount(state, action) {
            let idNum = state.findIndex((a)=>{ return a.id === action.payload })
            state[idNum].count++
        },
        addItem(state, action) {
            state.push(action.payload)
        },
        minusCount(state, action) {
            let idNum = state.findIndex((a)=>{ return a.id === action.payload })
            if(state[idNum].count === 0) {
                alert("수량은 0 이하로 불가능합니다.");
                return;
            } else {
                state[idNum].count--
            }
        },
        minusItem(state, action) {
            state.push(action.payload)
        }
    }
})

export let { addCount, addItem } = cart.actions

export let { minusCount, minusItem } = cart.actions

export default cart;