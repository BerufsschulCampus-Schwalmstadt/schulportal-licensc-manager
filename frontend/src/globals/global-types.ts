export type UserInfo = {
  authenticated: boolean;
  userId?: string;
  userEmail?: string;
  userRole?: string;
  accessToken?: string;
}; // + refresh token in cookies

export type UserInfoEditor = (
  propertyToSet: keyof UserInfo,
  propertyValue: string | boolean
) => void;

export type UserInfoGetter = () => Promise<void>;

export type GetAndSetUserInfo = {
  currentUserInfo: UserInfo;
  editUserInfo: UserInfoEditor;
  getUserInfo: UserInfoGetter;
};
