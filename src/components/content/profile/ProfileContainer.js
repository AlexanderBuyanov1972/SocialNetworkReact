import React from 'react';
import Profile from './Profile';
import { setProfile, getUserThunk } from '../../../redux/profiles-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.userId;
    if (id === undefined) {
      id = '1';
    }
  this.props.getUser(id);
  }

  render() {

    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilesPage.profile
  }
};

let mapDispatchToProps = {
  setProfile, getUser: getUserThunk
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);