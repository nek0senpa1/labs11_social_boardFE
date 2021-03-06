import {
  // Actions
  //GET CATEGORIES
  GET_CATEGORIES_LOADING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,

  //GET CATEGORIES FOLLOWED
  GET_CATEGORIES_FOLLOWED_LOADING,
  GET_CATEGORIES_FOLLOWED_SUCCESS,
  GET_CATEGORIES_FOLLOWED_FAILURE,

  //FOLLOW CATEGORY
  FOLLOW_CATEGORY_LOADING,
  FOLLOW_CATEGORY_SUCCESS,
  FOLLOW_CATEGORY_FAILURE,
  ADD_CATEGORY_LOADING,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,

  // Action Creators
  getCategories,
  followCategory,
  getCategoriesFollowed,
  addCategory
} from './CategoriesActions.js';

import {
  // Actions
  PAVEVIEWS_STARTED,
  PAVEVIEWS_SUCCESS,
  PAVEVIEWS_FAIL,

  GUSERS_STARTED,
  GUSERS_SUCCESS,
  GUSERS_FAIL,

  PAVEv30_STARTED,
  PAVEv30_SUCCESS,
  PAVEv30_FAIL,

  GUSERSv30_STARTED,
  GUSERSv30_SUCCESS,
  GUSERSv30_FAIL,


  // Action Creators
  getPageViews,
  getUsersAna,
  getPageViews30,
  getUsersAna30,
} from './analyticActions.js';

import {
  // Teams
  //GET TEAMS
  GET_TEAMS_LOADING,
  GET_TEAMS_SUCCESS,
  GET_TEAM_DISCUSSIONS_LOADING,
  GET_TEAM_DISCUSSIONS_SUCCESS,
  GET_TEAM_DISCUSSION_POSTS_LOADING,
  GET_TEAM_DISCUSSION_POSTS_SUCCESS,
  JOIN_TEAM_LOADING,
  JOIN_TEAM_SUCCESS,
  GET_TEAM_MEMBERS_LOADING,
  GET_TEAM_MEMBERS_SUCCESS,
  LEAVE_TEAM_LOADING,
  LEAVE_TEAM_SUCCESS,
  UPDATE_TEAM_LOADING,
  UPDATE_TEAM_SUCCESS,
  UPDATE_TEAM_FAILURE,
  ADD_TEAM_LOADING,
  ADD_TEAM_SUCCESS,
  DELETE_TEAM_SUCCESS,
  GET_USERS_TEAMS_LOADING,
  GET_USERS_TEAMS_SUCCESS,
  UPDATE_USER_ROLE,
  UPDATE_USER_ROLE_SUCCESS,
  UPDATE_USER_ROLE_FAILURE,

  //Action Creators
  getTeams,
  getTeamDiscussions,
  getTeamDiscussionsById,
  joinTeam,
  getTeamMembers,
  leaveTeam,
  updateTeam,
  addTeam,
  addTeamMember,
  deleteTeam,
  getUsersTeams,
  updateTeamWithLogo,
  updateUserRole,
} from './TeamsActions.js';

import {
  // Actions
  //TOP DISCUSSIONS
  TOP_DISCUSSIONS_LOADING,
  TOP_DISCUSSIONS_SUCCESS,
  TOP_DISCUSSIONS_FAILURE,

  //GET DISCUSSIONS
  GET_DISCUSSIONS_LOADING,
  GET_DISCUSSIONS_SUCCESS,
  GET_DISCUSSIONS_FAILURE,
  GET_DISCUSSION_BY_ID_LOADING,
  GET_DISCUSSION_BY_ID_SUCCESS,
  GET_DISCUSSION_BY_ID_FAILURE,
  GET_ALL_DISCS_BY_FOLLOWED_CATS_LOADING,
  GET_ALL_DISCS_BY_FOLLOWED_CATS_SUCCESS,
  GET_ALL_DISCS_BY_FOLLOWED_CATS_FAILURE,

  //FOLLOW DISCUSSIONS
  FOLLOW_DISCUSSION_LOADING,
  FOLLOW_DISCUSSION_SUCCESS,
  FOLLOW_DISCUSSION_FAILURE,

  //ADD DICUSSION
  ADD_DISCUSSION_LOADING,
  ADD_DISCUSSION_SUCCESS,
  ADD_DISCUSSION_FAILURE,
  EDIT_DISCUSSION_LOADING,
  EDIT_DISCUSSION_SUCCESS,
  EDIT_DISCUSSION_FAILURE,
  REMOVE_DISCUSSION_LOADING,
  REMOVE_DISCUSSION_SUCCESS,
  REMOVE_DISCUSSION_FAILURE,

  // Action Creators
  getTopDiscussions,
  getDiscussionsByCat,
  getDiscussionById,
  getAllDiscussionsByFollowedCategories,
  followDiscussion,
  addDiscussion,
  addTeamDiscussion,
  editDiscussion,
  removeDiscussion,
  updateDiscussionWithImage
} from './DiscussionsActions.js';

