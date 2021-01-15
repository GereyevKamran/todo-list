import Component from './FormInput.jsx';
import * as actions from './actions.js';
import { connect } from 'react-redux';
import * as selectors from './selectors.js';

const mapStateToProps = state => ({
    allTasks: selectors.getAllTasks(state),
});

const mapDispatchToProps = dispatch => ({
    saveTask: task => dispatch(actions.onSaveTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);