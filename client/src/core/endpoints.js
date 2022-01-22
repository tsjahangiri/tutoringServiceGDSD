const baseUrl = `${process.env.REACT_APP_API_URL}/api`;

export const loginApi = `${baseUrl}/login`;
export const registerApi = `${baseUrl}/register`;
export const tutorSearchApi = `${baseUrl}/tutors/search`;
export const courseApi = `${baseUrl}/courses`;
export const qualificationApi = `${baseUrl}/qualifications`;
export const allStudentListApi = `${baseUrl}/users/?UserType=102`;
export const allTutorListApi = `${baseUrl}/users/?UserType=101`;
export const pendingTutorListApi = `${baseUrl}/courses?Status=100`;