import {
  // Actions
  HANDLE_DISCUSSION_VOTE_LOADING,
  HANDLE_DISCUSSION_VOTE_SUCCESS,
  HANDLE_DISCUSSION_VOTE_FAILURE,
  // Action Creators
  handleDiscussionVote
} from './DiscussionVotesActions';

import {
  //Actions
  HANDLE_POST_VOTE_LOADING,
  HANDLE_POST_VOTE_SUCCESS,
  HANDLE_POST_VOTE_FAILURE,

  //Action Creators
  handlePostVote
} from './PostVotesActions';

import {
  //Actions
  HANDLE_REPLY_VOTE_LOADING,
  HANDLE_REPLY_VOTE_SUCCESS,
  HANDLE_REPLY_VOTE_FAILURE,

  //Action Creators
  handleReplyVote
} from './ReplyVotesActions';

import {
  // Actions
  ADD_POST_LOADING,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_DELETED_POST_LOADING,
  ADD_DELETED_POST_SUCCESS,
  ADD_DELETED_POST_FAILURE,
  GET_DELETED_POST_LOADING,
  GET_DELETED_POST_SUCCESS,
  GET_DELETED_POST_FAILURE,
  EDIT_POST_LOADING,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  REMOVE_POST_LOADING,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  UPLOAD_IMAGE_LOADING,
  UPLOAD_IMAGE_SUCCESS,
  RESET_IMAGE_STATE,

  // Action Creators
  addPost,
  addDeletedPost,
  editPost,
  removePost,
  uploadImage,
  updatePostWithImage,
  removeUpload,
  resetImageState,
  getDeletedPost
} from './PostsActions.js';

import {
  //Actions
  ADD_REPLY_LOADING,
  ADD_REPLY_SUCCESS,
  ADD_REPLY_FAILURE,
  HANDLE_DELETE_REPLY_LOADING,
  HANDLE_DELETE_REPLY_SUCCESS,
  HANDLE_DELETE_REPLY_FAILURE,

  //Action Creators
  addReply,
  updateReplyWithImage,
  removeReply
} from './RepliesActions.js';

import {
  // Actions
  GET_PROFILES_LOADING,
  GET_PROFILES_SUCCESS,
  GET_PROFILES_FAILURE,
  GET_PROFILE_LOADING,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,

  // Action Creators
  getProfiles,
  getProfile
} from './ProfilesActions.js';

