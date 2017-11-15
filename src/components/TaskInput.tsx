import * as React from "react";

interface ITaskInputProps {
    onSubmit: () => void;
}

interface ITaskInputState {
    text: string;
}

class TaskInput extends React.PureComponent<ITaskInputProps, ITaskInputState> {
    constructor(props: ITaskInputProps, ...rest: any[]) {
        super(props, ...rest);
        this.state = {
            text: "",
        };
    }
    public render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <input
                    type="text" value={this.state.text}
                    onChange={this.onChangeHandler}
                />
            </form>
        );
    }
    private onChangeHandler =
        (e: React.FormEvent<HTMLInputElement>): void =>
            this.setState({ text: e.currentTarget.value })
}

export default TaskInput;
