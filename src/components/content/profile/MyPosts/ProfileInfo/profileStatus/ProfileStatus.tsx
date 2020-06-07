import React from 'react'

type PropsType = { status: string, updateStatusUser: (status: string) => void };
type StateType = { editMode: boolean, status: string };

class ProfileStatus extends React.Component<PropsType, StateType> {
    state: StateType = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = (): void => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = (): void => {
        this.setState({
            editMode: false
        });
        this.props.updateStatusUser(this.state.status);
    }
    onStatusChange = (e: React. ChangeEvent<HTMLInputElement>) : void=> {
        this.setState(
            { status: e.currentTarget.value }
        );

    }
    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (this.props.status !== prevProps.status) {
            this.setState(
                { status: this.props.status }
            );
        }
        let a = this.props;
        let b = this.state;
        console.log('componentDidUpdate');
    }
    render() {
        console.log('render');
        return (
            <>
                {this.state.editMode && <div>
                    <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.deactivateEditMode} />
                </div>}
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
            </>
        );
    }

}

export default ProfileStatus;