import {
  // Actions
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOG_BACK_IN_LOADING,
  USER_LOG_BACK_IN_SUCCESS,
  USER_LOG_BACK_IN_FAILURE,
  USER_SIGNOUT_SUCCESS,
  CHANGE_USER_TYPE_LOADING,
  CHANGE_USER_TYPE_SUCCESS,
  CHANGE_USER_TYPE_FAILURE,
  USER_AUTH0_LOGIN_LOADING,
  USER_AUTH0_LOGIN_SUCCESS,
  USER_AUTH0_LOGIN_FAILURE,
  USER_REGISTER_LOADING,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  EDIT_USER_LOADING,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  PASSWORD_UPDATE_LOADING,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILURE,
  UPLOAD_AVATAR_LOADING,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_FAILURE,
  UPLOAD_AVATAR_URL_LOADING,
  UPLOAD_AVATAR_URL_SUCCESS,
  UPLOAD_AVATAR_URL_FAILURE,
  DISPLAY_ERROR,
  DISPLAY_MESSAGE,
  USER_EXISTS_LOADING,
  USER_EXISTS_SUCCESS,
  USER_EXISTS_FAILURE,
  EMAIL_EXISTS_LOADING,
  EMAIL_EXISTS_SUCCESS,
  EMAIL_EXISTS_FAILURE,
  EMAIL_CONFIRM_LOADING,
  EMAIL_CONFIRM_SUCCESS,
  EMAIL_CONFIRM_FAILURE,
  UPDATE_EMAIL_LOADING,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_EMAIL_FAILURE,
  STRIPE_PAYMENT_LOADING,
  STRIPE_PAYMENT_SUCCESS,
  STRIPE_PAYMENT_FAILURE,
  SEND_PW_RESET_EMAIL_LOADING,
  SEND_PW_RESET_EMAIL_SUCCESS,
  SEND_PW_RESET_EMAIL_FAILURE,
  RESET_PASSWORD_LOADING,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  DELETE_ACCOUNT_LOADING,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAILURE,
  REMOVE_NOTIFICATION_LOADING,
  REMOVE_NOTIFICATION_SUCCESS,
  REMOVE_NOTIFICATION_FAILURE,
  GET_NOTIFICATIONS_LOADING,
  GET_NOTIFICATIONS_SUCCESS,
  GET_NOTIFICATIONS_FAILURE,
  MARK_NOTIFICATIONS_AS_READ,
  UPDATE_LAST_LOGIN_LOADING,
  UPDATE_LAST_LOGIN_SUCCESS,
  UPDATE_LAST_LOGIN_FAILURE,
  EDIT_SIGNATURE_LOADING,
  EDIT_SIGNATURE_SUCCESS,
  EDIT_SIGNATURE_FAILURE,
  TOGGLE_THEME,
  SENDING_INVITE,
  SENDING_INVITE_FAILURE,
  SENDING_INVITE_SUCCESSFUL,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_USERSnMODS_LOADING,
  GET_USERSnMODS_SUCCESS,
  GET_USERSnMODS_FAILURE,
  UPDATE_MODS_LOADING,
  UPDATE_MODS_SUCCESS,
  UPDATE_MODS_FAILURE,
  UPLOAD_LIST_LOADING,
  UPLOAD_LIST_SUCCESS,
  UPLOAD_LIST_FAILURE,
  VERIFYUSER_LOADING,
  VERIFYUSER_SUCCESS,
  VERIFYUSER_FAILURE,

  // Action Creators
  login,
  signout,
  changeUserType,
  logBackIn,
  auth0Login,
  register,
  updatePassword,
  displayError,
  displayMessage,
  uploadAvatar,
  uploadAvatarUrl,
  isUsernameTaken,
  isEmailTaken,
  confirmEmail,
  updateEmail,
  stripePayment,
  sendPWResetEmail,
  resetPassword,
  deleteAccount,
  removeNotification,
  getNotifications,
  markNotificationsAsRead,
  editSignature,
  editUser,
  toggleTheme,
  inviteFriend,
  getUsers,
  getUsersNMods,
  makeMod,
  emailCSV,
  makeBas,
  verifyEmail,
} from './UsersActions.js';

/************************************************************
 *****************************************************************
 *****************************************************************
 *************************FOLLOWERS*******************************/

import {
  //FOLLOW ACTIONS
  GET_FOLLOWERS,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAILURE,
  GET_USER_FOLLOWERS,
  GET_USER_FOLLOWERS_SUCCESS,
  GET_USER_FOLLOWERS_FAILURE,
  ADD_FOLLOWER,
  ADD_FOLLOWER_SUCCESS,
  ADD_FOLLOWER_FAILURE,
  REMOVE_FOLLOWER,
  REMOVE_FOLLOWER_SUCCESS,
  REMOVE_FOLLOWER_FAILURE,
  GET_FOLLOWING,
  GET_FOLLOWING_SUCCESSFUL,
  GET_FOLLOWING_FAILURE,


  //FOLLOW CREATORS
  getFollowers,
  getProfileFollowers,
  removeFollower,
  addFollower,
  followersCount,
} from '../actions/FollowersActions.js';

