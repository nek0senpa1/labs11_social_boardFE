import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../assets/gif/spinner/Spinner'; //need to move to assets folder
import { getProfile } from '../store/actions/index';
import { getFollowers, getProfileFollowers, removeFollower, addFollower, inviteFriend, followersCount } from '../store/actions/index';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { phoneP, phoneL, tabletP } from '../globals/globals';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import moment from 'moment';
import "react-tabs/style/react-tabs.css";

import { UserSearch } from '../components/index.js';
// components
import { Avatar, Deleted } from '../components/index.js';

/***************************************************************************************************
 ********************************************** Styles **********************************************
 **************************************************************************************************/
const ProfileStyle = styled.div`
  width: 90%;
  flex-direction: column;
  justify-content: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  margin: 10px;
  padding: 10px;
  width: 100%;
  color: ${props => props.theme.defaultColor};
  @media (max-width: 1080px) {
    .react-tabs__tab {
      width: 100%;
      text-align: center;
    }
  }
  @media ${phoneP} {
    .react-tabs__tab {
      width: 100%;
      text-align: center;
    }
  }
  .avatar-style {
    width: 10%;
    display: flex;
    align-self: flex-start;
    
    @media ${phoneP} {
      display: none;
      }
  }
  .username-style { 
    margin-left: 0px;
    font-size: .8rem;
    justify-content: flex-start;
    
    //commented this out due to it highlighting everything in the div
    // &:hover {
    //   cursor: pointer;
    //   color: ${props => props.theme.defaultColorOnHover};
    //   text-decoration: underline;
    // }

    @media (max-width: 1080px) {
      margin-left: 0px;
      display: flex;
      justify-content: flex-start;
      width: 80%;
    }
  }

  .userfollowers-style {
    margin-left: 0px; 
    font-size: .8rem; 
    justify-content: flex-start;
    align-content : center; 
    align-items : center; 

    &:hover {
      cursor: default; 
      color: black; 
      text-decoration: none;
    }

    @media (max-width: 395px ){
      flex-direction: column; 
      margin-bottom : 12.800px;
      margin-top : 12.800px; 
      
    }

  }

  @media ${phoneP} {
    margin-left: 0px;
    display: flex;
    justify-content: flex-start;
  }
  .status-style {
    font-size: 10px;
    font-style: italic;
  }
  @media (max-width: 1080px){
    display: flex;
    flex-direction: column;
    width: 90%;
    @media ${phoneP} {
      display: flex;
      flex-direction: column;
      width: 90%;
    }
  }
  .discussion-title {
    font-weight: bold;
  }
`;

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

const WrappedDiv = styled.div`
display: flex;
flex-direction: row;
width: 90%;
margin: 0 auto;
color: ${props => props.theme.defaultColor};
.back {
  margin-right: 5px;
  width: 7%;
  height: 50px;
  font-size: 1rem;
  color: ${props => props.theme.defaultColor};
  
  &:hover{
    cursor: pointer;
  }
}
`;

const WrappedDivSearch = styled.div`
display: flex;
flex-direction: row;
width: 90%;
margin: 0 auto;
color: ${props => props.theme.defaultColor};
.back {
  margin-right: 5px;
  width: 7%;
  height: 50px;
  font-size: 1rem;
  color: ${props => props.theme.defaultColor};
  
  &:hover{
    cursor: pointer;
  }
}

@media ${phoneP} {
  display: flex
  flex-direction: column;
  width: 100%;
}
`;

// const WrappedDiv2 = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// width: 90%;
// margin: 0 auto;
// margin-bottom : 15px; 
// margin-right : 20px;
// color: ${props => props.theme.defaultColor};
// .back {
//   margin-right: 5px;
//   width: 7%;
//   height: 50px;
//   font-size: 1rem;
//   color: ${props => props.theme.defaultColor};
  
//   &:hover{
//     cursor: pointer;
//   }
// }
// `;

const Button = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #418DCF;
  background-color: #418DCF;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: #418DCF;
  }
`;

const ContentDiv = styled.div`
  margin: 20px 0px 10px 0px;
  display: flex;
  color: ${props => props.theme.defaultColor};
  padding: 5px;
  border-radius: 5px;

  a {
    text-decoration: none;
  }

  p {
    font-size: 1rem;
    margin-top: 16px;
  }

  .discussion-title {
    color: ${props => props.theme.defaultColor};
    font-weight: normal;
  }

  .posted-by {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-left: auto;
    align-items: center;
    max-width: 100%;

    .c-name {
      font-size: 0.8rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 160px;
      min-width: 100px;
      
      @media (max-width: 525px) {
        display: none;
      }
    }

    .c-time {
      font-size: 0.8rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 150px;
      width: 50%;
      min-width: 150px;
      
      @media (max-width: 1080px) {
        display: none;
      }
    }

    span {
      margin-left: 5px;
      
      @media (max-width: 525px) {
        display: none;
      }
    }
  }

  .username{
    font-size: 0.8rem;
    color: ${props => props.theme.defaultColor};
  }

  &:hover {
    background-color: #ccc;
    color: black;

    .discussion-title, .posted-by, .username {
      color: black;
    }
  }
