import axios from 'axios';

export const getFundis = async () => {
  const res = await fetch('https://booka-fundi.onrender.com/api/fundis');
  return res.json();
};
