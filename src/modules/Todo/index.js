import Component from "./Todo.jsx";
import { connect } from "react-redux";
import * as selectors from "./selectors.js";

const mapStateToProps = (state) => ({
  allTasks: selectors.getAllTasks(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
