import request from "@/utils/request";

// user login
export const login = (data) => {
  return request({
    method: "POST",
    url: "/api/users/login",
    data,
  });
};

// user register
export const register = (data) => {
  return request({
    method: "POST",
    url: "/api/users",
    data,
  });
};
