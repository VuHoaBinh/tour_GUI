import { HorizontalRule } from '@mui/icons-material';
import { Card, CardContent, Container } from '@mui/material';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useSearch } from 'hooks';
import { newService } from 'services';

const News = () => {
  const [dataSearch] = useSearch({ page: 0, size: 100 });

  const { data } = useQuery({
    queryKey: ['newService.fetchNews', dataSearch],
    queryFn: () => newService.fetchNews(dataSearch),
    placeholderData: keepPreviousData,
  });
  const { items = [] } = data ?? {};

  return (
    <Container maxWidth='lg' className='py-12'>
      <p className='mb-8 text-center text-lg font-extrabold'>TIN TỨC</p>
      <div className='flex flex-col gap-12 lg:flex-row'>
        <div className='flex flex-col gap-8 md:flex-row'>
          {items.map((item) => (
            <div className='relative'>
              <Card className='parent cursor-pointer lg:basis-1/3'>
                <img
                  src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/trip3-300x161.jpg'
                  className='h-[174px] w-full'
                />
                <div className='child absolute left-[-10px] top-5 z-30 border-2 border-[#FF6600] bg-[#FFF] px-2 py-1 text-center text-sm font-extrabold leading-4 text-[#FF6600]'>
                  {new Date(item.createdAt).getDate()} <br /> Th{new Date(item.createdAt).getMonth()}
                </div>
                <CardContent>
                  <p className='font-extrabold'>{item.name}</p>
                  <HorizontalRule className='mt-2 text-[#0807071a]' />
                  <p className='text-sm'>{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default News;
