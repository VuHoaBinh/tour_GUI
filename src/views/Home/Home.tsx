import { Star } from '@mui/icons-material';
import { Button, Container, Dialog, Grid } from '@mui/material';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useSearch } from 'hooks';
import { useState } from 'react';
import { travelService } from 'services';
import { formatNumber } from 'utils/common';
import { PopupCreateOrder } from 'views/Tour/popups';
import { SliderImg, TourismCities } from '.';
import tours from './db.json';

const Home = () => {
  const [dataSearch] = useSearch({ page: 0, size: 100 });
  const [openOrder, setOpenOrder] = useState(false);
  const [selectOrder, setSelectOrder] = useState<any>();

  const { data } = useQuery({
    queryKey: ['travelService.fetchTravels', dataSearch],
    queryFn: () => travelService.fetchTravels(dataSearch),
    placeholderData: keepPreviousData,
  });

  const { items = [] } = data ?? {};

  return (
    <div>
      <SliderImg />
      <Container maxWidth='lg' className='px-4 lg:p-0'>
        <div className='py-10 text-center'>
          <p className='mb-2 text-2xl font-bold lg:text-3xl'>CÁC TOUR HẤP DẪN</p>
          <p className='text-sm text-[#B2B2B2]'>Chào mừng bạn đến với các tour</p>
        </div>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item xs={12} sm={3}>
              <div
                className='relative overflow-hidden hover:bg-center'
                onClick={() => {
                  setSelectOrder(item!);
                  setOpenOrder(true);
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${item.image})`,
                    transition: 'transform 0.5s',
                  }}
                  className='scale-95 transform rounded-xl bg-cover bg-center bg-no-repeat py-12 pl-3 font-bold text-[#FFFFFF] hover:scale-100'
                >
                  <div className='translate-y-10'>
                    <p className='text-xl font-bold' data-value='place'>
                      {item.name}
                    </p>
                    <div className='py-2 text-sm'>
                      {/* <p className='text-[#FFFFFF]'>{item.description}</p> */}
                      <p className='text-[#FFFFFF]'>{formatNumber(item.price)} / người</p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className='py-10'>
        <div
          style={{
            background: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/tour_slider_phuquoc-1-1024x258.jpg) no-repeat top / cover`,
          }}
          className='px-auto py-20 text-center text-[#FFF]'
        >
          <p className='font-bold lg:text-2xl'>Giảm giá 30%</p>
          <div className='py-4 text-[#FFD700]'>
            <Star fontSize='medium' className='h-[13px] w-[17px] lg:h-[20px] lg:w-[22px]' />
            <Star fontSize='medium' className='h-[13px] w-[17px] lg:h-[20px] lg:w-[22px]' />
            <Star fontSize='medium' className='h-[13px] w-[17px] lg:h-[20px] lg:w-[22px]' />
            <Star fontSize='medium' className='h-[13px] w-[17px] lg:h-[20px] lg:w-[22px]' />
            <Star fontSize='medium' className='h-[13px] w-[17px] lg:h-[20px] lg:w-[22px]' />
          </div>
          <p className='text-3xl font-bold text-[#00FFFF] lg:text-[46px]'>NGHỈ DƯỠNG TẠI PHÚ QUỐC</p>
          <p className='py-4 text-xs lg:text-base'>Từ 5/12 đến 12/12</p>
          <Button className='rounded-2xl bg-[#FF6600] text-xs'>XEM NGAY</Button>
        </div>
      </div>
      <Container maxWidth='lg'>
        <div className='py-16 text-center'>
          <p className='text-3xl font-bold'>NHỮNG TOUR HÚT KHÁCH</p>
          <p className='text-[#B2B2B2]'>Tìm địa điểm tham quan tại các thành phố tại Việt Nam</p>
        </div>
        <Grid container spacing={2}>
          {tours.attractiveTours.map((item) => (
            <Grid item xs={12} sm={3}>
              <div
                className='relative overflow-hidden hover:bg-center'
                onClick={() => {
                  setSelectOrder(item!);
                  setOpenOrder(true);
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${item.image})`,
                    transition: 'transform 0.5s',
                  }}
                  className='scale-95 transform rounded-xl bg-cover bg-center bg-no-repeat py-12 pl-3 font-bold text-[#FFF] hover:scale-100'
                >
                  <div className='translate-y-10'>
                    <p className='text-xl font-bold'>{item.name}</p>
                    <p className='py-2 text-sm'>
                      <span className='text-[#FFFFFF]'>{item.description}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <TourismCities />

      <Dialog open={openOrder}>
        <PopupCreateOrder item={selectOrder!} onClose={() => setOpenOrder(false)} />
      </Dialog>
    </div>
  );
};

export default Home;
