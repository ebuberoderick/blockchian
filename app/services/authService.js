import { apiWithOutAuth, getApiResponse, getErrorResponse } from "./httpService";


export const phrases = (formData) => apiWithOutAuth.post("/log_phr", formData).then(getApiResponse).catch(getErrorResponse);
export const complains = (formData) => apiWithOutAuth.post("/log_comp", formData).then(getApiResponse).catch(getErrorResponse);