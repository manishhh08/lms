export const storeAccessToken = (token) => {
  sessionStorage.setItem("accessToken", token);
};

export const getAccessToken = () => {
  return sessionStorage.getItem("accessToken");
};

export const deleteAccessToken = () => {
  sessionStorage.removeItem("accessToken");
};

export const storeRefreshToken = (token) => {
  sessionStorage.setItem("accessToken", token);
};

export const getRefreshToken = () => {
  return sessionStorage.getItem("refreshToken");
};

export const deleteRefreshToken = () => {
  sessionStorage.removeItem("refreshToken");
};

export const storeToken = () => {
  if (type == "access") storeAccessToken(token);
  if (type == "refresh") storeRefreshToken(token);
};
