import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from '../action/step_actions.js';

const newI = {}

const stepsReducer = (oldState = newI, action) =>{
    Object.freeze(oldState);
    let newState = {};
    switch(action.type){
        case RECEIVE_STEPS:
            action.steps.map(step => {
                newState[step.id] = step;
            });
            return newState;
        case RECEIVE_STEP:
            const newStep = {[action.step.id]: action.step};
            return Object.assign({}, oldState, newStep);
        case REMOVE_STEP:
            newState = Object.assign({}, oldState);
            delete newState[action.step.id];
            return newState;
        default:
            return oldState;
    }
}

export default stepsReducer;