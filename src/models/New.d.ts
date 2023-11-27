type NewRecordType = CommonRecordType & {
  name: string;
  description: string;
  image: string;
};

type NewPaginateType = PaginateType & {
  items: NewRecordType[];
};

type NewParams = PaginateParams;
