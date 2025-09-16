import axios from 'axios';

export const bookFundi = async (data) => {
  const res = await axios.post('/api/bookings', data);
  return res.data;
};
