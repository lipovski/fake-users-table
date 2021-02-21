import axiosConfig from '../config/axiosConfig';

export default async (id) => {
  try {
    const result = await axiosConfig.delete(`/posts/${id}`);
    return result.data;
  } catch (e) {
    alert('failed to delete user');
    return { error: 'failed to delete user' };
  }
};
