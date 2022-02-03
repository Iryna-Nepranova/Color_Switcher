import {
    GREEN,
    RED,
    BLUE
} from '../constants'

const defaultValues = {
    color: 0,
};


export const switcherReducer = (state = defaultValues, action) => {
    switch (action.type) {
        case GREEN: {
            return {
                color: "green"
            };
        }
        case RED: {
            return {
                color: "red"
            };
        }
        case BLUE: {
            return {
                color: "blue"
            };
        }
        default: {
            return state;
        };

    };
};