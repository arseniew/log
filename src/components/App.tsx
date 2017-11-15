import * as React from "react";
import TaskInput from "./TaskInput";

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
