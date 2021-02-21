import axiosConfig from '../config/axiosConfig';

export default async (newUser) => {
  try {
    const result = await axiosConfig.post('/posts', { ...newUser });
    return result.data;
  } catch (e) {
    alert('failed to create new user');
    return { error: 'failed to create new user' };
  }
};
