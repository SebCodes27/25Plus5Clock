import { INCBREAK, DECBREAK, CDBREAK, RSBREAK } from "./actionTypes";

const initialState = {
    minute: 25,
    count: 25,
    text: 'Break Remaining',
};

export const breakReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCBREAK:
            return {
                ...state,
                minute: state.minute + 1,
                count: state.minute + 1,
            };
        case DECBREAK:
            return {
                ...state,
                minute: state.minute - 1,
                count: state.minute - 1,
            };
        case CDBREAK:
            return {
                ...state,
                count: state.count - 1,
            };
        case RSBREAK:
            return {
                ...state,
                minute: 25,
                count: 25,
            };
        default: return state;
    }
}