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
        <div className='flex flex-col gap-1 md:flex-row'>
          <div className='relative'>
            <Card className='parent cursor-pointer lg:basis-1/3'>
              <img
                src='https://cf2.bstatic.com/xdata/images/hotel/square600/49583804.webp?k=d68e49f4a3dda401c8206fd19404ac4107e283bb052d47afa47c3c383de3d40a&o='
                className='h-[174px] w-full'
              />
              <div className='child absolute left-[-10px] top-5 z-30 border-2 border-[#FF6600] bg-[#FFF] px-2 py-1 text-center text-sm font-extrabold leading-4 text-[#FF6600]'>
                Giảm 20%
              </div>
              <CardContent>
                <p className='font-extrabold'>The Originals City, Au Relais Saint-Éloi, Tours </p>
                <HorizontalRule className='mt-2 text-[#0807071a]' />
                <p className='text-sm'>
                  The Originals City, Au Relais Saint-Éloi, Tours offers accommodation with free WiFi in the centre of
                  Tours. It is just a 10/ 15 minute walk from the old city.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='relative'>
            <Card className='parent cursor-pointer lg:basis-1/3'>
              <img
                src='https://cf2.bstatic.com/xdata/images/hotel/square600/260032524.webp?k=a640416ad8a57434e639c6e91b1df76a130b9ee39537e1d3de2098f33940c8a4&o='
                className='h-[174px] w-full'
              />
              <div className='child absolute left-[-10px] top-5 z-30 border-2 border-[#FF6600] bg-[#FFF] px-2 py-1 text-center text-sm font-extrabold leading-4 text-[#FF6600]'>
                {'Giảm ' + Math.floor(Math.random() * 50 + 1) + '%'}
              </div>
              <CardContent>
                <p className='font-extrabold'>Le Grand Hotel Khách sạn ở Tours</p>
                <HorizontalRule className='mt-2 text-[#0807071a]' />
                <p className='text-sm'>
                  Located between the train station in Tours City Centre and the Vinci Congress Centre, this early
                  20th-century hotel offers Art Deco-style guest rooms. It has a 24-hour reception with a tour desk.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='relative'>
            <Card className='parent cursor-pointer lg:basis-1/3'>
              <img
                src='https://cf2.bstatic.com/xdata/images/hotel/square600/310928568.webp?k=f048b81379ee4dca5c30179505b11ffcadd8a527a2f795e061119584eac4b476&o='
                className='h-[174px] w-full'
              />
              <div className='child absolute left-[-10px] top-5 z-30 border-2 border-[#FF6600] bg-[#FFF] px-2 py-1 text-center text-sm font-extrabold leading-4 text-[#FF6600]'>
                {'Giảm ' + Math.floor(Math.random() * 50 + 1) + '%'}
              </div>
              <CardContent>
                <p className='font-extrabold'>ibis budget Tours Nord Khách sạn ở Tours</p>
                <HorizontalRule className='mt-2 text-[#0807071a]' />
                <p className='text-sm'>
                  Located in the north of Tours within the business district, ibis budget Tours Nord offers a 24-hour
                  reception, free Wi-Fi access throughout and a terrace. The train station is a 15-minute drive away.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='relative'>
            <Card className='parent cursor-pointer lg:basis-1/3'>
              <img
                src=' https://cf2.bstatic.com/xdata/images/hotel/square600/324919554.webp?k=881528e6fef695035a27b27d075a438caa80dfd047ebac1d4304ca20fcc5a7a8&o='
                className='h-[174px] w-full'
              />
              <div className='child absolute left-[-10px] top-5 z-30 border-2 border-[#FF6600] bg-[#FFF] px-2 py-1 text-center text-sm font-extrabold leading-4 text-[#FF6600]'>
                {'Giảm ' + Math.floor(Math.random() * 50 + 1) + '%'}
              </div>
              <CardContent>
                <p className='font-extrabold'>Ibis Tours Centre Giraudeau Khách sạn ở Tours</p>
                <HorizontalRule className='mt-2 text-[#0807071a]' />
                <p className='text-sm'>
                  The Ibis Tours Centre Giraudeau is located in Tours, just 3 km from the Saint Gatien Cathedral and a
                  12-minute drive from Gare de Tours Train Station.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='relative'>
            <Card className='parent cursor-pointer lg:basis-1/3'>
              <img
                src='https://cf2.bstatic.com/xdata/images/hotel/square600/561344882.webp?k=16806c380c8a9c616ad2eaf1084fda8f209db5d31200ea338706641ea3dcb1d5&o='
                className='h-[174px] w-full'
              />
              <div className='child absolute left-[-10px] top-5 z-30 border-2 border-[#FF6600] bg-[#FFF] px-2 py-1 text-center text-sm font-extrabold leading-4 text-[#FF6600]'>
                {'Giảm ' + Math.floor(Math.random() * 50 + 1) + '%'}
              </div>
              <CardContent>
                <p className='font-extrabold'>ibis Tours Nord Khách sạn ở Tours The ibis </p>
                <HorizontalRule className='mt-2 text-[#0807071a]' />
                <p className='text-sm'>
                  Tours Nord is set in the heart of the Tours Nord business district, and a 10-minute drive from the
                  historical town centre. It offers air-conditioned rooms with free Wi-Fi access.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='relative'>
            <Card className='parent cursor-pointer lg:basis-1/3'>
              <img
                src='https://cf2.bstatic.com/xdata/images/hotel/square600/349950490.webp?k=824a08a0264ed38f0b18ebf12e1c8dabefbc3c87dc9946c73a170b3d306dcb3e&o='
                className='h-[174px] w-full'
              />
              <div className='child absolute left-[-10px] top-5 z-30 border-2 border-[#FF6600] bg-[#FFF] px-2 py-1 text-center text-sm font-extrabold leading-4 text-[#FF6600]'>
                {'Giảm ' + Math.floor(Math.random() * 50 + 1) + '%'}
              </div>
              <CardContent>
                <p className='font-extrabold'>Hotel Du Cygne Tours Khách sạn ở Tours City Centre</p>
                <HorizontalRule className='mt-2 text-[#0807071a]' />
                <p className='text-sm'>
                  Tours Ideally situated in a quiet street in the centre of historical Tours, Hotel Du Cygne is housed
                  in a charming 18th-century building which has been renovated to offer modern comfort.
                </p>
              </CardContent>
            </Card>
          </div>

          {items.map((item) => (
            <div className='relative'>
              <Card className='parent cursor-pointer lg:basis-1/3'>
                <img
                  src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/trip3-300x161.jpg'
                  className='h-[174px] w-full'
                />
                <div className='child absolute left-[-10px] top-5 z-30 border-2 border-[#FF6600] bg-[#FFF] px-2 py-1 text-center text-sm font-extrabold leading-4 text-[#FF6600]'>
                  {'Giảm ' + Math.floor(Math.random() * 50 + 1) + '%'}
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
