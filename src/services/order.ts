import { client } from './axios';

const fetchOrders = (params?: OrderParams): Promise<OrderPaginateType> => client.get(`/orders`, { params });
const createOrder = (body: OrderPayloadType): Promise<OrderRecordType> => client.post(`/orders/`, body);

const orderService = {
  fetchOrders,
  createOrder,
};

export default orderService;