import {
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESSFUL,
  UPDATE_PROFILE_FAILURE,
  UPDATE_BIO,
  UPDATE_BIO_SUCCESSFUL,
  UPDATE_BIO_FAILURE,
  UPDATE_LINKEDIN,
  UPDATE_LINKEDIN_SUCCESSFUL,
  UPDATE_LINKEDIN_FAILURE,
  UPDATE_GITHUB,
  UPDATE_GITHUB_SUCCESSFUL,
  UPDATE_GITHUB_FAILURE,
  UPDATE_TWITTER,
  UPDATE_TWITTER_SUCCESSFUL,
  UPDATE_TWITTER_FAILURE,
  UPDATE_LOCATION,
  UPDATE_LOCATION_SUCCESSFUL,
  UPDATE_LOCATION_FAILURE,
  updateProfile
} from '../actions/EditProfileActions.js';


/************************************************************
 *****************************************************************
*****************************************************************
*************************EMAILS*******************************/

import {
  // actions
  EMAIL_APPROVAL_SUBMITTED,
  EMAIL_APPROVAL_SUCCESS,
  EMAIL_APPROVAL_FAIL,
  GET_EMAILS,
  GET_EMAILS_SUCCESS,
  GET_EMAILS_FAIL,
  DELETING_EMAIL_APPROVAL,
  EMAIL_REMOVAL_SUCCESS,
  EMAIL_REMOVAL_FAIL,

  // Action Creators
  approveEmail,
  getEmails,
  denyEmail,

  //actions
  KEYRESOURCES_SUBMITTED,
  KEYRESOURCES_SUCCESS,
  KEYRESOURCES_FAIL,
  GET_KEYRESOURCES_LOADING,
  GET_KEYRESOURCES_SUCCESS,
  GET_KEYRESOURCES_FAIL,
  DELETING_KEYRESOURCE,
  DELETE_KEYRESOURCE_SUCCESS,
  DELETE_KEYRESOURCE_FAIL,

  // Action Creators
  putKeyResource,
  getKeyResources,
  deleteResource
} from '../actions/EmailActions';


//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************

