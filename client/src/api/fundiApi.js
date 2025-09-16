import axios from 'axios';

export const getFundis = async () => {
  const res = await axios.get('/api/fundis');
  return res.data;
};
