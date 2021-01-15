import constants from '../../../../constants';

export const onDeleteTask = taskId => ({
    type: constants.DELETE_TASK,
    payload: taskId
});

export const onCompleteTask = taskId => ({
    type: constants.COMPLETE_TASK,
    payload: taskId
});