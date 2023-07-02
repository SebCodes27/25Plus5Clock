import { INCREMENT, DECREMENT, COUNTDOWN, RESET, ACTIVE, SUBTEN, SUBONE, NINETEN, NINEONE, INCBREAK, DECBREAK, CDBREAK, RSBREAK } from "./actionTypes";

const initialState = {
    minute: 25,
    minuteBr: 5,
    tenSec: 0,
    oneSec: 0,
    count: 25,
    countBr: 5,
    active: 1,
    text: 'Time Remaining'
};

export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                minute: state.minute + 1,
                count: state.minute + 1,
            };
        case DECREMENT:
            return {
                ...state,
                minute: state.minute - 1,
                count: state.minute - 1,
            };
        case COUNTDOWN:
            return {
                ...state,
                count: state.count - 1,
            };
        case NINETEN:
            return {
                ...state,
                tenSec: 5,
            }
        case SUBTEN:
            return {
                ...state,
                tenSec: state.tenSec - 1,
            }
        case NINEONE:
            return {
                ...state,
                oneSec: 9,
            }
        case SUBONE:
            return {
                ...state,
                oneSec: state.oneSec - 1,
            }
        case RESET:
            return {
                ...state,
                minute: 25,
                tenSec: 0,
                oneSec: 0,
                count: 25,
                active: 1
            };
        case ACTIVE:
            return {
                ...state,
                active: state.active * -1,
                tenSec: 0,
                oneSec: 0,
            }
        case INCBREAK:
            return {
                ...state,
                minuteBr: state.minuteBr + 1,
                countBr: state.minuteBr + 1,
            };
        case DECBREAK:
            return {
                ...state,
                minuteBr: state.minuteBr - 1,
                countBr: state.minuteBr - 1,
            };
        case CDBREAK:
            return {
                ...state,
                countBr: state.countBr - 1,
            };
        case RSBREAK:
            return {
                ...state,
                minuteBr: 5,
                countBr: 5,
            };
        default: return state;
    }
}

