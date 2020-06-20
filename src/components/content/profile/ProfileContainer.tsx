import { AppStateType } from '../../../redux/redux-store'
import React from 'react'
import Profile from './Profile'
import { getUserThunk, getStatusUserThunk, updateStatusUserThunk, savePhotoProfileThunk, saveProfileThunk } from '../../../redux/profiles-reducer'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'

const ownerUserId = '7450';
type PathParamType = {userId: string }
type PropsType = RouteComponentProps<PathParamType> & { someString: string }

class ProfileContainer extends React.Component<AppProfilePropsType & PropsType> {

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
        user={this.props.userIdDefault}
        profile={this.props.profile}
        status={this.props.status}
        updateStatusUser={this.props.updateStatusUser}
        isOwner={this.props.match.params.userId === ownerUserId}
        saveProfile={this.props.saveProfile} />
    );
  }
}


let mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilesPage.profile,
    status: state.profilesPage.status,
    isAuth: state.auth.isAuth,
    userIdDefault: state.auth.userId
  }
};

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

let mapDispatchToProps = {
  getUser: getUserThunk,
  getStatusUser: getStatusUserThunk,
  updateStatusUser: updateStatusUserThunk,
  savePhotoProfile: savePhotoProfileThunk,
  saveProfile: saveProfileThunk
};

type MapDispatchToPropsType = {
  getUser: (id: string) => Promise<void>
  getStatusUser: (id: string) => Promise<void>
  updateStatusUser: () => Promise<void>
  savePhotoProfile: () => Promise<void>
  saveProfile: () => Promise<void>
}

type AppProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
  withRouter
)(ProfileContainer);