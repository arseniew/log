import {string} from "prop-types";
import * as React from "react";
import { AppContext, IAppContext } from "./App";

class Child extends React.PureComponent {
    private static contextTypes = {firstName: string};
    public context: IAppContext;
    public render() {
        return <h1>{this.context.firstName}</h1>;
    }
}

export default Child;