`;

const PostHeader = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 12px;
  margin-bottom: 15px;
  font-size: 0.8rem;
	color: #a7a7a7;
  .d-creator {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 150px;
    img{
      border-radius: 50%;
      margin-right: 10px;
      width: 23px;
    }
  
  }
`;

const SubWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SearchContainer = styled.div`
  margin-right: 15px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media ${tabletP}{
    width: 40%;
    margin-left: 10px;
    }
    
    @media ${phoneL}{
      margin-left: 10px;
      width: 45%;
    }
`;

// const InviteFriendLink = styled.p`
//   cursor: pointer;
//   textDecoration: underline;

//   &:hover {

//   }
// `;

const SpanLabel = styled.span`
  font-weight: 900;
`;

const ProfileLink = styled.a`
  text-decoration: none; 
  color: black; 

  &:hover {
    text-decoration: underline;
    cursor: pointer; 
    color : ${props => props.theme.defaultColorOnHover};
  }
`;

const FollowSpan = styled.span`
  margin-right: 15px; 
  margin-left: 15px; 
  text-align : center; 
  &:hover {
    text-decoration: none; 
    color: black;
  }
`;

const BioInfoDiv = styled.div`
  word-break: break-word;
`;

const DivFollowListItem = styled.div`
  margin-left: -70px;
  padding: 5px;
  line-height: 47px;

  img {
    padding: 10px;
  }
`;

