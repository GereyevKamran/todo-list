import constants from '../../constants';

const initialState = {
    tasks: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SAVE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            }
        case constants.COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(element => +action.payload === element.id ? { ...element, isCompleted: element.isCompleted ? false : true }: element)
            }
        case constants.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(element => +action.payload === element.id ? { ...element, isOpen: false }: element)
            }
        default:
            return state;
    } 
}