export {
  //Categories Actions
  GET_CATEGORIES_LOADING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_FOLLOWED_LOADING,
  GET_CATEGORIES_FOLLOWED_SUCCESS,
  GET_CATEGORIES_FOLLOWED_FAILURE,
  FOLLOW_CATEGORY_LOADING,
  FOLLOW_CATEGORY_SUCCESS,
  FOLLOW_CATEGORY_FAILURE,
  ADD_CATEGORY_LOADING,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  // Team Actions
  GET_TEAMS_LOADING,
  GET_TEAMS_SUCCESS,
  GET_TEAM_DISCUSSIONS_LOADING,
  GET_TEAM_DISCUSSIONS_SUCCESS,
  GET_TEAM_DISCUSSION_POSTS_LOADING,
  GET_TEAM_DISCUSSION_POSTS_SUCCESS,
  JOIN_TEAM_LOADING,
  JOIN_TEAM_SUCCESS,
  GET_TEAM_MEMBERS_LOADING,
  GET_TEAM_MEMBERS_SUCCESS,
  LEAVE_TEAM_LOADING,
  LEAVE_TEAM_SUCCESS,
  UPDATE_TEAM_LOADING,
  UPDATE_TEAM_SUCCESS,
  UPDATE_TEAM_FAILURE,
  ADD_TEAM_LOADING,
  ADD_TEAM_SUCCESS,
  DELETE_TEAM_SUCCESS,
  GET_USERS_TEAMS_LOADING,
  GET_USERS_TEAMS_SUCCESS,
  UPDATE_USER_ROLE,
  UPDATE_USER_ROLE_SUCCESS,
  UPDATE_USER_ROLE_FAILURE,
  // Discussion Actions
  GET_DISCUSSIONS_LOADING,
  GET_DISCUSSIONS_SUCCESS,
  GET_DISCUSSIONS_FAILURE,
  TOP_DISCUSSIONS_LOADING,
  TOP_DISCUSSIONS_SUCCESS,
  TOP_DISCUSSIONS_FAILURE,
  GET_DISCUSSION_BY_ID_LOADING,
  GET_DISCUSSION_BY_ID_SUCCESS,
  GET_DISCUSSION_BY_ID_FAILURE,
  GET_ALL_DISCS_BY_FOLLOWED_CATS_LOADING,
  GET_ALL_DISCS_BY_FOLLOWED_CATS_SUCCESS,
  GET_ALL_DISCS_BY_FOLLOWED_CATS_FAILURE,
  FOLLOW_DISCUSSION_LOADING,
  FOLLOW_DISCUSSION_SUCCESS,
  FOLLOW_DISCUSSION_FAILURE,
  ADD_DISCUSSION_LOADING,
  ADD_DISCUSSION_SUCCESS,
  ADD_DISCUSSION_FAILURE,
  EDIT_DISCUSSION_LOADING,
  EDIT_DISCUSSION_SUCCESS,
  EDIT_DISCUSSION_FAILURE,
  REMOVE_DISCUSSION_LOADING,
  REMOVE_DISCUSSION_SUCCESS,
  REMOVE_DISCUSSION_FAILURE,
  // Discussion Vote Actions
  HANDLE_DISCUSSION_VOTE_LOADING,
  HANDLE_DISCUSSION_VOTE_SUCCESS,
  HANDLE_DISCUSSION_VOTE_FAILURE,
  //Post Vote Actions
  HANDLE_POST_VOTE_LOADING,
  HANDLE_POST_VOTE_SUCCESS,
  HANDLE_POST_VOTE_FAILURE,
  //Reply Vote Actions
  HANDLE_REPLY_VOTE_LOADING,
  HANDLE_REPLY_VOTE_SUCCESS,
  HANDLE_REPLY_VOTE_FAILURE,
  // Users Actions
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOG_BACK_IN_LOADING,
  USER_LOG_BACK_IN_SUCCESS,
  USER_LOG_BACK_IN_FAILURE,
  USER_SIGNOUT_SUCCESS,
  CHANGE_USER_TYPE_LOADING,
  CHANGE_USER_TYPE_SUCCESS,
  CHANGE_USER_TYPE_FAILURE,
  USER_AUTH0_LOGIN_LOADING,
  USER_AUTH0_LOGIN_SUCCESS,
  USER_AUTH0_LOGIN_FAILURE,
  USER_REGISTER_LOADING,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  EDIT_USER_LOADING,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  PASSWORD_UPDATE_LOADING,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILURE,
  UPLOAD_AVATAR_LOADING,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_FAILURE,
  UPLOAD_AVATAR_URL_LOADING,
  UPLOAD_AVATAR_URL_SUCCESS,
  UPLOAD_AVATAR_URL_FAILURE,
  DISPLAY_ERROR,
  DISPLAY_MESSAGE,
  STRIPE_PAYMENT_LOADING,
  STRIPE_PAYMENT_SUCCESS,
  STRIPE_PAYMENT_FAILURE,
  SEND_PW_RESET_EMAIL_LOADING,
  SEND_PW_RESET_EMAIL_SUCCESS,
  SEND_PW_RESET_EMAIL_FAILURE,
  RESET_PASSWORD_LOADING,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  DELETE_ACCOUNT_LOADING,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAILURE,
  REMOVE_NOTIFICATION_LOADING,
  REMOVE_NOTIFICATION_SUCCESS,
  REMOVE_NOTIFICATION_FAILURE,
  GET_NOTIFICATIONS_LOADING,
  GET_NOTIFICATIONS_SUCCESS,
  GET_NOTIFICATIONS_FAILURE,
  MARK_NOTIFICATIONS_AS_READ,
  UPDATE_LAST_LOGIN_LOADING,
  UPDATE_LAST_LOGIN_SUCCESS,
  UPDATE_LAST_LOGIN_FAILURE,
  EDIT_SIGNATURE_LOADING,
  EDIT_SIGNATURE_SUCCESS,
  EDIT_SIGNATURE_FAILURE,
  TOGGLE_THEME,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  // Profile Actions
  GET_PROFILES_LOADING,
  GET_PROFILES_SUCCESS,
  GET_PROFILES_FAILURE,
  GET_PROFILE_LOADING,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_USERSnMODS_LOADING,
  GET_USERSnMODS_SUCCESS,
  GET_USERSnMODS_FAILURE,

  UPDATE_MODS_LOADING,
  UPDATE_MODS_SUCCESS,
  UPDATE_MODS_FAILURE,

  UPLOAD_LIST_LOADING,
  UPLOAD_LIST_SUCCESS,
  UPLOAD_LIST_FAILURE,
  VERIFYUSER_LOADING,
  VERIFYUSER_SUCCESS,
  VERIFYUSER_FAILURE,

  // Posts Actions
  ADD_POST_LOADING,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_DELETED_POST_LOADING,
  ADD_DELETED_POST_SUCCESS,
  ADD_DELETED_POST_FAILURE,
  GET_DELETED_POST_LOADING,
  GET_DELETED_POST_SUCCESS,
  GET_DELETED_POST_FAILURE,
  EDIT_POST_LOADING,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  REMOVE_POST_LOADING,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  USER_EXISTS_LOADING,
  USER_EXISTS_SUCCESS,
  USER_EXISTS_FAILURE,
  EMAIL_EXISTS_LOADING,
  EMAIL_EXISTS_SUCCESS,
  EMAIL_EXISTS_FAILURE,
  EMAIL_CONFIRM_LOADING,
  EMAIL_CONFIRM_SUCCESS,
  EMAIL_CONFIRM_FAILURE,
  UPDATE_EMAIL_LOADING,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_EMAIL_FAILURE,
  UPLOAD_IMAGE_LOADING,
  UPLOAD_IMAGE_SUCCESS,
  RESET_IMAGE_STATE,
  //Reply Actions
  ADD_REPLY_LOADING,
  ADD_REPLY_SUCCESS,
  ADD_REPLY_FAILURE,
  HANDLE_DELETE_REPLY_LOADING,
  HANDLE_DELETE_REPLY_SUCCESS,
  HANDLE_DELETE_REPLY_FAILURE,
  // Categories Action Creators
  getCategories,
  getCategoriesFollowed,
  followCategory,
  addCategory,
  // Teams Action Creators
  getTeams,
  getTeamDiscussions,
  joinTeam,
  getTeamDiscussionsById,
  getTeamMembers,
  leaveTeam,
  updateTeam,
  addTeam,
  addTeamMember,
  deleteTeam,
  getUsersTeams,
  updateTeamWithLogo,
  updateUserRole,
  // Discussion Action Creators
  getTopDiscussions,
  getDiscussionsByCat,
  getDiscussionById,
  getAllDiscussionsByFollowedCategories,
  followDiscussion,
  addDiscussion,
  addTeamDiscussion,
  editDiscussion,
  removeDiscussion,
  updateDiscussionWithImage,
  // Discussion Vote Action Creators
  handleDiscussionVote,
  // Post Vote Action Creators
  handlePostVote,
  // Post Vote Action Creators
  handleReplyVote,
  // Users Action Creators
  register,
  login,
  signout,
  changeUserType,
  logBackIn,
  auth0Login,
  updatePassword,
  displayError,
  displayMessage,
  uploadAvatar,
  uploadAvatarUrl,
  isUsernameTaken,
  isEmailTaken,
  confirmEmail,
  updateEmail,
  stripePayment,
  sendPWResetEmail,
  resetPassword,
  deleteAccount,
  removeNotification,
  getNotifications,
  markNotificationsAsRead,
  editSignature,
  editUser,
  toggleTheme,
  getUsers,
  getUsersNMods,
  makeMod,
  emailCSV,
  makeBas,
  verifyEmail,
  // Profile Action Creators
  getProfiles,
  getProfile,
  // Posts Action Creators
  addPost,
  addDeletedPost,
  getDeletedPost,
  editPost,
  removePost,
  uploadImage,
  updatePostWithImage,
  removeUpload,
  resetImageState,
  // Reply Action Creators
  addReply,
  updateReplyWithImage,
  removeReply,
  //followers actions
  GET_FOLLOWERS,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAILURE,
  GET_USER_FOLLOWERS,
  GET_USER_FOLLOWERS_SUCCESS,
  GET_USER_FOLLOWERS_FAILURE,
  ADD_FOLLOWER,
  ADD_FOLLOWER_SUCCESS,
  ADD_FOLLOWER_FAILURE,
  REMOVE_FOLLOWER,
  REMOVE_FOLLOWER_SUCCESS,
  REMOVE_FOLLOWER_FAILURE,
  GET_FOLLOWING,
  GET_FOLLOWING_SUCCESSFUL,
  GET_FOLLOWING_FAILURE,
  //FOLLOW CREATORS
  getFollowers,
  getProfileFollowers,
  removeFollower,
  addFollower,
  followersCount,
  //INVITE A FRIEND
  SENDING_INVITE,
  SENDING_INVITE_FAILURE,
  SENDING_INVITE_SUCCESSFUL,
  inviteFriend,
  //edit profile
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESSFUL,
  UPDATE_PROFILE_FAILURE,
  UPDATE_BIO,
  UPDATE_BIO_SUCCESSFUL,
  UPDATE_BIO_FAILURE,
  UPDATE_LINKEDIN,
  UPDATE_LINKEDIN_SUCCESSFUL,
  UPDATE_LINKEDIN_FAILURE,
  UPDATE_GITHUB,
  UPDATE_GITHUB_SUCCESSFUL,
  UPDATE_GITHUB_FAILURE,
  UPDATE_TWITTER,
  UPDATE_TWITTER_SUCCESSFUL,
  UPDATE_TWITTER_FAILURE,
  UPDATE_LOCATION,
  UPDATE_LOCATION_SUCCESSFUL,
  UPDATE_LOCATION_FAILURE,
  updateProfile,
  // Emails
  // actions
  EMAIL_APPROVAL_SUBMITTED,
  EMAIL_APPROVAL_SUCCESS,
  EMAIL_APPROVAL_FAIL,
  GET_EMAILS,
  GET_EMAILS_SUCCESS,
  GET_EMAILS_FAIL,
  DELETING_EMAIL_APPROVAL,
  EMAIL_REMOVAL_SUCCESS,
  EMAIL_REMOVAL_FAIL,

  // Action Creators
  approveEmail,
  getEmails,
  denyEmail,

  //Key Resources
  KEYRESOURCES_SUBMITTED,
  KEYRESOURCES_SUCCESS,
  KEYRESOURCES_FAIL,
  GET_KEYRESOURCES_LOADING,
  GET_KEYRESOURCES_SUCCESS,
  GET_KEYRESOURCES_FAIL,
  DELETING_KEYRESOURCE,
  DELETE_KEYRESOURCE_SUCCESS,
  DELETE_KEYRESOURCE_FAIL,
  // Action Creators
  putKeyResource,
  getKeyResources,
  deleteResource,

  // Analytics
  PAVEVIEWS_STARTED,
  PAVEVIEWS_SUCCESS,
  PAVEVIEWS_FAIL,
  GUSERS_STARTED,
  GUSERS_SUCCESS,
  GUSERS_FAIL,
  PAVEv30_STARTED,
  PAVEv30_SUCCESS,
  PAVEv30_FAIL,
  GUSERSv30_STARTED,
  GUSERSv30_SUCCESS,
  GUSERSv30_FAIL,
  // Analytic Creators
  getPageViews,
  getUsersAna,
  getPageViews30,
  getUsersAna30,
  
};

