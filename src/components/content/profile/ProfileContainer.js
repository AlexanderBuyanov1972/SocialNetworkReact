import React from 'react';
import Profile from './Profile';
import { setProfile } from '../../../redux/profiles-reducer';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.userId;
    if (id === undefined) {
      id = '1';
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(
      response => {
        this.props.setProfile(response.data);
      }
    );
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
  setProfile
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);