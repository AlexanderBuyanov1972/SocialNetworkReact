import React from 'react';
import Profile from './Profile';
import { getUserThunk, getStatusUserThunk, updateStatusUserThunk, savePhotoProfileThunk } from '../../../redux/profiles-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userIdDefault;
      if (!userId) {
        this.props.history.push("/dialogs");
      }
    }
    this.props.getUser(userId);
    this.props.getStatusUser(userId);
  }

  render() {
    return (
      <Profile {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatusUser={this.props.updateStatusUser}
        isOwner={this.props.match.params.userId === '7450'} />
    );
  }
}


let mapStateToProps = (state) => {
  return {
    profile: state.profilesPage.profile,
    status: state.profilesPage.status,
    isAuth: state.auth.isAuth,
    userIdDefault: state.auth.userId
  }
};

let mapDispatchToProps = {
  getUser: getUserThunk,
  getStatusUser: getStatusUserThunk,
  updateStatusUser: updateStatusUserThunk,
  savePhotoProfile: savePhotoProfileThunk
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
  withRouter
)(ProfileContainer);