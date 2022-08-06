import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        cardHolderName: "",
        cardNumber: "",
        expMonth: "",
        expYear: "",
        cvc: "",
    },
};

const Slice = createSlice({
    name: "slice",
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.data = { ...state.data, ...action.payload };
        },
        clearAll: (state) => {
            state.data = {
                cardHolderName: "",
                cardNumber: "",
                expMonth: "",
                expYear: "",
                cvc: "",
            };
        },
    },
});

export const { setValue,clearAll } = Slice.actions;

export default Slice.reducer;
