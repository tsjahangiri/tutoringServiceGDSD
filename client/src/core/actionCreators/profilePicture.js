import { UPLOAD_PROFILE_PICTURE } from "../actionTypes/profilePicture";

export const uploadProfilePicture = (file: Object) => ({
  type: UPLOAD_PROFILE_PICTURE,
  payload: {
    profilePicture: file,
  },
});
