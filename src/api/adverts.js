import axios from 'axios';

axios.defaults.baseURL = 'https://65f7487eb4f842e808856c47.mockapi.io';

export async function getAdvertsApi(page) {
  const { data } = await axios.get(`/adverts?page=1&limit=${page * 4}`);
  return data;
}

export async function getAdvertApi(id) {
  const { data } = await axios.get(`/adverts/${id}`);
  return data;
}
