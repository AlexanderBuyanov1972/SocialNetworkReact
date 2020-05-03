import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatusUser(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState(
            { status: e.currentTarget.value }
        );

    }
    componentDidUpdate(prevProps, prevState) {
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