const FollowButtonSpan = styled.span`
  margin-left: 15px; 
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class Profile extends Component {
  state = {
    initialized: false,

  }
  componentDidMount() {
    this.props.getProfile(this.props.match.params.id);
    this.handleInitializeFollowList();
    this.setState({ initialized: true })
  };
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.handleInitializeFollowList(); // this line handles going from profile to profile. 
      return this.props.getProfile(this.props.match.params.id);
    }
    if (prevProps.isEditProfileModalRaised === true && this.props.isEditProfileModalRaised === false) {
      return this.props.getProfile(this.props.match.params.id)
    }

  };

  handleInitializeFollowList = () => {
    const userId = localStorage.getItem("symposium_user_id");
    this.props.getProfileFollowers(this.props.match.params.id);
    this.props.getFollowers(userId);
    this.props.followersCount(this.props.match.params.id);
  }
  /*double arrow functions prevent peformance issues because it will not create a new function on every render */
  handleAddFollower = (userId, followingId) => () => {
    this.props.addFollower(userId, followingId);
  }

  handleRemoveFollower = (userId, followingId) => () => {
    this.props.removeFollower(userId, followingId);
  }
  goToUsersPage = (followingId) => () => {
    this.props.history.push(`/profile/${followingId}`);
  }


  editProfile = event => {
    this.props.setEditProfileModalRaised(event, !this.props.isEditProfileModalRaised);
  }

  handleEmailInput = event => {
    this.props.setInviteFriendModalRaised(event, !this.props.isInviteFriendModalRaised);
  }

  /* we use profileItems to manipulate what data is displayed. if the data received from our props is 0,
  profileItems displays our spinner component, however if our props contains a profile we display that profile
  by mapping through our data received and choosing what properties we want to display with our profile parameter*/
  render() {
    /*Profile data for user profile*/
    const usernameForProfile = this.props.profile[0].username;
    const bio = this.props.profile[0].bio ? this.props.profile[0].bio : "";
    const twitter = this.props.profile[0].twitter ? this.props.profile[0].twitter : "";
    const github = this.props.profile[0].github ? this.props.profile[0].github : "";
    const linkedin = this.props.profile[0].linkedin ? this.props.profile[0].linkedin : "";
    const location = this.props.profile[0].location ? this.props.profile[0].location : "";
    //Follow list variables 
    const userId = localStorage.getItem("symposium_user_id");

    const profileId = this.props.match.params.id;

    let alreadyFollowing = false; // will be used to display follow or unfollow depending on false vs true. 
    let userLoggedInFollowList;
    //initially the data won't exist so an empty array is used once it loads it will be what is returned. 
    let followList = this.props.followers.profileFollowers ? this.props.followers.profileFollowers : [];
    /*Check if the user logged in is not the user listed on the profile.
      Then check if the user listed on the profile is being followed by the user logged in.
    */
    if (userId !== profileId) {
      userLoggedInFollowList = this.props.followers.followers ? this.props.followers.followers : [];
      for (let user of userLoggedInFollowList) {
        if (user.username === usernameForProfile) {
          alreadyFollowing = true;
          break;
        }
      }
    }

    const followListLength = followList ? followList.length : 0;

    const profileFollowersCount = this.props.followers.profileFollowers ? this.props.followers.profileFollowers.length : 0;
    const usersFollowersCount = this.props.followers.usersFollowers ? this.props.followers.usersFollowers.length : 0;
    let profileItems;
    if (this.props.profile.length === 0) {
      profileItems = <Spinner />;
    } else {
      if (this.props.profile) {
        profileItems = this.props.profile.map((profile, index) => (
          <ProfileStyle key={index}>
            <ProfileWrapper className='prowrap'>
              <HeaderStyle>
                <WrappedDiv className='avatar-style'>
                  <Avatar
                    height='50px'
                    width='50px'
                    src={profile.avatar}
                  />
                </WrappedDiv>
                <br />

                <WrappedDiv className='username-style'>
                  <p className='property-content'> {profile.username ? profile.username : <Deleted />}</p>
                  <WrappedDiv>
                    {profileId === userId ? <WrappedDiv className='userfollowers-style'>
                      <FollowSpan><SpanLabel>Following: </SpanLabel>{profileFollowersCount}  </FollowSpan><FollowSpan>  <SpanLabel> Followers: </SpanLabel>{usersFollowersCount}</FollowSpan>
                    </WrappedDiv> : <FollowButtonSpan>{profileId !== userId ? alreadyFollowing === false ? <Button className='add-post-btn' onClick={this.handleAddFollower(userId, profileId)}>Follow</Button> : <Button className='add-post-btn' onClick={this.handleRemoveFollower(userId, profileId)}>UnFollow</Button> : <span></span>}</FollowButtonSpan>}
                  </WrappedDiv>
                </WrappedDiv>
              </HeaderStyle>
              {/* This section is for the bio and the links for a user account */}
              <BioInfoDiv>
                <p><SpanLabel>Bio </SpanLabel><span>{bio}</span></p>
                <br />
                <p><SpanLabel>Location </SpanLabel> <span>{location}</span></p>
                <p><SpanLabel>Github </SpanLabel> <span><ProfileLink href={github.includes("http://") === true || github.includes("https://") === true ? `${github}` : `http://${github}`} target="_blank">{github}</ProfileLink></span></p>
                <p><SpanLabel>LinkedIn </SpanLabel> <span><ProfileLink href={linkedin.includes("http://") === true || linkedin.includes("https://") === true ? `${linkedin}` : `http://${linkedin}`} target="_blank">{linkedin}</ProfileLink></span></p>
                <p><SpanLabel>Twitter </SpanLabel> <span><ProfileLink href={twitter.includes("http://") === true || twitter.includes("https://") === true ? `${twitter}` : `http://${twitter}`} target="_blank">{twitter}</ProfileLink></span></p>
                <p>{profileId !== userId ? <span></span> : <Button className='add-post-btn' onClick={this.editProfile}>Edit Profile</Button>}</p>
              </BioInfoDiv>
              <br />
              <WrappedDivSearch>

                {/* <label className="container">Search for a friend</label> */}
                <SearchContainer>

                  <UserSearch showSearch={this.props.showSearch} scrollTo={this.props.scrollTo} pathname={this.props.pathname} goTo={this.props.goTo} toggleSearch={this.props.toggleSearch} />
                </SearchContainer>
                <br />
                <Button className="add-post-btn" onClick={this.handleEmailInput}>Invite a friend</Button>
              </WrappedDivSearch>
              <br />
              <br />
              <h4>The tabs below list what you are following. Click a tab to check it out.</h4>
              <Tabs>
                <TabList>
                  <Tab> Followed Posts</Tab>
                  <Tab>Comments</Tab>
                  <Tab>Replies</Tab>
                  <Tab>Users</Tab>
                </TabList>
                <TabPanel>
                  <WrappedDiv>
                    <SubWrapper>
                      {profile.discussionFollows.map((discussionFollowed, index) =>
                        <ContentDiv key={index}>
                          <Link to={`/discussion/${discussionFollowed.discussion_id}`}>
                            <PostHeader>
                              <div className='discussion-title'>
                                <div className='content'>
                                  <p> {discussionFollowed.body}</p>
                                </div>
                              </div>
                              <div className='posted-by'>
                                <div className='d-creator'>
                                  <img alt='user' src={discussionFollowed.avatar} />
                                  <p className='username' to={`/discussion/${discussionFollowed.discussion_id}`}>
                                    {discussionFollowed.username}
                                  </p>
                                </div>
                                &nbsp;
                                &nbsp;
                                <div className='c-name'>
                                  <i className={discussionFollowed.category_icon} />
                                  <span>
                                    {discussionFollowed.category_name}
                                  </span>
                                </div>
                                <div className='c-time'>
                                  <span>
                                    {moment(new Date(Number(discussionFollowed.created_at))).fromNow()}
                                  </span>
                                </div>
                              </div>
                            </PostHeader>
                          </Link>
                        </ContentDiv>)}
                    </SubWrapper>
                  </WrappedDiv>
                </TabPanel>
                <TabPanel>
                  <WrappedDiv>
                    <SubWrapper>
                      {profile.posts.map((post, index) =>
                        <ContentDiv key={index}>
                          <Link to={`/discussion/${post.discussion_id}`}>
                            <PostHeader>
                              <div className='discussion-title'>
                                <div className='content'>
                                  <p> {post.body}</p>
                                </div>
                              </div>
                              <div className='posted-by'>
                                <div className='d-creator'>
                                  <img alt='user' src={post.avatar} />
                                  <p className='username' to={`/discussion/${post.discussion_id}`}>
                                    {post.username}
                                  </p>
                                </div>
                                &nbsp;
                                &nbsp;
                                <div className='c-time'>
                                  <span>
                                    {moment(new Date(Number(post.created_at))).fromNow()}
                                  </span>
                                </div>
                              </div>
                            </PostHeader>
                          </Link>
                        </ContentDiv>)}
                    </SubWrapper>
                  </WrappedDiv>
                </TabPanel>
                <TabPanel>
                  <WrappedDiv>
                    <SubWrapper>
                      {profile.replies.map((reply, index) =>
                        <ContentDiv key={index}>
                          <Link to={`/discussion/${reply.discussion_id}`}>
                            <PostHeader>
                              <div className='discussion-title'>
                                <div className='content'>
                                  <p> {reply.body}</p>
                                </div>
                              </div>
                              <div className='posted-by'>
                                <div className='d-creator'>
                                  <img alt='user' src={reply.avatar} />
                                  <p className='username' to={`/discussion/${reply.discussion_id}`}>
                                    {reply.username}
                                  </p>
                                </div>
                                &nbsp;
                                &nbsp;
                                <div className='c-time'>
                                  <span>
                                    {moment(new Date(Number(reply.created_at))).fromNow()}
                                  </span>
                                </div>
                              </div>
                            </PostHeader>
                          </Link>
                        </ContentDiv>)}
                    </SubWrapper>
                  </WrappedDiv>
                </TabPanel>
                <TabPanel>
                  <WrappedDiv>
                    <SubWrapper>
                      <div>
                        {followListLength > 0 ? followList.map((user, id) =>
                          // user.following_id can be used to go to the users profile upon clicking on them currently not implemented. 
                          <DivFollowListItem key = {id}>
                           <ContentDiv key = {id}>
                            <WrappedDiv
                              style={{ cursor: "pointer" }}
                              key={id}
                              onClick={this.goToUsersPage(user.following_id)}
                            >
                              <Avatar
                                height='50px'
                                width='50px'
                                src={user.avatar}
                              >

                              </Avatar>
                              <span>{user.username}</span>

                            </WrappedDiv>
                            </ContentDiv>
                          </DivFollowListItem>
                        ) : <div>{profileId !== userId ? `${usernameForProfile} currently doesn't follow any users.` : "You are not currently following any users."}</div>}

                      </div>
                    </SubWrapper>
                  </WrappedDiv>
                </TabPanel>
              </Tabs>
            </ProfileWrapper>
          </ProfileStyle>

        ));
      } else {
        profileItems = <h4>No profile found...</h4>;
      }
    }
    return (
      <ProfileStyle>
        {profileItems}
      </ProfileStyle>
    );
  }
}

Profile.propTypes = {
  getProfile: PropTypes.func,
  getFollowers: PropTypes.func,
  getProfileFollowers: PropTypes.func,
  removeFollower : PropTypes.func, 
  addFollower: PropTypes.func,
  inviteFriend: PropTypes.func,
  followersCount: PropTypes.func,
  setEditProfileModalRaised: PropTypes.func.isRequired,
  isEditProfileModalRaised: PropTypes.bool.isRequired,
  toggleSearch: PropTypes.func.isRequired,
  showSearch: PropTypes.bool.isRequired,
  setInviteFriendModalRaised: PropTypes.func,
  isInviteFriendModalRaised: PropTypes.bool,

  profile: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string,
    })),
  followers: PropTypes.object,
};

const mapStateToProps = state => ({
  profile: state.profilesData.singleProfileData,
  followers: state.followers,
  profileFollowers: state.profileFollowers,
  userFollowers: state.userFollowers,
});

export default connect(mapStateToProps, { getProfile, getFollowers, getProfileFollowers, removeFollower, addFollower, inviteFriend, followersCount })(Profile);