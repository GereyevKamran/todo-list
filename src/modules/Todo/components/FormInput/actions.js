import constants from '../../../../constants';

export const onSaveTask = task => ({
    type: constants.SAVE_TASK,
    payload: task
});