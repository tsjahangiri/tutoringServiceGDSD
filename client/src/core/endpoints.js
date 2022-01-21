const baseUrl = 'http://serverv1-env.eba-2zezdtzh.us-east-1.elasticbeanstalk.com/api';

export const loginApi = `${baseUrl}/login`;
export const registerApi = `${baseUrl}/register`;
export const allStudentListApi = `${baseUrl}/users/?UserType=102`;
export const allTutorListApi = `${baseUrl}/users/?UserType=101`;
export const pendingTutorListApi = `${baseUrl}/courses?Status=100`;
