import axios from 'axios';

axios.defaults.baseURL = 'https://65f7487eb4f842e808856c47.mockapi.io';

export async function getAdvertsApi() {
  const { data } = await axios.get('/adverts?page=1&limit=4');
  return data;
}
