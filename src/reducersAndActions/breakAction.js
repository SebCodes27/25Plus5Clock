import { INCBREAK, DECBREAK, CDBREAK, RSBREAK } from "./actionTypes";

const incBreak = () => {
    return {
        type: INCBREAK
    };
};

const decBreak = () => {
    return {
        type: DECBREAK
    };
};

const timerBreak = () => {
    return {
        type: CDBREAK
    };
};

const resetBreak = () => {
    return {
        type: RSBREAK
    }
}

export { incBreak, decBreak, timerBreak, resetBreak };