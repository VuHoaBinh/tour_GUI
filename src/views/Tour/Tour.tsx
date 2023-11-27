import { Card, CardContent, Container, Grid } from '@mui/material';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useSearch } from 'hooks';
import { Link } from 'react-router-dom';
import { privateRoute } from 'routes';
import { travelService } from 'services';
import { formatNumber } from 'utils/common';

const Tour = () => {
  const [dataSearch] = useSearch({ page: 0, size: 100 });

  const { data } = useQuery({
    queryKey: ['travelService.fetchTravels', dataSearch],
    queryFn: () => travelService.fetchTravels(dataSearch),
    placeholderData: keepPreviousData,
  });

  const { items = [] } = data ?? {};

  return (
    <div>
      <div className='bg-[#FF6600]'>
        <Container maxWidth='lg' className='mb-6 py-4'>
          <p className='text-center text-[18px] font-extrabold text-[#fff]'>TOUR</p>
        </Container>
      </div>
      <Container maxWidth='lg' className='flex flex-col gap-5 py-8 lg:flex-row'>
        <div className='lg:basis-1/4'>
          <p className='font-extrabold'>NHỮNG TOUR KHÁC</p>
          <div className='py-4'>
            <div className='flex flex-row gap-3 border-b border-[#ececec] py-2'>
              <div className='basis-1/4'>
                <img src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/offers_slide_2-300x300.jpg' />
              </div>
              <div className='basis-3/4 text-sm'>
                Du Lịch Phú Quóc - Nam Đảo 3 ngày 2 đêm dịp Noel & Tết Dương Lịch 2018
                <p className='mt-1 font-extrabold'>4.999.000₫</p>
              </div>
            </div>
            <div className='flex flex-row gap-3 border-b border-[#ececec] py-2'>
              <div className='basis-1/4'>
                <img src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/offers_slide_1-300x300.jpg' />
              </div>
              <div className='basis-3/4 text-sm'>
                Beach Resort Phan Thiết Khuyến Mãi Mùa Đông
                <p className='my-1 font-extrabold'>2.999.000₫</p>
              </div>
            </div>
            <div className='flex flex-row gap-3 border-b border-[#ececec] py-2'>
              <div className='basis-1/4'>
                <img src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/sea_tour_img_1-300x300.jpg' />
              </div>
              <div className='basis-3/4 text-sm'>
                Du Lịch Côn Đảo 2 ngày 1 đêm bay từ Sài Gòn
                <p className='my-1 font-extrabold'>5.299.000₫</p>
              </div>
            </div>
            <div className='flex flex-row gap-3 border-b border-[#ececec] py-2'>
              <div className='basis-1/4'>
                <img src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/Sapa-300x300.jpg' />
              </div>
              <div className='basis-3/4 text-sm'>
                Du Lịch Đà Lạt 2018 giá tốt khởi hành từ Sài Gòn
                <p className='my-1 font-extrabold'>14.999.000₫</p>
              </div>
            </div>
            <div className='flex flex-row gap-3 py-2'>
              <div className='basis-1/4'>
                <img src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/Phoco_hoian-300x300.jpg' />
              </div>
              <div className='basis-3/4 text-sm'>
                Du Lịch Hội An - Quảng Nam khởi hành từ TP.HCM giá tốt
                <p className='my-1 font-extrabold'>59.900.000₫</p>
              </div>
            </div>
          </div>
        </div>
        <Grid container spacing={3} className='lg:basis-3/4'>
          {items?.map((tour) => {
            return (
              <Grid item xs={6} sm={4} key={tour.id}>
                <Link to={privateRoute.tourDetail.url({ id: tour.id })}>
                  <Card className='rounded-md hover:shadow-xl'>
                    <img src={tour.image} className='h-[250px] w-full' />
                    <CardContent>
                      <p className='text-[10px] text-[#353535]'>{tour.domain}</p>
                      <p className='text-sm'>{tour.name}</p>
                      <p className='text-sm font-extrabold'>{formatNumber(tour.price)}</p>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Tour;
