import http from "./http-axios";

export const getPortfolio = () => {
  return http.get("/");
};

export const addNewTenancy = (data) => {
  return http.post("/", data);
};

export const removeTenancy = (id) => {
  return http.delete(`/${id}`);
};
