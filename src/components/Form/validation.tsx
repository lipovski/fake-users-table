const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export default {
  name: { required: { value: true, message: 'Name is required' } },
  email: {
    required: { value: true, message: 'Email is required' },
    pattern: {
      value: emailRegex,
      message: 'Invalid Email Format',
    },
  },
  username: { required: { value: true, message: 'Username is required' } },
  city: { required: { value: true, message: 'City is required' } },
};
