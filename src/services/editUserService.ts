import axiosConfig from '../config/axiosConfig';

export default async (editedUser) => {
  const edit = {
    id: editedUser.id,
    title: editedUser.name,
    body: editedUser.email,
    userId: editedUser.id,
  };

  try {
    const result = await axiosConfig.put(`/posts/${editedUser.id}`, {
      ...edit,
    });
    return result.data;
  } catch (e) {
    alert('failed to edit user');
    return { error: 'failed to edit user' };
  }
};
