import {string} from "prop-types";
import * as React from "react";
import TaskInput from "./TaskInput";

export const AppContext = {
    firstName: string as any as string,
};

export type IAppContext = typeof AppContext;

class App extends React.PureComponent {
    private static childContextTypes = AppContext;
    public render() {
        return (
            <div>
                <TaskInput onSubmit={() => {alert("hi"); }}/>
            </div>
        );
    }
    private getChildContext(): IAppContext {
        return {
            firstName: "Foo",
        };
    }
}

export default App;
