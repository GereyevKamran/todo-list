import Component from './Task.jsx';
import * as actions from './actions.js';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    deleteTask: taskId => dispatch(actions.onDeleteTask(taskId)),
    completeTask: taskId => dispatch(actions.onCompleteTask(taskId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);