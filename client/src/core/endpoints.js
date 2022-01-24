//const baseUrl = `${process.env.REACT_APP_API_URL}/api`;

const baseUrl = `http://localhost:8080/api`;

export const loginApi = `${baseUrl}/login`;
export const registerApi = `${baseUrl}/register`;
export const tutorSearchApi = `${baseUrl}/posts`;
export const courseApi = `${baseUrl}/courses`;
export const qualificationApi = `${baseUrl}/qualifications`;
export const allStudentListApi = `${baseUrl}/users/?UserType=102`;
export const allTutorListApi = `${baseUrl}/users/?UserType=101`;
export const pendingTutorListApi = `${baseUrl}/courses?Status=100`;
