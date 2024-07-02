import { FacebookRounded, Google, LinkedIn, MailOutlined, Pinterest, Twitter } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Container, Dialog, Divider, Rating, Tab, TextField } from '@mui/material';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Spinner } from 'components';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useParams } from 'react-router-dom';
import { travelService } from 'services';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { formatNumber } from 'utils/common';
import { PopupCreateOrder } from './popups';

const TourDetail = () => {
  const [value, setValue] = useState('1');

  const { id: tourID } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tourID]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const { data } = useQuery({
    queryKey: ['travelService.fetchTravels', { id: parseInt(tourID!) }],
    queryFn: () => travelService.getTravel({ id: parseInt(tourID!) }),
    placeholderData: keepPreviousData,
  });

  const [openOrder, setOpenOrder] = useState(false);

  return (
    <Spinner>
      <div>
        <div className='bg-[#FF6600]'>
          <Container maxWidth='lg' className='mb-6 py-4'>
            <p className='text-center text-lg font-extrabold text-[#fff]'>KHÁCH SẠN</p>
          </Container>
        </div>
        <Container maxWidth='lg' className='py-12'>
          <div className='flex flex-col gap-4 lg:flex-row'>
            <div className='lg:basis-3/5'>
              <Carousel>
                {[1, 2, 3].map((item) => (
                  <img src={data?.image} key={item} />
                ))}
              </Carousel>
            </div>
            <div className='pl-2 lg:basis-2/5'>
              <p className='text-[28px] font-extrabold'>{data?.name}</p>
              <p className='mb-2 text-2xl font-extrabold'>{formatNumber(data?.price)} đồng/ Người</p>
              <p className='mb-2'>{data?.description}</p>
              <button
                type='button'
                onClick={() => setOpenOrder(true)}
                className='rounded-lg bg-[#E30050] px-5 py-3 font-extrabold text-[#FFF]'
              >
                ĐẶT NGAY
              </button>
              <Divider className='my-4' />
              <div className='mt-3 flex gap-1 text-[#bbb8b8]'>
                <FacebookRounded className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
                <Twitter className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
                <MailOutlined className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
                <Pinterest className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
                <Google className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
                <LinkedIn className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
              </div>
            </div>
          </div>

          <div className='my-5 border border-[#ececec]'></div>

          <TabContext value={value}>
            <TabList onChange={handleChange}>
              <Tab label='MÔ TẢ' value='1' />
              <Tab label='THÔNG TIN BỔ SUNG' value='2' />
              <Tab label='ĐÁNH GIÁ (0)' value='3' />
            </TabList>
            <TabPanel className='border-2 border-[#ececec]' value='1'>
              {data?.description}
            </TabPanel>
            <TabPanel className='border-2 border-[#ececec]' value='2'>
              <div className='flex text-sm'>
                <div className='basis-2/5 font-bold'>Không có.</div>
                <div className='flex basis-3/5'></div>
              </div>
            </TabPanel>
            <TabPanel className='border-2 border-[#ececec]' value='3'>
              <p className='mb-3 text-xl font-extrabold'>Đánh giá</p>
              <p className='mb-8'>Chưa có đánh giá nào.</p>
              <Container maxWidth='lg' className='border-2 border-[#FF6600] py-6'>
                <p className='mb-[10px] text-xl font-extrabold'>
                  Feedback của bạn là niềm vui hạnh của chúng tôi “Đặt Tour SUNNY TRAVEL”
                </p>
                <p className='mb-2 text-sm font-extrabold'>Đánh giá của bạn</p>
                <Rating precision={0.5} />
                <p className='mb-2 mt-4 text-sm font-extrabold'>Nhận xét của bạn *</p>
                <TextField className='mb-4' multiline maxRows={6} rows={4} fullWidth />
                <div className='mb-4 flex gap-6'>
                  <div className='basis-1/2'>
                    <p className='text-sm font-extrabold'>Tên *</p>
                    <TextField fullWidth />
                  </div>
                  <div className='basis-1/2'>
                    <p className='text-sm font-extrabold'>Email *</p>
                    <TextField fullWidth />
                  </div>
                </div>
                <button
                  className='mb-6 rounded-lg bg-[#FF6600] px-5 py-3 text-sm font-extrabold text-[#fff]'
                  type='button'
                >
                  GỬI ĐI
                </button>
              </Container>
            </TabPanel>
          </TabContext>
        </Container>
      </div>

      <Dialog open={openOrder}>
        <PopupCreateOrder item={data!} onClose={() => setOpenOrder(false)} />
      </Dialog>
    </Spinner>
  );
};

export default TourDetail;
