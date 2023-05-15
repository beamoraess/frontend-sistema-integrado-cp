import { createContext, useMemo } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const AuthContext = createContext();


const AuthLogin = ({ children }) => {
  const login = async (userId, password, database) => {
    try {
      const formData = new FormData();

      formData.append('userId', userId);
      formData.append('password', password);
      formData.append('database', database);

      const response = await axios.post('https://acl-hmg.prod.unitri.edu.br/login', formData);

      // eslint-disable-next-line prefer-destructuring
      const data = response.data;

      localStorage.setItem('userId', userId);
      localStorage.setItem('token', data.result.jwt);
      console.log('UserID armazenado:', userId);

      return data;
    } catch (error) {
      return { error: true, message: 'Erro no servidor!' };
    }
  };

  const logout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
  };

  const authContextValue = useMemo(() => ({ login, logout }), []);

  return (
    <AuthContext.Provider
      value={authContextValue}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthLogin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLogin;
