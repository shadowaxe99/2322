```javascript
import axios from 'axios';

const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  register: async (name, email, password) => {
    try {
      const response = await axios.post('/api/auth/register', { name, email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await axios.post('/api/auth/logout');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  authenticateUser: async () => {
    try {
      const response = await axios.get('/api/auth/user');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default authService;
```