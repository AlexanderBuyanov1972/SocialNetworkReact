import React from 'react';
import Profile from './Profile';
import { setProfile } from '../../../redux/profiles-reducer';
import * as axios from 'axios';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(
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


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);