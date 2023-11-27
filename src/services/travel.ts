import { client } from './axios';

const fetchTravels = (params?: TravelParams): Promise<TravelPaginateType> => client.get(`/travels`, { params });
const getTravel = ({ id }: { id: number }): Promise<TravelRecordType> => client.get(`/travels/${id}`);

const travelService = {
  fetchTravels,
  getTravel,
};

export default travelService;
