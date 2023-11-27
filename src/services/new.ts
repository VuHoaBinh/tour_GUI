import { client } from './axios';

const fetchNews = (params?: NewParams): Promise<NewPaginateType> => client.get(`/news`, { params });

const newService = {
  fetchNews,
};

export default newService;
