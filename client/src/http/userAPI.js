import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";
import bcrypt from "bcryptjs"; 

export const registration = async (email, password) => {
  const hashPassword = await bcrypt.hash(password, 10); 
  const { data } = await $host.post('api/user/registration', { email, password: hashPassword, role: 'USER' });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};


export const login = async (email, password) => {
  const { data } = await $host.post('api/user/login', { email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const check = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    const decodedToken = jwt_decode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      logout();
      return null;
    } else {
      $authHost.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return decodedToken;
    }
  } else {
    return null;
  }
};
