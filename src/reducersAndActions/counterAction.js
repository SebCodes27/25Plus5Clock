import { INCREMENT, DECREMENT, COUNTDOWN, SUBTEN, SUBONE, NINETEN, NINEONE, RESET, ACTIVE } from "./actionTypes";

const incCount = () => {
    return {
        type: INCREMENT
    };
};

const decCount = () => {
    return {
        type: DECREMENT
    };
};

const nineTen = () => {
    return {
        type: NINETEN
    }
}

const subTen = () => {
    return {
        type: SUBTEN
    }
}

const nineOne = () => {
    return {
        type: NINEONE
    }
}

const subOne = () => {
    return {
        type: SUBONE
    }
}

const timer = () => {
    return {
        type: COUNTDOWN
    };
};

const reset = () => {
    return {
        type: RESET
    };
};

const active = () => {
    return {
        type: ACTIVE
    };
};


export { incCount, decCount, nineTen, subTen, nineOne, subOne, timer, reset, active };
