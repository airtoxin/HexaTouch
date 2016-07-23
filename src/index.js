import React from "react";
import ReactDom from "react-dom";
import {root, branch} from "baobab-react/higher-order";
import tree from "./state";
import * as actions from "./actions";

const Counter = branch(
    {cnt: ["cnt"]},
    props => <h1 onClick={() => props.dispatch(actions.increment, 1)}>{props.cnt}</h1>
);

const App = () => <div>hello<Counter/></div>;

const Rooted = root(tree, App);

ReactDom.render(<Rooted />, document.getElementById("app"));
