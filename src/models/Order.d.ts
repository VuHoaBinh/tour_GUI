type OrderRecordType = CommonRecordType & {
  travel: TravelRecordType;
  name: string;
  email: string;
  title: string;
  description: string;
  status: string;
};

type OrderPaginateType = PaginateType & {
  items: OrderRecordType[];
};

type OrderParams = PaginateParams;

type OrderPayloadType = {
  travelId: number;
  name: string;
  email: string;
  title: string;
  description: string;
};
