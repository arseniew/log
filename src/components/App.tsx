import * as React from "react";
import TaskInput from "./TaskInput";

export interface IAppContext {
    firstName: string;
}

class App extends React.PureComponent {
    public render() {
        return (
            <div>
                <TaskInput onSubmit={() => {alert("hi"); }}/>
            </div>
        );
    }
}

export default App;
